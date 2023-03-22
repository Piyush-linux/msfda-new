import { getAdmin , getExcelData } from "../../db/users.js"
import json2xls from 'json2xls';
import fs from 'fs';
import { sendStream } from 'h3'


export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const {
        username,
        password
    } = body

    const userData = {
        username,
        password
    }

    try{
        console.log(userData)
        const user = await getAdmin(userData)
        console.log(user)
        if(user){
            return user 
        }
    }catch(e){
        console.log(e)
        return "fail"
    }



    // let a = event.req.url
    // let b = event.context.params
    // return { url: a , param : b , body: body } 
})