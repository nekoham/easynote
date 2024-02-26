"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var CategoryController_1 = require("./controllers/CategoryController");
var CustomerController_1 = require("./controllers/CustomerController");
var NoteController_1 = require("./controllers/NoteController");
var HistoryController_1 = require("./controllers/HistoryController");
exports.Routes = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return 'Hello, world!';
        }
    },
    // CATAGORY
    {
        method: 'GET',
        path: '/category',
        handler: CategoryController_1.CategoryController.getAll
    },
    {
        method: 'GET',
        path: '/category/{id}',
        handler: CategoryController_1.CategoryController.getOne
    },
    {
        method: 'POST',
        path: '/category/create',
        handler: CategoryController_1.CategoryController.createOne
    },
    {
        method: 'DELETE',
        path: '/category/{id}',
        handler: CategoryController_1.CategoryController.deleteOne,
    },
    // CUSTOMER
    {
        method: 'GET',
        path: '/customer',
        handler: CustomerController_1.CustomerController.getAll
    },
    {
        method: 'GET',
        path: '/customer/{id}',
        handler: CustomerController_1.CustomerController.getOne
    },
    {
        method: 'POST',
        path: '/customer/create',
        handler: CustomerController_1.CustomerController.createOne
    },
    {
        method: 'DELETE',
        path: '/customer/{id}',
        handler: CustomerController_1.CustomerController.deleteOne,
    },
    // NOTE
    {
        method: 'GET',
        path: '/note',
        handler: NoteController_1.NoteController.getAll
    },
    {
        method: 'GET',
        path: '/note/{id}',
        handler: NoteController_1.NoteController.getOne
    },
    {
        method: 'GET',
        path: '/notecus/{cuid}',
        handler: NoteController_1.NoteController.getByUser
    },
    {
        method: 'GET',
        path: '/notecat/{caid}',
        handler: NoteController_1.NoteController.getByCategory
    },
    {
        method: 'POST',
        path: '/note/create',
        handler: NoteController_1.NoteController.createOne
    },
    {
        method: 'DELETE',
        path: '/note/{id}',
        handler: NoteController_1.NoteController.deleteOne,
    },
    {
        method: 'PATCH',
        path: '/note/{id}',
        handler: NoteController_1.NoteController.updateOne,
    },
    //HISTORY
    {
        method: 'GET',
        path: '/history',
        handler: HistoryController_1.HistoryController.getAll
    },
    {
        method: 'GET',
        path: '/history/{nid}',
        handler: HistoryController_1.HistoryController.getAllOneNote
    },
    {
        method: 'GET',
        path: '/history/{nid}/{hid}',
        handler: HistoryController_1.HistoryController.getOne
    },
    {
        method: 'DELETE',
        path: '/history/{nid}/{hid}',
        handler: HistoryController_1.HistoryController.deleteOne,
    }
];
//# sourceMappingURL=router.js.map