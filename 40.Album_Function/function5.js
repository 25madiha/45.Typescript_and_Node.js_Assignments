"use strict";
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// create three albums, one with the optional track count 
let album1 = make_album("The Beatless", "Abey Road");
let album2 = make_album("Queen", "Anight at the opera");
let album3 = make_album("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
