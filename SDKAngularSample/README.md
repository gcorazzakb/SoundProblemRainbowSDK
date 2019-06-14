# Rainbow SDK for Web

## Preamble

The Rainbow SDK (Software Development Kit) for Web is a pure AngularJS JavaScript library that works on all modern browsers from IE 11 to the latest version of Chrome, Firefox, Safari and Edge. Its powerful APIs enable you to create the best applications that connect to the Rainbow Cloud Services.

## SDK Angular Sample

This demo is provided "as it is" without support.

The demo demonstrates the use of the following Rainbow SDK for Web APIs:

- Connection Service: The demo shows how to use these APIs to connect to Rainbow

- Contacts and Presence Services: Using these services, the demo shows how to retrieve the informations from the contacts and how to change the presence state of the connected user

- Conversation and IM Services: These APIs are used in the demo to display or create a conversation with a contact and to send and receive Instant Messages with them.

## Installation

This project was generated with Angular CLI: 8.0.2

Clone this repo and then execute `npm install`

## Starting the demo

Update `applicationID` and `applicationSecret` variables in  `src/modules/sdk.ts` file. If you don't know where can you get your Application ID and Application Secret from, check our [guide](https://hub.openrainbow.com/#/documentation/doc/sdk/web/guides/Adding_id_and_secret_key).

At the end just run `npm start` in your console and open your browser on `http://localhost:4200/`.
