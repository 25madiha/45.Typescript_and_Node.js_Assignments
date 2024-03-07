"use strict";
// Array magicians
const magicians = ["iqra", "sana", "rumi", "harry"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
