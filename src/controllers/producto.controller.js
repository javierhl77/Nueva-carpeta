


const express = require("express");
const router = express.Router();


const ProductRepository = require("../repositories/product.repositorie.js");
const productRepositorie  = new ProductRepository();   //productRepositorie

class ProductController {
  async getProductos(req,res) {


    try {
        //const limit = req.query.limit;
        const { limit = 10, page = 1, sort, query } = req.query;

        const productos = await productRepositorie.getProducts({
            limit: parseInt(limit),
            page: parseInt(page),
            sort,
            query
        });

        res.json({
            status: 'success',
            payload: productos,
            totalPages: productos.totalPages,
            prevPage: productos.prevPage,
            nextPage: productos.nextPage,
            page: productos.page,
            hasPrevPage: productos.hasPrevPage,
            hasNextPage: productos.hasNextPage,
            prevLink: productos.hasPrevPage ? `/api/products?limit=${limit}&page=${productos.prevPage}&sort=${sort}&query=${query}` : null,
            nextLink: productos.hasNextPage ? `/api/products?limit=${limit}&page=${productos.nextPage}&sort=${sort}&query=${query}` : null,
        });

        
    } catch (error) {
        console.log("Error al obtener los productos", error);
        res.status(500).json({ error: "Error del servidor" });
    }
  }


  async postProducts(req,res) {

    const nuevoProducto = req.body;
    console.log(nuevoProducto);
    try {
       await productRepositorie.addProduct(nuevoProducto),
       res.status(201).json({message: "producto agregado con exito"});
    } catch (error) {
       console.log("error al agregar producto", error);
       res.status(500).json({error: "error del servidor"});
    }
  }
}

module.exports = ProductController;