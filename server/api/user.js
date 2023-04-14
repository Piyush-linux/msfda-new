import { getUsers } from "../db/users.js";
export default defineEventHandler(async (event) => { 
	// const query = getQuery(event)
	try {
		// statements
		const res = await getUsers()
		return res;
	} catch(e) {
		// statements
		console.log(e);
		return "fail";
	}
	// return "hello";
})