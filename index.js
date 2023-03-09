require("dotenv").config();

const express = require('express')
const CronJob = require("cron").CronJob;

const app = express()
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


require("dotenv").config();
const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');


const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IGUSERNAME);
    await ig.account.login(process.env.IGUSERNAME, process.env.IGPASSWORD);

    const imageBuffer = await get({
        url: 'https://images.pexels.com/photos/4006143/pexels-photo-4006143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        encoding: null, 
    });

    await ig.publish.photo({
        file: imageBuffer,
        caption: 'Really nice photo from the internet!', // nice caption (optional)
        comments: 'Really nice photo internet!', // nice caption (optional)
        feed:'abkjasdbjkabjsc'
    });
}

postToInsta();