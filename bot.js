const Telegraf = require("telegraf")
const token = "579769183:AAFrP-fPdKbjqQMXwQCmPXJudRAt1areja0";
const bot = new Telegraf(token, { handlerTimeout: 3000 })
const Session = require('telegraf/session')
const stage = require('./scenes/scenes')

bot.use(new Session())
bot.use(stage.middleware())

bot.startPolling()

bot.command('start',ctx=>{
    ctx.scene.enter('helloScene')
})

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason)
})

