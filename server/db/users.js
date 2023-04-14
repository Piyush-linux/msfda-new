/*
- create user
- create course
- update course
- getExcelData
*/

import { prisma } from ".";
// import bcrypt from "bcrypt"

export const createUser = (userData) => {
    console.log(userData)
    console.log('---')
    return prisma.user.create({
        data: userData
    })
    console.log('created data')

}

/*
-- Users
get
*/
export const getUsers = (id) => {
    let res = prisma.user.findMany({
      select: {
        id:true,
        name: true,
        email: true,
        number: true
      }
    })
    return res
}

export const getUsr = (id) => {
    console.log(id)
    // chk params exist : centreid , courseid , date 
    let res = prisma.user.findFirst({
        where: {
            centreid: id
        }
    })
    return res
}


// Excel Output

export const getExcelData = async (userData) => {
    /*
        - get params
        - if A
            do A
        - else
            do B
    */


    const res = await prisma.admin.findFirst({
        where: {
            username: userData.username,
            password: userData.password
        }
    })

    console.log('Excel')

    if (res.role == 'admin') {
        let res = prisma.user.findMany()
        console.log(res)
        return res
    } else if (res.role == 'cc1') {
        let res = prisma.user.findMany({
            where: {
                centreid: '1'
            }
        })
        return res
    } else if (res.role == 'cc2') {
        let res = prisma.user.findMany({
            where: {
                centreid: '2'
            }
        })
        return res
    } else if (res.role == 'cc3') {
        let res = prisma.user.findMany({
            where: {
                centreid: '3'
            }
        })
        return res
    } else if (res.role == 'cc4') {
        let res = prisma.user.findMany({
            where: {
                centreid: '4'
            }
        })
        return res
    } else if (res.role == 'cc5') {
        let res = prisma.user.findMany({
            where: {
                centreid: '5'
            }
        })
        return res
    } else if (res.role == 'cc6') {
        let res = prisma.user.findMany({
            where: {
                centreid: '6'
            }
        })
        return res
    } else if (res.role == 'cc7') {
        let res = prisma.user.findMany({
            where: {
                centreid: '7'
            }
        })
        return res
    }



    return 'non admin'
}


export const getAdmin = (userData) => {
    console.log('getAdmin')
    return prisma.admin.findFirst({
        where: {
            username: userData.username,
            password: userData.password
        }
    })
}

// centre wise course


export const getCentreCourse = (id) => {

    return prisma.course.findMany({
        where: {
            centreid: id
        }
    })
}