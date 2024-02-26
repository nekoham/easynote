import { EntitySubscriberInterface, EventSubscriber, RemoveEvent } from "typeorm";
import { Categorynote } from "../entities/Categorynote";
import { Note } from "../entities/Note";

@EventSubscriber()
export class categorySubscriber implements EntitySubscriberInterface<Categorynote> {
    listenTo() {
        return Categorynote;
    }

    async afterRemove(event: RemoveEvent<Categorynote>) {
        const notes = await event.manager.find(Note, { where: { categoryId: event.databaseEntity.categoryId } });
        for (const note of notes) {
            note.categoryId = null;
            await event.manager.save(note);
        }
    }
}
