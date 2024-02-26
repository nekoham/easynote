import { Request, ResponseToolkit } from "@hapi/hapi";
import { AppDataSource } from '../data-source';
import { Historynote } from "../entities/Historynote";


const HistoryRepository = AppDataSource.getRepository(Historynote);

export const HistoryController = {
    async getAll(req: Request, res: ResponseToolkit) {
        const history = await HistoryRepository.find();
        return history;
    },

    async getAllOneNote(req: Request, res: ResponseToolkit) {
        const history = await HistoryRepository.findBy({noteId: parseInt(req.params.nid)})
        return history 
    },

    async getOne(req: Request, res: ResponseToolkit) {
        const history = await HistoryRepository.findOneBy({noteId: parseInt(req.params.nid), historyId: parseInt(req.params.hid)})
        return history
    },

    async deleteOne(req: Request, res: ResponseToolkit) {
        const history = await HistoryRepository.findOneBy({noteId: parseInt(req.params.nid), historyId: parseInt(req.params.hid)})
        const result = await HistoryRepository.remove(history)
        return result
    },
};
