const commonStrings = {
    ru: {
        back:"Назад",
        back_to_main:"В главное меню"
    },
    uz: {
        back:"Назад",
        back_to_main:"В главное меню"
    }
}

module.exports = {
    common:commonStrings,
    hello:{
        helloMessage:{
        uz:"Здравствуйте! Добро пожаловать в электронный офис АО UzVtorCmetmetBot",
        ru:"Здравствуйте! Добро пожаловать в электронный офис АО UzVtorCmetmetBot",
        }
    },
    main:{
        mainKeyboard:{
            ru:{
                message:'Что Вас интересует?',
                give_battery:"Сдать аккумулятор",
                give_metal:"Сдать цветной металл",
                products:"Список товаров",
                service:"Услуги",
                prices:"Цены",
                documentation:"Нормативно-правовые документы",
                vacancies:"Вакансии",
                contacts:"Контакты",
                complain:"Пожаловаться",
            },
            uz:{
                message:'Что Вас интересует?',
                give_battery:"Сдать аккумулятор",
                give_metal:"Сдать цветной металл",
                products:"Список товаров",
                service:"Услуги",
                prices:"Цены",
                documentation:"Нормативно-правовые документы",
                vacancies:"Вакансии",
                contacts:"Контакты",
                complain:"Пожаловаться",
            }
        },
    },
    battery:{
        messages:{
            ru:{
                hello:"Средняя цена за один сданный аккумулятор - 7000 сум",
                req_location:"Отправьте Вашу локацию",
                send_contact:"Отправьте Ваш контакт",
                contact_person:"Контактное лицо",
                nearest_dep:"Ближайший пункт",
                way:"Расстояние",
                km:"км",
                inquiry_saved:"Спасибо, Ваша заявка была сохранена"
            },
            uz:{
                hello:"Средняя цена за один сданный аккумулятор - 7000 сум",
                req_location:"Отправьте Вашу локацию",
                contact_person:"Контактное лицо",
                send_contact:"Отправьте Ваш контакт",
                nearest_dep:"Ближайший пункт",
                way:"Расстояние",
                km:"км",
                inquiry_saved:"Спасибо, Ваша заявка была сохранена"
            }
        },
        keys:{
            ru:{
                nearest:"Найти ближайший пункт приема",
                addresses:"Адреса пунктов приема",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок",
                send_location:"Отправить локацию",
                send_contact:"Отправить контакт",
                back: commonStrings.ru.back,
                back_to_main: commonStrings.ru.back_to_main
            },
            uz:{
                nearest:"Найти ближайший пункт приема",
                addresses:"Адреса пунктов приема",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок",
                send_location:"Отправить локацию",
                send_contact:"Отправить контакт",
                back: commonStrings.uz.back,
                back_to_main: commonStrings.uz.back_to_main
            }
        }
    },
    metal:{
        messages:{
            ru:{
                hello:"АО 'Узвторцветмет' предоставляет услуги по бесплатному самовывозу лома. Для более подробной информации свяжитесь со специалистом.",
                req_location:"Отправьте Вашу локацию",
                send_contact:"Отправьте Ваш контакт",
                contact_person:"Контактное лицо",
                nearest_dep:"Ближайший пункт",
                way:"Расстояние",
                km:"км",
                inquiry_saved:"Спасибо, Ваша заявка была сохранена"
            },
            uz:{
                hello:"АО 'Узвторцветмет' предоставляет услуги по бесплатному самовывозу лома. Для более подробной информации свяжитесь со специалистом.",
                req_location:"Отправьте Вашу локацию",
                contact_person:"Контактное лицо",
                send_contact:"Отправьте Ваш контакт",
                nearest_dep:"Ближайший пункт",
                way:"Расстояние",
                km:"км",
                inquiry_saved:"Спасибо, Ваша заявка была сохранена"
            }
        },
        keys:{
            ru:{
                nearest:"Найти ближайший пункт приема",
                addresses:"Адреса пунктов приема",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок",
                send_location:"Отправить локацию",
                send_contact:"Отправить контакт",
                prices:"Цены на лом",
                back: commonStrings.ru.back,
                back_to_main: commonStrings.ru.back_to_main
            },
            uz:{
                nearest:"Найти ближайший пункт приема",
                addresses:"Адреса пунктов приема",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок",
                send_location:"Отправить локацию",
                send_contact:"Отправить контакт",
                prices:"Цены на лом",
                back: commonStrings.uz.back,
                back_to_main: commonStrings.uz.back_to_main
            }
        }
    },
    service:{
        messages:{
            ru:{
                hello:"Выберите услугу:",
                destruction:"АО 'Узвторцветмет' предоставляет услуги по уничтожению бумаги, ненужной техники и прочих материалов.",
                analysis:"Лаборатория АО 'Узвторцветмет' предлагает услуги по спектральному высокоточному анализу лома и сплавов цветных металлов."
            },
            uz:{
                hello:"Выберите услугу:",
                destruction:"АО 'Узвторцветмет' предоставляет услуги по уничтожению бумаги, ненужной техники и прочих материалов.",
                analysis:"Лаборатория АО 'Узвторцветмет' предлагает услуги по спектральному высокоточному анализу лома и сплавов цветных металлов."
            }
        },
        keys:{
            ru:{
                destruction:"Уничтожение",
                analysis:"Спектральный анализ",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок"
            },
            uz:{
                destruction:"Уничтожение",
                analysis:"Спектральный анализ",
                contact:"Связаться со специалистом",
                request_call:"Заказать звонок"
            }
        }
    },
    complain:{
        messages:{
            ru:{
                hello:"Хотите подать жалобу анонимно или передать свои данные?",
                insert_text:"Опишите, на что Вы жалуетесь",
                message_receipt:"Ваша жалоба была получена и будет рассмотрена в ближайшее время."
            },
            uz:{
                hello:"Хотите подать жалобу анонимно или передать свои данные?",
                insert_text:"Опишите, на что Вы жалуетесь",
                message_receipt:"Ваша жалоба была получена и будет рассмотрена в ближайшее время."
            }
        },
        keys:{
            ru:{
                anonymous:"Анонимно",
                send_contact:"Отправить данные"
            },
            uz:{
                anonymous:"Анонимно",
                send_contact:"Отправить данные"
            }
        }
    },
    district:{
        messages:{
            ru:{
                select_distr:"Выберите область:",
                incorrect_distr:"Пожалуйста, выберите область"
            },
            en:{
                select_distr:"Выберите область:",
                incorrect_distr:"Пожалуйста, выберите область"
            }
        }
    }
}