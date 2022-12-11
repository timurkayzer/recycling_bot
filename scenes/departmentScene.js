const Scene = require('telegraf/scenes/base')
const Strings = require('../helpers/strings')
const Queries = require('../helpers/queries')
const Markup = require('telegraf/markup')
const Various = require('../helpers/various')

const departmentScene = new Scene('departmentScene')

departmentScene.enter(async ctx=>{
    const lang = ctx.session.lang
    const districts = await Queries.district.get(lang)
    const type = ctx.session.type
    let keys = []

    for(let i in districts){
        if((type === 'akb' || type === 'metal') && !Various.isEmpty(districts[i].departments))
        keys.push(districts[i].title)

        if(type === 'contacts' && !Various.isEmpty(districts[i].contacts))
        keys.push(districts[i].title)
    }

    keys.push(Strings.common[lang].back)
    ctx.reply(Strings.district.messages[lang].select_distr,Markup.keyboard(keys).extra())

    ctx.session.districts = JSON.stringify(districts)
})

departmentScene.hears([
    Strings.common.ru.back,
    Strings.common.uz.back
],ctx=>{
    let sceneName

    switch (ctx.session.type) {
        case 'akb':
            sceneName = 'batteryScene'
            break
        case 'metal':
            sceneName = 'metalScene'
            break
        case 'contacts':
            sceneName = 'mainScene'
            break;
        default: sceneName = 'batteryScene'
    }
    ctx.scene.enter(sceneName)
})

departmentScene.on('message', ctx=>{

    const lang = ctx.session.lang
    const districts = JSON.parse(ctx.session.districts)
    const type = ctx.session.type
    const title = ctx.update.message.text
    let inList = false

    for(let i in districts){
        if(districts[i].title === title){
            inList = true

            if(type === 'akb' || type === 'metal'){
                let departments = districts[i].departments
                for(let j in departments){
                    let messageText = ""
                    if(departments[j].type==='both' || departments[j].type===ctx.session.type){
                        messageText += '*' + departments[j].title + '*\n'
                        messageText += departments[j].address + '\n'
                        messageText += Strings.battery.messages[lang].contact_person + ': ' + departments[j].contact_person + '\n'
                        messageText += departments[j].phone + '\n\n'
                    }
                    else continue

                    if(messageText)
                        ctx.replyWithMarkdown(messageText)
                }
            }
            else if(type === 'contacts'){
                let contacts = districts[i].contacts
                for(let j in contacts){
                    let messageText = ""

                    if(contacts[j].title)
                        messageText += '*' + contacts[j].title + '*\n'
                    messageText += contacts[j].text + '\n'

                    if(messageText)
                        ctx.replyWithMarkdown(messageText)
                }
            }


        }
    }

    if(!inList){
        ctx.reply(Strings.district.messages[lang].incorrect_distr)
    }

})

module.exports = departmentScene