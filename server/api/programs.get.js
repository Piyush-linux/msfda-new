// get credential
// authorize 
// then export accordingly

import { getExcelData } from "../db/users.js"
import json2xls from 'json2xls';
import fs from 'fs';
import { sendStream } from 'h3'

export default defineEventHandler(async (event) => { 

    // const body = await useBody(event)

    const query = getQuery(event)
    console.log(query)
	// const json = [{firstName: 'Bob', name: 'Lennon'}, {firstName: 'Jack', name: 'Sparrow'}]

	try{
        // JSON to excel
        // send params to getExcelData
        const json = await getExcelData(query)
        console.log(json)
		const xls = json2xls(json);
		fs.writeFileSync('exported.xlsx', xls, 'binary');
		return sendStream(event, fs.createReadStream('exported.xlsx')) ;
        
        // var fileReadStream = fs.createReadStream('exported.xlsx');  
        // res.setHeader('Content-disposition', 'attachment; filename=program.xlsx');
        // fileReadStream.pipe(res);

        // return sendStream(event, fileReadStream) ;
		// return json
    }catch(e){
        console.log(e)
        return "fail"
    }

})