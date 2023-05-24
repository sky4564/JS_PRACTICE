import Cryptojs from "crypto-js"

const crypt = () => {
    console.log('crypt')
}

function aesEncode(encValue) {
    if (typeof encValue == 'number') {
        return encValue
    }
    else if (typeof encValue == 'object') {
        encValue = JSON.stringify(encValue);
    }
    const passphrase = "82a27e7dc25ed7a450236f536c0bc0c9ad02633c9b7b194ce6f472f5b7aaaf0b"
    const bytes = Cryptojs.AES.encrypt(encValue, passphrase, {
        mode: Cryptojs.mode.ECB,
        padding: Cryptojs.pad.Pkcs7
    })
    const message = bytes.toString()
    return message
}

function aesDecode(encValue) {

    if (typeof encValue == 'number') {
        return encValue
    }

    const passphrase = "82a27e7dc25ed7a450236f536c0bc0c9ad02633c9b7b194ce6f472f5b7aaaf0b"
    let message = Cryptojs.AES.decrypt(encValue, passphrase, {
        mode: Cryptojs.mode.ECB,
        padding: Cryptojs.pad.Pkcs7
    }).toString(Cryptojs.enc.Utf8)


    if (typeof message == 'string' && message.trim().startsWith('{') && message.trim().endsWith('}')) {
        message = JSON.parse(message);
    }

    return message
}

