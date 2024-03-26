/* eslint consistent-return:0 import/order:0 */
// const getToken = require('../app/containers/GameNft/services/tokenProvider');
const express = require('express');
const logger = require('./logger');
require('dotenv').config();
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// const verify = require('../app/containers/GameNft/services/verifyUser');

const qs = require('qs');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const { default: axios } = require('axios');
const { request } = require('http');
const app = express();

app.post('/login-game', async (req, res) => {
  try {
    const reqBody = {
      username: process.env.X_USERNAME,
      password: process.env.X_PASSWORD,
    };
    // console.log('login-game', reqBody, socialXcode);
    // const response = await fetch(`${process.env.BASE_URL_API}/login`, {
    //   method: 'POST',
    //   headers: {
    //     // 'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(reqBody) //qs.stringify(reqBody),
    // });
    const response = await axios.post(
      `${process.env.BASE_URL_API}/login`,
      reqBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        // body: qs.stringify(reqBody),
      },
    );
    res.json(response.data);
  } catch (error) {
    res.status(200).json({ error: error });
  }
});

app.get('/login-verify', async (req, res) => {
  try {
    // console.log("Test")
    var verifyToken = req.query.verifyToken;
    const jsonData = await axios.get(`${process.env.BASE_URL_LOGIN}`+verifyToken);
    // console.log("url_re+v: "+ `${process.env.BASE_URL_REQUEST}`+v)
    console.log(jsonData.data)
    res.json(jsonData.data); 
  } catch (error) {
    res.status(200).json({ error: error });
  }
});


// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
// app.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz'; // eslint-disable-line
//   res.set('Content-Encoding', 'gzip');
//   next();
// });
// app.post('/get_by_user', async (req, res) => {
//   try {
//     console.log("eeee")
//     const getData = {
//       game_id: 2,
//       user_id: 1,
//       page_index: 1,
//       page_size: 1,
//     };

//     const token = getToken();
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };

//     const response = await axios.get(
//       `${process.env.BASE_URL_API}/game-nft-collection/nft-by-user`,
//       {
//         params: getData,
//         headers: headers,
//       },
//     );
//     console.log("status: "+response);
//     // console.log("resdata:"+res.json(response.data));
//   } catch (error) {
//     res.status(200).json({ error: error });
//   }
// });
app.use(express.static('public'));


// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
