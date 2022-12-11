const request = require('request-promise')
const siteUrl = 'http://localhost:1337'

module.exports = {
    user:{
        create: async user=>{
            await request({
                method:'POST',
                uri:siteUrl+'/botUser',
                json:true,
                body:user
            })
        },
        get: async chatId=>{
            let req = await request({
                method:'GET',
                uri:siteUrl+'/botUser?chatID='+chatId,
                json:true
            })

            console.log(siteUrl+'/botUser?chatID='+chatId)

            return req
        }
    },
    department:{
        get: async lang=>{
            const departments = request({
                method:'GET',
                uri:siteUrl+'/department?language='+lang,
                json:true
            })
            return await departments
        }
    },
    inquiry:{
        create: async inquiry=>{
            await request({
                method:'POST',
                uri:siteUrl+'/inquiry',
                json:true,
                body:inquiry
            })
        }
    },
    data:{
        get:async title=>{
            return await request({
                method:"GET",
                uri:siteUrl+'/data?title='+title,
                json:true
            })
        }
    },
    complaint:{
        create:async complaint=>{
            return await request({
                method:'POST',
                uri:siteUrl+'/complaint',
                json:true,
                body:complaint
            })
        }
    },
    district:{
        get: lang => {
            console.log(siteUrl+'/district?language='+lang)
            return request({
                method:"GET",
                uri:siteUrl+'/district?language='+lang,
                json:true
            })
        }
    }
}