const express = require('express');
const { fetchHot100 } = require('./core/Streams.js');

try {
  const app = express();

  // Fetching only hot 100 Ug songs
  app.get('/api/hotSongs', async (req, res) => {
    console.log(`Requesting at http://localhost:${process.env.PORT || 5054}/api/hotSongs `);
    try {
      res.json(await fetchHot100())

    } catch (e) {
      res.send(e).status(400);
    }
    console.log("Done fetching")
    res.end();

  });
  // fetch new songs
  app.get("/api/newSongs", async (req, res) => {
    console.log(`Requesting at http://localhost:${process.env.PORT || 5054}/api/hotSongs `);
    await fetchNewSongs();
    res.json({ "response": "200" });
    console.log("Done fetching")
    res.end();
  })
  // search from hot100 songs
  app.get('/api/searchHot/:query', (req, res) => {
    res.json(searchHot100Track(req.params.query));
    res.end();
  })

  // search songs from all Ugandan songs by title or artist
  app.get('/api/searchAll/:queryList', (req, res) => {
    res.json(searchAllSongs(req.params.queryList));
    res.end();
  });
  app.listen(process.env.PORT || 5054);
  console.log(`Server running at http://localhost:${process.env.PORT || 5054} `)

} catch (error) {
  console.error(error);
}
