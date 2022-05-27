# [wppmeta](https://www.npmjs.com/package/wppmeta)

[![Ported in Brazil](https://img.shields.io/badge/Ported-Brasil%20%F0%9F%87%A7%F0%9F%87%B7-yellow)]()
![NPM](https://img.shields.io/npm/l/wppmeta)
![npm](https://img.shields.io/npm/v/wppmeta)
![npm](https://img.shields.io/npm/dw/wppmeta)


library not official javascript to [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api). Repository of [wppmeta](https://github.com/giovaninogueira/wppmeta). 

## Features supported
1. Sending messages
2. Sending  Media (images, audio, video and ducuments)
3. Sending location

## Future updates
1. Sending messages for templates
2. Sending messages for buttons
3. Create templates of messages
4. Update templates of messages
5. Delete templates of messages

### Installing from npm

```bash
$ npm install wppmeta
```

## Setting up

Before getting started with the library, you need to go through the steps and gather some information to get the library working properly.

Follow the steps of [Facebook Cloud Api](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started/) for you to get started.

1. After the steps, collect your **TOKEN** and **TEST WHATSAPP NUMBER**

2. Lastly verify the number you will be using for testing on the **To** field

Once you're follow the above procedures, now you're ready to start hacking with the Wrapper.

## Get Started library WppMeta

Here how you authenticate your application, you need to specofy two things the ```TOKEN``` and ```phone_number_id``` of your test number

```javascript
import { WppMeta } from 'wppmeta'

const whatsaApp = WppMeta.config({
  accountId: "YOUR_ACCOUNT_ID",
  phoneId: "YOUR_PHONE_ID",
  token: 'YOUR_TOKEN_AUTHORIZATION_BEARER',
});
```

## Get List of Phones

```javascript
const phones = await whatsaApp.getPhones()
```

## Register Phone

```javascript
const success = await whatsaApp.registerPhone({
    phoneId: 'PHONE_ID',
    pin: '6-digit'
})
```

## Send Message type simple text

```javascript
const response = await whatsaApp.sendText({
  to: 'PHONE',
  body: {
    message: 'MESSAGE',
    useUrl: false
  }
})
```

## Send Message type midia

```javascript
const response = await whatsaApp.sendMidia({
  to: 'PHONE',
  mediaObjectId: 'MEDIA_ID'
})
```

## Send Message type location

```javascript
const response = await whatsaApp.sendLocation({
  to: 'PHONE',
  location: {
    address: 'ADDRESS',
    latitude: 'LATITUDE',
    longitude: 'LONGITUDE',
    name: 'NAME_LOCATION'
  }
})
```

**NOTE:** 

For more info check [Notification Payload refernce](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/components) and [Notification Payload Examples](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples)

## Issues

If you will face any issue with the usage of this package please raise one so as we can quickly fix it as soon as possible;

## Contributing

This is an opensource project under ```MIT License``` so any one is welcome to contribute from typo, to source code to documentation, ```JUST FORK IT```.

## All the credit

1. [Giovani](https://github.com/giovaninogueira/wppmeta)

## License

[MIT](LICENSE)