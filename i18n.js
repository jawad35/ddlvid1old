"use strict";

const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    strictMode: false,
    defaultLanguage: 'en',
    otherLanguages: ['fr', 'pt'],
    localeSubpaths: {
        fr: 'fr',
        pt: 'pt'
    },
    interpolation: {
        escapeValue: false
    }
})