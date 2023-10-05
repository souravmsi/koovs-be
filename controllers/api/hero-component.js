import Hero from "../../models/hero.js";

export const createItem = async (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            const entry = await Hero.create(data);
            resolve(entry);
        }catch(err){
            reject(err);
        }
    });
}


export const getAllItems = async () => {
    return new Promise(async (resolve, reject) => {
        try{
            const data = await Hero.find({}).exec();
            resolve(data);
        }catch(err){
            reject(err);
        }
    });
}