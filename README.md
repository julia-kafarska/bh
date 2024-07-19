# Prerequisites
Install docker (https://docs.docker.com/get-docker/)

Install Node with NPM (https://nodejs.org/en/download/prebuilt-installer)

---
# Check
`docker -v`

`node -v`

`npm -v`

---
# Install

`git clone https://github.com/julia-kafarska/bh`

## postgres
`docker pull postgres`

`docker run --name players-be -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=players -p 5432:5432 -d postgres`

## Backend
`cd ./bh/back-end`

`cp .env.example .env`

`npm install`

`npm setup`

`npm run start`