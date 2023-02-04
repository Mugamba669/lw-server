---
title: Node HTTP Module
description: A HTTP module server
tags:
  - http
  - nodejs
  - javascript
---

# HTTP Module Example

This example starts an [HTTP Module](https://nodejs.org/api/http.html) server.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ZweBXA)

## 💁‍♀️ How to use

- Install dependencies 
  ```
     yarn install
  ```
- To start the `node` server `npm start`
- Start the development server `npm run dev`

## 📝 Key Routes

- To access all hot 100 songs for Ug music when running the project online
  ```
    https://lw-server.up.railway.app/api/hotSongs
  ```
* Running it locally
  ```
  http://127.0.0.1:5054/api/hotSongs
  ```
- To search for Ugandan Songs online 
  ```
  https://lw-server.up.railway.app/api/searchAll/:query
  ```

- Running locally
  ```
  http://127.0.0.1:5054/api/searchAll/:query
  ```

## The server code is located in `server.mjs`.
