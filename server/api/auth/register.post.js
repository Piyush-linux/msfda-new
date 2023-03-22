import { createUser } from "../../db/users.js"

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    console.log('--- server ---')
    console.log(body)
    /*const {
        coursename,
        centreid,
        stream,
        name,
        email,
        number,
        gender,
        age,
        district,
        work,
        designation,
        experience,
        subject,
        appointment,

        college,
        aided,
        address,
        university,
        p_name,
        p_email,
        p_number
    } = body*/

    //    if (!username || !email || !password || !repeatPassword || !name) {
    //        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))
    //    }

    //    if (password !== repeatPassword) {
    //        return sendError(event, createError({ statusCode: 400, statusMessage: 'Passwords do not match' }))
    //    }

    /*const userData = {
        coursename,
        centreid,
        stream,
        name,
        email,
        number,
        gender,
        age,
        district,

        work,
        designation,
        experience,
        subject,
        appointment,

        college,
        aided,
        address,
        university,
        p_name,
        p_email,
        p_number
    }*/
    try{
        const user = await createUser(body)
        return user
    }catch(e){
        console.log(e)
        return "fail"
    }



    // let a = event.req.url
    // let b = event.context.params
    // return { url: a , param : b , body: body } 
})