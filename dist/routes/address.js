"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
exports.addressesRouter = (0, express_1.Router)();
const address = [{ value: 'Lenina 12' }, { value: 'Bolshevikov 12' }];
exports.addressesRouter.get('/', (req, res) => {
    let helloMessage = 'Hello Incubator!!!!';
    res.send(helloMessage);
});
