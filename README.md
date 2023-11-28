# FlexpaDemo
A demo for an application to flexpa

### Requirements
- This was created using Node v20.9.0
- I tested the web app in Chrome on Windows. I don't have a computer to test for Safari compatibility.

### Instructions
- Use the flexpa portal to generate [API keys](https://www.flexpa.com/docs/getting-started/quickstart#set-api-keys) to be used in your application
- `git clone` this repository
- run `npm i` in both the server and client folder. 
- Create a file called `.env` in `./server` with the following contents:
```
SECRET_KEY=<Your secret key from your application's flexpa api keys>
```
- Create a file called `.env` in `./client` with the following contents:
```
REACT_APP_PUBLISHABLE_KEY=<Your publishable key from your flexpa api keys>
REACT_APP_BACKEND_BASE_URL=http://localhost:9000
```
- `cd ./server && npm run start:dev` in a terminal to start up the nest backend
- `cd ./client && npm run start` in a different terminal to start up the client
- Login and authorize using one of the providers and [login information provided by flexpa](https://www.flexpa.com/docs/getting-started/test-mode)
- Marvel at the EOB data pulled from the Flexpa API