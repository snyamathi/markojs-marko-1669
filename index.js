require('@marko/compiler/register');

const express = require('express');
const markoPlugin = require('@marko/express').default;
const template = require('./template.marko.js').default;

const app = express();

app.use(markoPlugin());  
app.use((_, res) => res.marko(template));
  
app.listen(8080);
