import Products from "./product.js";

class ProductController {
    async create(req,res){
        try {
                const {sku, name, type, cost} = req.body;
                const products = await Products.create({sku, name, type, cost});
                console.log(req.body);
                res.json(products);
            } catch (e) {
                res.status(500).json(e)
            }
    }
    async getAll(req,res){
        try {
            const products = await Products.find();
            console.log(products);
            return res.json(products)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getProduct(req,res){
        try {
            const {id} = req.params
            if (!id){
                res.status(400).json({message: 'Id не указан'})
            }
            const product = await Products.findById(id);
            return res.json(product)
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try {
        const products = req.body
            const {id} = req.params
            if (!id){
                res.status(400).json({message: 'Id не указан'})
            }
        const updatedProducts = await Products.findByIdAndUpdate(id,products,{new: true})
            return res.json(updatedProducts)

        }catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try {
            const {id} = req.params
            if (!id){
                res.status(400).json({message: 'Id не указан'})
            }
            const products = await Products.findOneAndDelete()
            return res.json(products)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ProductController();