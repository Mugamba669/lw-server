const Axios = require("axios");
const { load } = require("cheerio");

let songContainer = [];
const fetchHot100 = async () => {
    let songs = [];
    await Axios.get(`https://www.nowviba.com/music/pages/top100.php`).then((domResponse) => {
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
            console.log(d)
            songs = [...songs, d];
        });
    })
    hot100songs = songs;
    return songs;
}
module.exports = { fetchHot100 };
const fetchNewSongs = async () => {
    let songs = [];
    await get(`https://www.nowviba.com/music/pages/newhot.php`).then((domResponse) => {
        let response = domResponse.data;
        const ch = load(response);
        let trackList = ch('.songcd');
        trackList.map((index, element) => {
            // let d = {
            //     title: `${element.children[0].children[5].children[0].children[0].data}`,
            //     artist: `${element.children[0].children[5].children[1].children[0].data}`,
            //     artWork: `${element.children[0].children[3].children[1].attribs.data}`,
            //     url: `${element.children[2].children[3].children[1].attribs.src}`
            // };
            console.log(element.attribs.src);
            // songs = [...songs, d];
        });
    })
    // hot100songs = songs;
    // return songs;
}
module.exports = {
    fetchNewSongs
}

/**
 * @param {string} track name
 */
// export const searchHot100Track = (track) => {
//     return hot100songs.filter((song) => song.title == track);
// }
/**
 * @param {string} query
 * @Mugamba669
 * @returns {ArrayBufferConstructor}
 *
 */
// export const searchAllSongs = (query) => {
//     let searchSource = `https://www.nowviba.com/music/pages/search.php?q=${query}`;
//     if (typeof query != 'string') console.error("Only strings are allowed");

//     get(searchSource).then((response) => {
//         var html = response.data;
//         const ch = load(html);
//         var trackList = ch('.container a');
//         trackList.map((index, track) => {
//             var element = track;
//             // var more = (`${element.children[0].children[1].attribs.style}`).replace("background-image:","");
//             let sourceFile;
//             get(`https://www.nowviba.com/music/pages/${element.attribs.href}`).then((response) => {
//                 var detail = response.data;
//                 var ch = load(detail);
//                 sourceFile = ch('.dwnTkNt').attr().href;
//             });
//             var stream = {
//                 // title: element.children[0].children[3].children[1].children[0].data,
//                 // artist:element.children[0].children[2].children[3].children[0].data,
//                 //    coverArt:more.replace('url(',"").replace(");",""),
//                 url: sourceFile,
//             };
//             songContainer = [...songContainer, stream];
//         });
//     });
//     return searchAllSongs;
// }
