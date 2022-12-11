const Markup = require('telegraf/markup')
const Strings = require('./strings')
const Queries = require('./queries')

module.exports = {
    languageKeyboard:
        Markup.inlineKeyboard([
            Markup.callbackButton('UZ', 'uz'),
            Markup.callbackButton('RU', 'ru')
        ]).extra(),
    mainKeyboard:lang=>{
        let keyStrings = Strings.main.mainKeyboard[lang]
        let keys = [
            [ keyStrings.give_battery , keyStrings.give_metal ],
            [ keyStrings.products , keyStrings.service ],
            [ keyStrings.prices , keyStrings.documentation ],
            [ keyStrings.vacancies , keyStrings.complain ],
            [ keyStrings.contacts ]
        ]
        return keys
    },
    batteryKeyboard:lang=>{
        let keyStrings = Strings.battery.keys[lang]
        let keys = [
            [ keyStrings.nearest ],
            [ keyStrings.addresses],
            [ keyStrings.contact ],
            [ keyStrings.request_call ],
            [ keyStrings.back_to_main ]
        ]
        return keys
    },
    metalKeyboard:lang=>{
        let keyStrings = Strings.metal.keys[lang]
        let keys = [
            [ keyStrings.nearest ],
            [ keyStrings.addresses],
            [ keyStrings.contact ],
            [ keyStrings.prices ],
            [ keyStrings.request_call ],
            [ keyStrings.back_to_main ]
        ]
        return keys
    },
    requestLocation:lang=>{
        let keyStrings = Strings.battery.keys[lang]
        let keys = [
            [ Markup.locationRequestButton(keyStrings.send_location) ],
            [ Markup.button(keyStrings.back) ],
        ]
        return keys
    },
    requestContact:lang=>{
        let keyStrings = Strings.battery.keys[lang]
        let keys = [
            [ Markup.contactRequestButton(keyStrings.send_contact) ],
            [ Markup.button(keyStrings.back) ],
        ]
        return keys
    },
    serviceKeyboard:lang=>{
        let keyStrings = Strings.service.keys[lang]
        let keys = [
            keyStrings.destruction,
            keyStrings.analysis,
            Strings.common[lang].back_to_main
        ]
        return keys
    },
    serviceDestrKeyboard:lang=>{
        let keyStrings = Strings.service.keys[lang]

        let keys = [
            keyStrings.contact,
            Markup.contactRequestButton(keyStrings.request_call),
            Strings.common[lang].back
        ]

        return keys
    },
    complainKeyboard: lang=>{
        let keyStrings = Strings.complain.keys[lang]

        let keys = [
            keyStrings.anonymous,
            Markup.contactRequestButton(keyStrings.send_contact),
            Strings.common[lang].back_to_main
        ]

        return keys
    }
}