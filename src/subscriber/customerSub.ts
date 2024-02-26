import { EntitySubscriberInterface, EventSubscriber, RemoveEvent } from "typeorm";
import { Customer } from "../entities/Customer";
import { Note } from "../entities/Note";

@EventSubscriber()
export class customerSubscriber implements EntitySubscriberInterface<Customer> {
    listenTo() {
        return Customer;
    }

    async afterRemove(event: RemoveEvent<Customer>) {
        const notes = await event.manager.find(Note, { where: { customerId: event.databaseEntity.customerId } });
        for (const note of notes) {
            await event.manager.remove(note);
        }
        console.log("Removal Completed")
    }
}
