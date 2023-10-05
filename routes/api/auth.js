import express from "express";

const router = express.Router();

router.use('/auth/signup', (req, res) =>{
    console.log(req.body);
    res.status(200).json(req.body);
});

export default router;