# Prerequisites
Install docker (https://docs.docker.com/get-docker/)

Install Node with NPM (https://nodejs.org/en/download/prebuilt-installer)

Install Android Studio (https://nodejs.org/en/download/prebuilt-installer)


---
# Check
`docker -v`

`node -v` >= 20

`npm -v`

`npx -v`

`nvm -v` - if node < 20


---
# Install

`git clone https://github.com/julia-kafarska/bh`

## Postgres
`docker pull postgres`

`docker run --name players-be -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=players -p 5432:5432 -d postgres`

## BackEnd
`cd ./bh/back-end`

`cp .env.example .env`

`npm install`

`npm setup`

`npm run start`


## App

`cd ../app`

`npx pod install`

`npx react-native run-ios`

`npx react-native run-android`  --reset-cache

`npx react-devtools`

## SccreenShoprt
![](/Screenshot%202024-07-19_18.07.43.png)
![](/Screenshot%202024-07-19_18.08.49.png)
![](/Screenshot%202024-07-19_18.09.37.png)
