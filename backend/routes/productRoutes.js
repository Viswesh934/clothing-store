const router= require('express').Router();
const {getproductsbyname,getproducts,createorupdateproduct}=require('../controllers/productController');

router.get('/:name',getproductsbyname);

router.get('/',getproducts);

router.post('/upsert',createorupdateproduct);


module.exports=router;