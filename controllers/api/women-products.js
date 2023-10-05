import WomenCarouel from "../../models/women-product.js";

export const addProduct = async (data) => {
    return new Promise(async (resolve, reject) => {
      try {
        const entry = await WomenCarouel.create(data);
        resolve(entry);
      } catch (err) {
        reject(err);
      }
    });
  };
  
  export const getAllProducts = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await WomenCarouel.find({}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };