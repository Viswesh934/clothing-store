const prisma=require('../db/db')


const discountdescription=(discountType, discountValue, buyX, getY, season, startDate, endDate)=>{
    switch (discountType) {
        case "percentage":
            return `Discount of ${discountValue}% applied`;
        case "Bogo":
            return `Buy ${buyX} get ${getY} free`;
        case "seasonal":
            return `Seasonal discount from ${startDate} to ${endDate}`;
        case "amount":
            return `Discount of ${discountValue} applied`;
        default:
            return "No discount";
}}



const createorupdateproduct=async(req,res)=>{
  try {
    const { name, brand, price, isBranded, 
        discountType, discountValue, buyX, getY, 
        season, startDate, endDate, modifiedById 
   } = req.body;

    let discount = null;

    if (discountType && discountType !== "Not applicable") {
      discount = await prisma.discount.create({
        data: {
          percentage: discountType === 'percentage' ? parseInt(discountValue) : 0,
          description: discountdescription(discountType, discountValue, buyX, getY, season, startDate, endDate),
        },
      });
    }

    const existingProduct = await prisma.product.findFirst({
      where: { name },
    });

    let product;
    if (existingProduct) {
 
      product = await prisma.product.update({
        where: { id: existingProduct.id },
        data: {
          brand: isBranded ? brand : null,
          price: parseInt(price),
          isBranded,
          discountId: discount ? discount.id : existingProduct.discountId,
          modifiedById: modifiedById ? parseInt(modifiedById) : existingProduct.modifiedById,
        },
      });
    } else {
     
      product = await prisma.product.create({
        data: {
          name,
          brand: isBranded ? brand : null,
          price: parseInt(price),
          isBranded,
          discountId: discount ? discount.id : null,
          modifiedById: modifiedById ? parseInt(modifiedById) : null,
        },
      });
    }

    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const getproductsbyname=async(req,res)=>{

    try{
        const name=req.params.name;
        const data=await prisma.product.findUnique({
            where:{
                id:req.params.name
            }
        })
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }

}

const getproducts=async(req,res)=>{
    try{
        const data=await prisma.product.findMany();
        console.log(data)
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


module.exports={getproductsbyname,getproducts,createorupdateproduct};