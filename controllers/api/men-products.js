import MenCarousel from "../../models/men-product.js";

export const addProduct = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const entry = await MenCarousel.create(data);
      resolve(entry);
    } catch (err) {
      reject(err);
    }
  });
};

export const getAllProducts = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await MenCarousel.find({}).exec();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};
