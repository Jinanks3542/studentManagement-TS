"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPages = exports.teacher = void 0;
class teacher {
    teacherVerification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = 'teacher@gmail.com';
                const password = 'teacher';
                const teacherLoginData = {
                    email: req.body.email,
                    password: req.body.password,
                };
                if (email === teacherLoginData.email) {
                    if (password === teacherLoginData.password) {
                        res.redirect('/loginTeacher');
                    }
                    else {
                        res.render('teacherLogin', {
                            passError: 'invalid password',
                            data: teacherLoginData,
                        });
                    }
                }
                else {
                    res.render('teacherLogin', {
                        emailError: 'invalid email',
                        data: teacherLoginData,
                    });
                }
            }
            catch (error) {
                console.error('Login error:', error);
                res.status(500).json({ message: 'Error' });
            }
        });
    }
}
exports.teacher = teacher;
class getPages {
    loadListPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('hii');
                res.render('studentList');
            }
            catch (error) {
            }
        });
    }
}
exports.getPages = getPages;
