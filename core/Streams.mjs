import  get  from "axios";
import { load } from "cheerio";
export let hot100songs = [];

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

/** *
 * @param {string} artist|songName
 * 
 */
export const searchAllSongs = (artist) => {
    
}
