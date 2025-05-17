import {Router,Request,Response} from 'express'
import * as mainController from '../controller/mainController'
const router:Router = Router()

router.get('/teacherLogin',(req:Request,res:Response)=>{
    res.render('teacherLogin')
})

router.get('/studentLogin',(req:Request,res:Response)=>{
    res.render('studentLogin')
})

const fromTeacher = new mainController.teacher()
const loadList = new mainController.getPages()

router.get('/loginTeacher',(req:Request,res:Response)=>loadList.loadListPage(req,res))
router.post('/loginTeacher',(req:Request,res:Response)=>fromTeacher.teacherVerification(req,res))
export default router;  