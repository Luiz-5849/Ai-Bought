// const express = require('express');
const axios = require('axios');

const linkProviderBR = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/brazilian_provider';
const linkProviderEU = 'http://616d6bdb6dacbb001794ca17.mockapi.io/devnology/european_provider';

export const apiB = axios.create({
  baseURL: linkProviderBR
});

export const apiE = axios.create({
  baseURL: linkProviderEU
});