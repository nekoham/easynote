import { Request, ResponseToolkit } from "@hapi/hapi";
import { AppDataSource } from '../data-source';
import { Categorynote } from "../entities/Categorynote";

const CategoryRepository = AppDataSource.getRepository(Categorynote);

export const CategoryController = {
    async getAll(req: Request, res: ResponseToolkit) {
        const users = await CategoryRepository.find();
        console.log(users)
        return users;
    },

    async getOne(req: Request, res: ResponseToolkit) {
        const category = await CategoryRepository.findOneBy({categoryId: parseInt(req.params.id)})
        return category
    },

    async createOne(req: Request, res: ResponseToolkit) {
        const category = req.payload as Partial<Categorynote>
        const result = await CategoryRepository.save(category)
        return result
    },

    async deleteOne(req: Request, res: ResponseToolkit) {
        const category = await CategoryRepository.findOneBy({categoryId: parseInt(req.params.id)})
        const result = await CategoryRepository.remove(category)
        return result
    }
};
