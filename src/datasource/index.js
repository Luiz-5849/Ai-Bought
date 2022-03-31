// const express = require('express');
const axios = require('axios');

const linkProviderBR = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
const linkProviderEU = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

const apiB = axios.create({
  baseURL: linkProviderBR
});

const apiE = axios.create({
  baseURL: linkProviderEU
});

// const lh = axios.create({
//   baseURL: "http://localhost:8000/produtos"
// })

module.exports = {apiB, apiE}

// const server = express();
// server.use(express.json());
// server.listen(8000)

// server.get("/produtos", async (req, res) => {
//   try {
//     const { data } = await apiB.get('/')
//     const response = await apiE.get('/')
//     const products = [...data, ...response.data].map((product, index) => ({
//       ...product,
//       id: index + 1
//     }))
//     res.send(products)
//   } catch (error) {
//     console.error(error.message)
//   }
// })