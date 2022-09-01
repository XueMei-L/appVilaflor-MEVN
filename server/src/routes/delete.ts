/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { User } from '../models/user';
import { Product } from '../models/products';

import path from 'path';
import fs from 'fs-extra';


export const appDeleteRouter = express();

/** 
 * For GET  - req.params req.query
 * For POST - req.body
 */

/**
 * Eliminar un producto
 */
appDeleteRouter.delete('/products', async (req, res) => {
    if (!req.query.name) {
      return res.status(400).send({
        error: 'A name must be provided',
      });
    }
  
    try {
      // filtra para encontrar el objecto
      const product = await Product.findOneAndDelete({title: req.query.name.toString()});
  
      if (!product) {
        return res.status(404).send();
      } else {
        // Para eliminar la imagen
        await fs.unlink(path.resolve(product.imagePath))
      }
  
      return res.send(product);
    } catch (error) {
      res.status(400).send();
    }
});