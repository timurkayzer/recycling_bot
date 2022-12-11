const Scene = require("telegraf/scenes/base")
const Strings = require('../helpers/strings')
const Keyboards = require('../helpers/keyboards')
const Queries = require('../helpers/queries')
const Markup = require('telegraf/markup')
const Various = require('../helpers/various')

const serviceScene = new Scene('serviceScene')


serviceScene.enter(ctx=>{
    const lang = ctx.session.lang
    ctx.reply(Strings.service.messages[lang].hello,Markup.keyboard(Keyboards.serviceKeyboard(lang)).extra())
})


serviceScene.hears([
    Strings.service.keys.ru.analysis,
    Strings.service.keys.uz.analysis
],ctx=>{
    //ctx.reply()
})


serviceScene.hears([
    Strings.service.keys.ru.destruction,
    Strings.service.keys.uz.destruction
],ctx=>{
    const lang = ctx.session.lang
    ctx.reply(Strings.service.messages[lang].destruction, Markup.keyboard(Keyboards.serviceDestrKeyboard(lang)).extra())
})


serviceScene.hears([
    Strings.common.ru.back_to_main,
    Strings.common.uz.back_to_main
],ctx=>{
    ctx.scene.enter('mainScene')
})


serviceScene.hears([
    Strings.common.ru.back,
    Strings.common.uz.back
],ctx=>{
    ctx.scene.enter('serviceScene')
})

serviceScene.on('contact',ctx=>{
    let inquiry = {}
    let contact = ctx.update.message.contact
    const lang = ctx.session.lang

    inquiry.phone = contact.phone_number
    inquiry.userId = ctx.update.message.from.id
    inquiry.name = contact.first_name + ' ' + contact.last_name
    inquiry.category = 'АКБ'

    Queries.inquiry.create(inquiry)

    ctx.reply(Strings.battery.messages[lang].inquiry_saved)
    ctx.scene.enter('serviceScene')
})



module.exports = serviceScene