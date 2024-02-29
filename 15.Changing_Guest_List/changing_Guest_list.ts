let Guest_list = ['madiha', 'rumi', 'azka'];
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
}
let absent_Guest :string =  'madiha' ;

let new_Guest :string = 'diya' ;

Guest_list[0] = new_Guest ;

for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
}
console.log (`Miss. ${absent_Guest} is not coming to the party.`)