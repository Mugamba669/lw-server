import  get  from "axios";
import { load } from "cheerio";
export let hot100songs = [];
let songContainer = [];
get(`https://www.nowviba.com/music/pages/top100.php`).then((dom)=>{
            var response = dom.data;
            const ch = load(response);
            let trackList = ch('.hot100')
        trackList.map((index,element)=>{
            let data = {
                title:`${element.children[0].children[5].children[0].children[0].data}`,
                artist:`${element.children[0].children[5].children[1].children[0].data}`,
                artWork:`${element.children[0].children[3].children[1].attribs.data}`,
                url:element.children[2].children[3].children[1].attribs.src
            }
             
            hot100songs = [...hot100songs, data];
        });
    });

/**
 * @param {string} track name
 */
export const searchHot100Track = (track) => {
    return hot100songs.find((song) => song.title == track);
}

/**
 * @param {string} query
 * @Mugamba669
 * @returns {ArrayBufferConstructor}
 * 
 */
export const searchAllSongs = (query) => {
    let searchSource = `https://www.nowviba.com/music/pages/search.php?q=${query}`;
    if(typeof query != 'string') console.error("Only strings are allowed");

    get(searchSource).then((response)=>{
            var html = response.data;
            const ch = load(html);
            var trackList = ch('.container a');
       trackList.map((index,track) => {
           var element = track;
        // var more = (`${element.children[0].children[1].attribs.style}`).replace("background-image:","");
            let sourceFile;
            get(`https://www.nowviba.com/music/pages/${element.attribs.href}`).then((response)=>{
                var detail = response.data;
                var ch = load(detail);
               sourceFile =  ch('.dwnTkNt').attr().href;
        });
        var stream = {
            // title: element.children[0].children[3].children[1].children[0].data,
            // artist:element.children[0].children[2].children[3].children[0].data,
        //    coverArt:more.replace('url(',"").replace(");",""),
            url:sourceFile,
          };
          songContainer = [...songContainer, stream];
       });
    });
    return searchAllSongs;
}
