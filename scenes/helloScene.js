const Scene = require("telegraf/scenes/base")
const Strings = require('../helpers/strings')
const Keyboards = require('../helpers/keyboards')
const Queries = require('../helpers/queries')
const Various = require('../helpers/various')

const helloScene = new Scene('helloScene')

helloScene.enter(async ctx=>{

    const user = await Queries.user.get(ctx.update.message.from.id)

    if(!Various.isEmpty(user)){
        ctx.session.lang = user[0].language
        ctx.scene.enter('mainScene')
    }
    else{
        ctx.reply(Strings.hello.helloMessage.ru, Keyboards.languageKeyboard)
    }
})

helloScene.on('callback_query',ctx=>{

    const user = {}

    user.chatID = ctx.update.callback_query.from.id
    user.name = ctx.update.callback_query.from.first_name + ' ' + ctx.update.callback_query.from.last_name
    user.language = ctx.update.callback_query.data

    ctx.session.lang = user.language
    ctx.answerCbQuery()
    ctx.scene.enter('mainScene')

})

module.exports = helloScene