import products from "./data";

function getAsyncData() {
  console.log("Solicitando datos");
  const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false;

    setTimeout(() => {
      if (errorFatal) reject("Algo fallo");
      console.log("Promesa Ok");
      resolve(products);
    }, 2000);
  });

  console.log("Promesa generada");

  return promiseData;
}

export function getAsyncItemById(itemID) {
  console.log("Solitando producto id....", itemID);

  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.find(
        (item) => item.id === Number(itemID)
      );
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct);
    }, 500);
  });

  console.log("Promesa generada.");

  return promiseData;
}

export function getAsyncItemsByCategory(catID) {
  console.log("Solitando productos para... ", catID);

  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.filter(
        (item) => item.category.toLowerCase() === catID.toLowerCase()
      );
      // TODO: validar si encontramos un producto -> si no es así, rechazamos la promesa
      resolve(requestedProduct);
    }, 500);
  });

  console.log("Promesa generada.");

  return promiseData;
}

export default getAsyncData;
