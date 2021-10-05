#!/usr/bin/env node
//Establecer que este es un documento qye se va ejecutar dentro del sistema bash

//Variable que llama la funcion que exportamos
let random = require('../src/index.js')

//Ejecuta la funcion
random.randomMsg()
