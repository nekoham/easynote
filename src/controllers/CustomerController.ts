import { Request, ResponseToolkit } from "@hapi/hapi";
import { AppDataSource } from '../data-source';
import { Customer } from "../entities/Customer";

const CustomerRepository = AppDataSource.getRepository(Customer);

export const CustomerController = {
    async getAll(req: Request, res: ResponseToolkit) {
        const customer = await CustomerRepository.find();
        return customer;
    },

    async getOne(req: Request, res: ResponseToolkit) {
        const customer = await CustomerRepository.findOneBy({customerId: parseInt(req.params.id)})
        return customer
    },

    async createOne(req: Request, res: ResponseToolkit) {
        const customer = req.payload as Partial<Customer>
        const result = await CustomerRepository.save(customer)
        return result
    },

    async deleteOne(req: Request, res: ResponseToolkit) {
        const customer = await CustomerRepository.findOneBy({customerId: parseInt(req.params.id)})
        const result = await CustomerRepository.remove(customer)
        return result
    }
};
