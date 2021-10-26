import React from 'react'
import { IntlProvider } from 'react-intl'
import it from '../assets/json/i18n.json'

async function load() {
    const [module1, module2, module3] = await Promise.all([
        require('intl'),
        require('intl/locale-data/jsonp/en'),
        require('intl/locale-data/jsonp/it'),
        require('intl/locale-data/jsonp/de'),
    ])

    return [module1, module2, module3]
}

/* needed in order to user nested translation objects */
const flattenMessages = (nestedMessages: { [k: string]: any }, prefix?: string) => {
    if (!nestedMessages) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key] || ''
        const prefixedKey = prefix ? `${prefix}.${key}` : key

        if (typeof value === 'string') {
            Object.assign(messages, { [prefixedKey]: value })
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
}

const IntlProviderHoc: React.FC = (props) => {
    const messages = it

    if (!window.Intl) {
        load()
    }

    return (
        <IntlProvider
            locale="it"
            key="it"
            messages={flattenMessages(messages as { [k: string]: any })}
        >
            {props.children}
        </IntlProvider>
    )
}

export default IntlProviderHoc
