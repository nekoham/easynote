import { Request, ResponseToolkit } from "@hapi/hapi";
import { AppDataSource } from '../data-source';
import { Note } from "../entities/Note";

const NoteRepository = AppDataSource.getRepository(Note);

export const NoteController = {
    async getAll(req: Request, res: ResponseToolkit) {
        const note = await NoteRepository.find();
        return note;
    },

    async getOne(req: Request, res: ResponseToolkit) {
        const note = await NoteRepository.findOneBy({noteId: parseInt(req.params.id)})
        return note
    },

    async getByUser(req: Request, res: ResponseToolkit) {
        const customer = await NoteRepository.findBy({customerId: parseInt(req.params.cuid)})
        return customer
    },

    async getByCategory(req: Request, res: ResponseToolkit) {
        const customer = await NoteRepository.findBy({categoryId: parseInt(req.params.caid)})
        return customer
    },

    async createOne(req: Request, res: ResponseToolkit) {
        const note = req.payload as Partial<Note>
        const result = await NoteRepository.save(note)
        return result
    },

    async deleteOne(req: Request, res: ResponseToolkit) {
        const note = await NoteRepository.findOneBy({noteId: parseInt(req.params.id)})
        const result = await NoteRepository.remove(note)
        return result
    },

    async updateOne(req: Request, res: ResponseToolkit) {
        const note = await NoteRepository.findOneBy({noteId: parseInt(req.params.id)})
        console.log(req.payload)

        const payload = req.payload as Record<string, any>; // CAST OVER TO MAKE TS TREAT IT AS AN OBJECT WITH STRING KETS+ANY VALUE
        note.data = payload.data;
        note.tags = payload.tags;
        note.categoryId = payload.categoryId;

        const result = await NoteRepository.save(note)
        return result
    }
};
