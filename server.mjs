import express from 'express';
import { hot100songs } from './core/Streams.mjs';

const app = express();
app.get(`/api/songs`,(req, res) => {
 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(hot100songs));
    res.end();
console.log(`Server running at http://localhost:${process.env.PORT || 5054} `)
}).listen(process.env.PORT || 5054);
