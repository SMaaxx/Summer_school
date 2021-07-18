import Router from 'express';
import ProductController from "./productController.js";

const router = new Router();

router.post('/products/create', ProductController.create)
router.get('/products',ProductController.getAll)
router.get('/products/:id',ProductController.getProduct)
router.put('/products/:id/update', ProductController.update)
router.delete('/products/:id/delete', ProductController.delete)

export default router;
