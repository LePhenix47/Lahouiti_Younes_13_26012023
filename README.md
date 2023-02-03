
# Table of contents

1. [Front-End](#1-front-end) <br>
 1.1 [Front-End stack](#11-front-end-stack)<br>
 1.2 [Libraries used](#12-libraries-used)<br>
 1.3 [Installation guide](#13-installation-guide)<br>
 1.4 [Launching the project](#14-launching-the-project)<br>
 1.5 [Other commands](#15-other-commands)<br>

2. [Back-End](#2-back-end) <br>
   2.1 [Back-End installation guide](#21-back-end-installation-guide)<br>
   2.2 [Starting the server](#22-starting-the-server)<br>
   2.3 [Routes and endpoints](#23-routes-and-endpoints)<br>
   2.4 [Other information](#24-other-information)<br>

3. [Miscellaneous](#3-miscellaneous) <br>
   3.1 [Folder-app structure](#31-folder-app-structure) <br>
   3.2 [Naming conventions](#32-naming-conventions) <br>
   3.3 [Trivial information](#33-trivial-information) <br>

# 1. Front-End

## 1.1 Front-End stack

- HTML
- SASS
- TypeScript
- React
- Next.js

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" title="HTML5"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer" title="SASS"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" title="Next.js"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>

## 1.2 Libraries used

- Jest with: React Testing Library
- Redux with: React-Redux, Redux Toolkit and Immer
- TanStack Query a.k.a React Query

<a href="https://jestjs.io/" target="_blank" rel="noreferrer" title="Jest"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="36" height="36" alt="Jest" /></a>
<a href="https://redux.js.org" target="_blank" rel="noreferrer" title="Redux"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>
<a  href="https://tanstack.com/"  target="_blank"  rel="noreferrer" title="TanStackQuery a.k.a React Query v4">
<img src="./public/images/svg/tanstack-query.svg" width="40" height="36" alt="TanStack Query(React Query)"/>
</a>

## 1.3 Installation guide

The project uses Node packages and uses `npm`, so the installation of Node.js in your IDE is required

> [Install Node.js](https://nodejs.org/en/)

Once Node.js has been successfully added to your IDE, you'll need to:

1. Fork the Front-End repository
2. Clone it locally with with `git clone`

Afterwards you'll need to install all the project dependencies with `npm install`

## 1.4 Launching the project

For the Front-end, you will need to compile the Next.js app with the command:

```bash
npm run dev
```

## 1.5 Other commands

This app has 2 other executable scripts:

1. To run all tests with Jest and get a code coverage percentage:

```bash
npm run test
```
  
2. To run a test with Jest on a particular file:

```bash

npm  run  test -- [file-name].tsx --silent=false --coverage=false

```

---
<br>

  
# 2. Back-End

## 2.1 Back-End installation guide

The Back-End also uses Node.js, if it's still not installed in your IDE, here's the link:

> [Install Node.js](https://nodejs.org/en/)

Along with MongoDB Community Server to use the database

>[Install MongoDB Community Server](https://www.mongodb.com/try/download/community)

Just like for the Front-end, you will need to repeat the same steps

1. Fork the Back-End repository
2. Clone it locally with with `git clone`

Once installed, you'll need to populate the database with:

```bash
npm run populate-db
```

## 2.2 Starting the server

In order to launch the Back-end server, you'll need to run nodemon with this command:

```bash
npm run dev:server
```

## 2.3 Routes and endpoints

The API of this server is separated in 2 routes

- The `user/` route:

| HTTP Verb | Endpoints     | Parameters | Payload of the request                                                                                             | Possible code statuses                                               | Payload of the response                                                                                                                                                                             | Description of the body                                                 |
| --------- | ------------- | ---------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| POST      | /user/login/  | -          | {<br>   "email": string,<br>   "password": string<br>}                                                             | 200: OK<br><br>400: Invalid fields<br><br>500: Internal Server Error | {<br>  "token": string<br>}                                                                                                                                                                         | Gives a JSON Web Token when the user fills the<br>form fields correctly |
| POST      | /user/signup/ | -          | {<br>  "email": string,<br>  "password": string,<br>  "firstName": string,<br>  "lastName": string<br>}            | 200: OK<br><br>400: Invalid fields<br><br>500: Internal Server Error | {<br> "status":0,<br> "message": string,<br> "body":{<br>   "id":string,<br>   "email": string,<br>  }<br>}                                                                                         | Creates the user in the database and sends back an id and an email      |
| POST      | /user/profile | -          | {<br>"header": {<br> "Authorization": string<br>}<br>"body":{}<br>}                                                | 200: OK<br><br>400: Invalid fields<br><br>500: Internal Server Error | {  "status": number,<br>  "message": string,<br>  "body": {    "email": string,    "firstName": string,    "lastName": string,    "createdAt": Date,    "updatedAt": Date,    "id": string  }<br>}  | Retrieves the profile data of the user                                  |
| PUT       | /user/profile | -          | {<br>"header": { "Authorization": string}<br>"body":{<br>  "firstName": "Tony",<br><br>  "lastName": "Stark"}<br>} | 200: OK<br><br>400: Invalid fields<br><br>500: Internal Server Error | {  "status": number,  <br> "message": string, <br> "body": {    "email": string,    "firstName": string,    "lastName": string,    "createdAt": Date,    "updatedAt": Date,    "id": string  }<br>} | Modifies the first and/or last name of the user                         |

- The `transactions/` route:

WIP

## 2.4 Other information

To view a more detailed installation guide, you can go on the
[repository of the Back-End](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) of the project

---
<br>
  
# 3. Miscellaneous

## 3.1 Folder app structure

Here's the current folders structure for the application

```bash

P13/
|
|
|– argent-bank/
|  |
|  |– ...
|
|
|
|– P10-Bank-API
|  |
|  |– ...

```

## 3.2 Naming conventions

- File and folder names: `kebab-case`

   example: `helper-functions.tsx`

- CSS: `kebab-case`
 examples:

  ```css
  .main-page{...};
  --bg-primary: red;
  ```

- JS: `camelCase`, ⁣`PascalCase` and `SNAKE_CASE`

 1. For variable names: `camelCase`
 2. For class and component names: `PascalCase`
 3. For contextualized constants names: `SNAKE_CASE`

 examples:

 ```js
 const dataValues = [{value: 5}, {value: 2}];

 class Service{...}

 function Header(){...}

 const MAX_32_BIT_UNSIGNED_INTEGER = 2_147_483_647;
 ```


## 3.3 Trivial information
This project has: 
 
 - A responsive design
 - A dark/light theme
 - A Swagger API documentation with this address: http://localhost:3001/api-docs/#/
  