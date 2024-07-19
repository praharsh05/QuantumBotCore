# QuantumBotCore
Learning Project for Firebase functions

## Project Overview
QuantumBot Core was developed for Radical AI as a first learing project for firebase and node. The main purpose was to develop a chat bot that facilitates effective communcation by providing a platform for instantaneous and continuous dialogue.

The project utilises the following tech stack:

### 1. Firebase
Firebase is a Backend-as-a-Service from Google. The project will use two services from Firebase, particularly Cloud Functions and Firestore Database. Firebase CLI is utilised to initialise and deploy the functions. The function are written in `JavaScript`.

### 2. Node
Node is utilised as the backend of the project which facilitates the use of firebase.

### 3. Postman
In order to test the API functionality, created with the use of Firebase cloud functions, Postman is utilised. It's a tool that lets developers interact and test the APIs to accertain the expected behaviour of any API.

## Installation

1. Install Node from (https://nodejs.org/en).
2. Install Firebase globally on the local machine using the command `npm install -g firebase-tools`.
3. Log in into Firebase by executing the command `firebase login`.
4. Initialize a Firebase project on the Firebase console and get the project ID.
5. Initialize a Firebase project in the directory by using the command `firebase init` providing the project ID when asked.
6. Install Firebase admin by running the command `npm install firebase-admin`.

## Code Structure and Organisation
There are two main files which are needed to build the functionality of QuantumBot chat application.

1. `addMessage.js`
2. `index.js`

The cloud function is coded in the file `addMessage.js` which is present in the `api` folder. This file defines how the server should respond to requests sent to it using the API. It starts with validating the required fields that should be present in the body of the API, which are `text` and `userId`. If these two fields are not present then the API will return a bad request error and log that required fields and missing.
if the fields are present, the message data is constructed with the `text`, `userId`, and `timestamp` of the message.
Once the message data is contructed the message is added to the Firestore database under the user's message collection. When the function is successfully able to add the message under the registered user's message collection a success message returned with the new `messageId`. If an error occurs while adding the message, an error message is returned.

`index.js` is the entry point which specifies what modules are to be used. This file first intialises the `firebase-admin` and then exports the `addMessage.js` to the cloud for deployment.

## Implementation
In order to implement QuantumBot Chat follow the following steps:
1. Clone the repository
2. Follow the installation.
3. Install all the dependencies by running `npm install package.json`.
4. Create a Firestore Database on the Firebase console.
5. Initialize Firebase by running `firebase init` command and selecting Firestore and Functions.
6. Deploy the firebase function using the `firebase deploy --only functions` command.
7. Validate the functioning of the API using Postman.

