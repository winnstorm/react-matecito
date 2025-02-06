import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  updateDoc,
} from "firebase/firestore";
import products from "./data";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  appId: import.meta.env.VITE_FIRESTORE_APPID,
  authDomain: "matecito-ee2d5.firebaseapp.com",
  projectId: "matecito-ee2d5",
  storageBucket: "matecito-ee2d5.firebasestorage.app",
  messagingSenderId: "456771147106",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function getAsyncData() {
  const collectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(collectionRef);

  const documentsData = productsSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return documentsData;
}

export async function getAsyncItemById(itemID) {
  const docRef = doc(db, "products", itemID);
  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists()) {
    return null;
  }

  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}

export async function getAsyncItemsByCategory(catID) {
  try {
    const productsColRef = collection(db, "products");

    const categoryFormatted =
      catID.charAt(0).toUpperCase() + catID.slice(1).toLowerCase();

    const q = query(productsColRef, where("category", "==", categoryFormatted));
    const productsSnapshot = await getDocs(q);

    if (productsSnapshot.empty) {
      return [];
    }

    const documentsData = productsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return documentsData;
  } catch (error) {
    throw error;
  }
}

export async function exportProductsToDB() {
  for (let item of products) {
    delete item.id;
    const docID = await addDoc(collection(db, "products"), item);
  }
}

export async function exportProductsWithBatch() {
  const batch = writeBatch(db);

  products.forEach((item) => {
    const itemid = `${item.id}`;
    delete item.id;
    const newDoc = doc(db, "products", `item-${itemid}`);
    batch.set(newDoc, item);
  });

  const commitRes = await batch.commit();
}

export const createOrder = async (orderData) => {
  try {
    const validatedOrder = {
      buyer: {
        name: orderData.buyer.name || "",
        phone: orderData.buyer.phone || "",
        email: orderData.buyer.email || "",
      },
      items: orderData.items.map((item) => ({
        id: item.id || "",
        title: item.title || "",
        quantity: Number(item.quantity) || 0,
        price: Number(item.price) || 0,
      })),
      date: new Date(),
      total: Number(orderData.total) || 0,
    };

    const ordersCollection = collection(db, "orders");
    const orderRef = await addDoc(ordersCollection, validatedOrder);
    return orderRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const updateProductStock = async (productId, quantity) => {
  try {
    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      const currentStock = productSnap.data().stock;
      const newStock = Math.max(0, currentStock - quantity);

      await updateDoc(productRef, {
        stock: newStock,
      });
    }
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
};

export const checkProductStock = async (items) => {
  const outOfStock = [];

  for (const item of items) {
    const productRef = doc(db, "products", item.id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      console.warn(`Producto con ID ${item.id} no encontrado`);
      outOfStock.push(item);
      continue;
    }

    const stockDb = productSnap.data().stock;
    if (stockDb < item.count) {
      outOfStock.push({
        ...item,
        availableStock: stockDb,
      });
    }
  }

  if (outOfStock.length > 0) {
    throw new Error(
      `Productos sin stock suficiente: ${outOfStock
        .map((item) => item.title)
        .join(", ")}`
    );
  }

  return true;
};
