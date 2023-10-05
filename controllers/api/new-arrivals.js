import NewArrival from "../../models/new-arrival.js";

export const addProduct = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const entry = await NewArrival.create(data);
      resolve(entry);
    } catch (err) {
      reject(err);
    }
  });
};

export const getAllProducts = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await NewArrival.find({}).exec();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};
