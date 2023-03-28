export default defineEventHandler(async (event) => {

	let p1 = {
		name:"P1",
		email:"piyu@gmail.com",
		status:true
	}
	let p2 = {
		name:"P2",
		email:"piyu@gmail.com",
		status:true
	}
	let p3 = {
		name:"P3",
		email:"piyu@gmail.com",
		status:false
	}
	let p4 = {
		name:"P4",
		email:"piyu@gmail.com",
		status:false
	}
	let p5 = {
		name:"P5",
		email:"piyu@gmail.com",
		status:true
	}

	let data = [p1,p2,p3,p4,p5]

	return data
 })