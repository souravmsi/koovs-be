import express from 'express'
import { addProduct, getAllProducts } from '../../controllers/api/women-products.js';

const router = express.Router(); 

router.post('/women-product', async (req, res) => {
    try {
        const data = await addProduct(req.body);
        res.status(201).json(data);
    }catch(err){
        res.status(501).json({msg:'Something went wrong'});
    }
})

router.get('/women-products', async (req, res) => {
    try {
        const data = await getAllProducts();
        res.status(201).json(data);
    }catch(err){
        res.status(501).json({msg:'Something went wrong'});
    }
})

export default router;