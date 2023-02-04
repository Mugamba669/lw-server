import express from 'express';
import { hot100songs, searchHot100Track,searchAllSongs } from './core/Streams.mjs';

try {
      const app = express();
    console.log(`Server running at http://localhost:${process.env.PORT || 5054} `)

    // Fetching only hot 100 Ug songs
    app.get(`/api/hotSongs`,(req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.json(hot100songs);
        res.end();
    });

    // search from hot100 songs
    app.get('/api/searchHot/:query',(req,res)=>{
    
      res.json(searchHot100Track(req.params.query));
      res.end();
    })

    // search songs from all Ugandan songs by title or artist
    app.get('/api/searchAll/:queryList',(req,res)=>{
      req.params;
      res.json(searchAllSongs(req.params.queryList));
      res.end();
    });
    app.listen(process.env.PORT || 5054);

} catch (error) {
  console.error(error);
}
