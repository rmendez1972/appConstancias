var express = require('express')
var path = require('path')
var compression = require('compression')


import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import routes from './modules/Routes'
import App from "./modules/App";
/* layourt used when server side render*/
import indexserver from './indexserver';


/* creating a express instance */
var app = express();
app.use(compression());


// serve our static stuff like constancias.css
app.use('/assets',express.static(path.join(__dirname, 'public/assets')))

/* we'll redirect all requests to react app*/
app.get('*', (req, res) => {

  const context = {};

  const appWithRouter = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
  );

  if (context.url) {
        res.redirect(context.url);
        return;
  }

  /* turning all app stuff to string */
  const html=ReactDOMServer.renderToString(appWithRouter);
  /* if code=200 then send all tha react code like parameter to html layout */
  res.status(200).send(indexserver(html));
});

var PORT = process.env.PORT || 8089
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
