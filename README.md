# CHAT APPLICATION
## Introduction
This repo contains the source code for a simple frontend chat application.
## File structure 
``` bash
.
├── README.md
├── babel.config.json
├── jest.config.ts
├── node_modules  [822 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── ChatPage.tsx
│   │   ├── MessageField.tsx
│   │   ├── Messages.tsx
│   │   └── __tests__
│   │       ├── chat.page.test.tsx
│   │       ├── message.field.test.tsx
│   │       └── message.page.test.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       └── clientApi.ts
└── tsconfig.json
```


### `npm start`
Before you run your application, make sure to have a .env file at the root of the project, example:

.env
```
REACT_APP_BASE_URL=https://guarded-citadel-87228.herokuapp.com/
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`
Sample output 
![Tests](https://raw.githubusercontent.com/titusdishon/chat-app-frontend/main/tests.png)

## Use case
This app is intented for use by two clients

## Screen shots
![Home](https://raw.githubusercontent.com/titusdishon/chat-app-frontend/main/home.png)
![receive](https://raw.githubusercontent.com/titusdishon/chat-app-frontend/main/received.png)
![send](https://raw.githubusercontent.com/titusdishon/chat-app-frontend/main/send.png)
![Mobile](https://raw.githubusercontent.com/titusdishon/chat-app-frontend/main/mobile.png)

The reset button to the top right corner can be used to delete all the messages that have already been send.
Follow the [link](https://cocky-agnesi-f3e7c4.netlify.app/) to access the hosted application
# chat-app-frontend

