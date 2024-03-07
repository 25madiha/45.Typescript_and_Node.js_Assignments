


// Define the original array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to add "the Great" to each magician's name
function make_great(names: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let name of names) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}

// Function to display the magicians' names
function show_magicians(names: string[]): void {
    for (let name of names) {
        console.log(name);
    }
}

// Create a copy of the original array
let magiciansCopy: string[] = [...magicians];

// Add "the Great" to each magician's name in the copy
let greatMagicians: string[] = make_great(magiciansCopy);

// Display both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
