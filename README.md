# Prerequisites
Install docker (https://docs.docker.com/get-docker/)

Install Node with NPM (https://nodejs.org/en/download/prebuilt-installer)

---
# Check
> docker -v
>
> node -v
>
> npm -v

---
# Install

> git clone https://github.com/julia-kafarska/bh

## postgres
> docker pull postgres
>
> docker run --name bh -e POSTGRES_PASSWORD=bh -d postgres

## pgAdmin
> docker pull dpage/pgadmin4
>
> docker run -p 5050:80 -e "PGADMIN_DEFAULT_EMAIL=admin@bh.com" -e "PGADMIN_DEFAULT_PASSWORD=bh" -d dpage/pgadmin4

Access PG Admin: http://localhost:5050

default username: `admin@bh.com`

default password: `bh`

## Backend
> cd ./bh/back-end
> 
> npm install
