# Task 1

## FIRST OF ALL, if you use windows :(, you must install make (it's in for-windows folder)
## And don't forget to add to the PATH. If not windows :), you are good to go!

## Steps

- create .env file

```bash
cp sample.env .env # and fill the lines
```

- install dependencies

```bash
npm i # if use npm
yarn # if use yarn
```

- create database

```bash
make init_db # (initiate db, create table and insert user)
```

- to run the project

```bash
npm run dev # with npm
yarn dev # with yarn
```
