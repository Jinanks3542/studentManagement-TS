import {Request,Response} from 'express';


interface mainDatas{
    id:number;
    name:string;
    email:string;
    password:string;
    rollno:number;
    department:string;
}

type Data = Partial<mainDatas>

export class teacher {
    public async teacherVerification (req:Request,res:Response):Promise<void> {
        try {
            const email:string = 'teacher@gmail.com';
            const password:string = 'teacher'

            const teacherLoginData:Data={
                email:req.body.email,
                password:req.body.password,
            }

            if(email===teacherLoginData.email){
                if(password === teacherLoginData.password){
                    res.redirect('/loginTeacher')
                }else{
                    res.render('teacherLogin',{
                        passError:'invalid password',
                        data : teacherLoginData,
                    })
                }
            }else{
                res.render('teacherLogin',{
                    emailError: 'invalid email',
                    data : teacherLoginData,
                })
            }

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({message:'Error'})
        }
    }
}

export class getPages{
    public async loadListPage (req:Request,res:Response):Promise<void> {
        try {
            console.log('hii');
            
            res.render('studentList')
        } catch (error) {
            
        }
    }
}
