const express = require('express');
const axios = require('axios');
const { load } = require("cheerio");

const app = express()
app.get('/hotSongs', async (req, res) => {
  const fetchHot100 = async () => {
    let songs = [];
    await axios.get(`https://www.nowviba.com/music/pages/top100.php`).then((domResponse) => {
      let response = domResponse.data;
      const ch = load(response);
      let trackList = ch('.hot100');
      trackList.map((index, element) => {
        let d = {
          title: `${element.children[0].children[5].children[0].children[0].data}`,
          artist: `${element.children[0].children[5].children[1].children[0].data}`,
          artWork: `${element.children[0].children[3].children[1].attribs.data}`,
          url: `${element.children[2].children[3].children[1].attribs.src}`
        };

        songs = [...songs, d];
      });
    });
    return songs;
  }
  res.send(await fetchHot100());
  res.end();
})
app.listen(process.env.PORT || 5054);
