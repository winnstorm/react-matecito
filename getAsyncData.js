import products from "./data";

function getAsyncData() {
  const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false;

    setTimeout(() => {
      if (errorFatal) reject("Algo fallo");
      resolve(products);
    }, 2000);
  });

  return promiseData;
}

export function getAsyncItemById(itemID) {
  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.find(
        (item) => item.id === Number(itemID)
      );
      resolve(requestedProduct);
    }, 500);
  });

  return promiseData;
}

export function getAsyncItemsByCategory(catID) {
  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.filter(
        (item) => item.category.toLowerCase() === catID.toLowerCase()
      );
      resolve(requestedProduct);
    }, 500);
  });

  return promiseData;
}

export default getAsyncData;
