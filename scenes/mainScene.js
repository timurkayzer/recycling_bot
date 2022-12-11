const Scene = require("telegraf/scenes/base")
const Strings = require('../helpers/strings')
const Keyboards = require('../helpers/keyboards')
const Queries = require('../helpers/queries')
const Markup = require('telegraf/markup')

const mainScene = new Scene('mainScene')

mainScene.enter(ctx=>{
    const lang = ctx.session.lang
    ctx.reply(Strings.main.mainKeyboard[lang].message,Markup.keyboard(Keyboards.mainKeyboard(lang)).extra())
})

/*
*
* PROVIDE OTHER SCENES
*
* */

mainScene.hears([
    Strings.main.mainKeyboard.ru.give_battery,
    Strings.main.mainKeyboard.ru.give_battery
],ctx=>{
    ctx.scene.enter('batteryScene')
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.give_metal,
    Strings.main.mainKeyboard.ru.give_metal
],ctx=>{
    ctx.scene.enter('metalScene')
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.service,
    Strings.main.mainKeyboard.ru.service
],ctx=>{
    ctx.scene.enter('serviceScene')
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.complain,
    Strings.main.mainKeyboard.ru.complain
],ctx=>{
    ctx.scene.enter('complainScene')
})


/*
*
* MESSAGE COMMANDS
*
* */

mainScene.hears([
    Strings.main.mainKeyboard.ru.prices,
    Strings.main.mainKeyboard.uz.prices
], async ctx=>{
    const lang = ctx.session.lang
    let data = await Queries.data.get('main_scene_prices_'+lang)
    ctx.reply(data[0].val)
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.products,
    Strings.main.mainKeyboard.uz.products
], async ctx=>{
    const lang = ctx.session.lang
    let data = await Queries.data.get('main_scene_catalog_'+lang)
    ctx.reply(data[0].val)
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.documentation,
    Strings.main.mainKeyboard.uz.documentation
], async ctx=>{
    const lang = ctx.session.lang
    let data = await Queries.data.get('main_scene_documents_'+lang)
    ctx.reply(data[0].val)
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.vacancies,
    Strings.main.mainKeyboard.uz.vacancies
], async ctx=>{
    const lang = ctx.session.lang
    let data = await Queries.data.get('main_scene_vacancies_'+lang)
    ctx.reply(data[0].val)
})

mainScene.hears([
    Strings.main.mainKeyboard.ru.contacts,
    Strings.main.mainKeyboard.uz.contacts
],async ctx=>{
    ctx.session.type = 'contacts'
    ctx.scene.enter('departmentScene')
})

module.exports = mainScene