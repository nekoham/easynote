import { EventSubscriber, EntitySubscriberInterface, UpdateEvent } from "typeorm"
import { Note } from '../entities/Note';
import { Historynote } from '../entities/Historynote';

@EventSubscriber()
export class noteSubscriber implements EntitySubscriberInterface<Note> {
    listenTo() {
        return Note;
    }

    async beforeUpdate(event: UpdateEvent<Note>) {
        console.log("Before update called");
        const historynote = new Historynote();
        historynote.noteId = event.databaseEntity.noteId;
        historynote.previousData = event.databaseEntity.data;
        await event.manager.save(historynote);
      }
}
