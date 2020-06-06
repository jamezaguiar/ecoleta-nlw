/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => ({
      id: item.id,
      title: item.title,
      image_url: `http://192.168.100.13:3333/uploads/${item.image}`,
    }));

    return response.json(serializedItems);
  }
}

export default new ItemController();
