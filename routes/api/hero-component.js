import express from 'express'
import { createItem, getAllItems } from '../../controllers/api/hero-component.js';

const router = express.Router(); 

router.post('/hero-component', async (req, res) => {
    try {
        const data = await createItem(req.body);
        res.status(201).json(data);
    }catch(err){
        res.status(501).json({msg:'Something went wrong'});
    }
})

router.get('/hero-components', async (req, res) => {
    try {
        const data = await getAllItems();
        res.status(201).json(data);
    }catch(err){
        res.status(501).json({msg:'Something went wrong'});
    }
})

export default router;