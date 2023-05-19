require('dotenv').config()
const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:3000/test');}