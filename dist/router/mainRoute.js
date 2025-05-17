"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainController = require("../controller/mainController");
const router = (0, express_1.Router)();
router.get('/teacherLogin', (req, res) => {
    res.render('teacherLogin');
});
router.get('/studentLogin', (req, res) => {
    res.render('studentLogin');
});
const fromTeacher = new mainController.teacher();
const loadList = new mainController.getPages();
router.get('/loginTeacher', (req, res) => loadList.loadListPage(req, res));
router.post('/loginTeacher', (req, res) => fromTeacher.teacherVerification(req, res));
exports.default = router;
