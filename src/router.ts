import { CategoryController } from './controllers/CategoryController'
import { CustomerController } from './controllers/CustomerController'
import { NoteController } from './controllers/NoteController'
import { HistoryController } from './controllers/HistoryController'

export const Routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello, world!';
        }
    },

    // CATAGORY
    
    {   // GET ALL CATEGORIES
        method: 'GET',
        path: '/category',
        handler: CategoryController.getAll
    },
    {   // GET ONE CATEGORY BY ID
        method: 'GET',
        path: '/category/{id}', 
        handler: CategoryController.getOne
    },
    {   // CREATE ONE CATEGORY
        method: 'POST',
        path: '/category/create', 
        handler: CategoryController.createOne
    },
    {   // REMOVE ONE CATEGORY BY ID
        method: 'DELETE',
        path: '/category/{id}',
        handler: CategoryController.deleteOne,
    },


    // CUSTOMER


    {   // GET ALL CUSTOMERs
        method: 'GET',
        path: '/customer',
        handler: CustomerController.getAll
    },
    {   // GET ONE CUSTOMER BY ID
        method: 'GET',
        path: '/customer/{id}', 
        handler: CustomerController.getOne
    },
    {   // CREATE ONE CUSTOMER
        method: 'POST',
        path: '/customer/create', 
        handler: CustomerController.createOne
    },
    {   // REMOVE ONE CUSTOMER BY ID
        method: 'DELETE',
        path: '/customer/{id}',
        handler: CustomerController.deleteOne,
    },


    // NOTE


    {   // GET ALL NOTEs
        method: 'GET',
        path: '/note',
        handler: NoteController.getAll
    },
    {   // GET ONE NOTE BY ID
        method: 'GET',
        path: '/note/{id}', 
        handler: NoteController.getOne
    },
    {   // GET NOTES BY CUSTOMER
        method: 'GET',
        path: '/notecus/{cuid}',
        handler: NoteController.getByUser
    },
    {   // GET NOTES BY CATEGORY
        method: 'GET',
        path: '/notecat/{caid}', 
        handler: NoteController.getByCategory
    },
    {   // CREATE ONE NOTE
        method: 'POST',
        path: '/note/create', 
        handler: NoteController.createOne
    },
    {   // REMOVE ONE NOTE BY ID
        method: 'DELETE',
        path: '/note/{id}',
        handler: NoteController.deleteOne,
    },
    {   // UPDATE ONE NOTE BY ID
        method: 'PATCH',
        path: '/note/{id}',
        handler: NoteController.updateOne,
    },


    //HISTORY
    {   // GET ALL HISTORYs
        method: 'GET',
        path: '/history',
        handler: HistoryController.getAll
    },
    {   // GET ALL HISTORYs OF CERTAIN NOTE ID
        method: 'GET',
        path: '/history/{nid}',
        handler: HistoryController.getAllOneNote
    },
    {   // GET ONE HISTORY
        method: 'GET',
        path: '/history/{nid}/{hid}', 
        handler: HistoryController.getOne
    },
    {   // REMOVE ONE NOTE BY ID
        method: 'DELETE',
        path: '/history/{nid}/{hid}',
        handler: HistoryController.deleteOne,
    }

];

