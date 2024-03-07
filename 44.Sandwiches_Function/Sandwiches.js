"use strict";
function make_Sandwich(items) {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}
make_Sandwich(["Ham", "Cheese", "Lettuce"]);
make_Sandwich(["Turkey", "Bacon"]);
make_Sandwich(["Peanut Butter", "Jelly"]);
