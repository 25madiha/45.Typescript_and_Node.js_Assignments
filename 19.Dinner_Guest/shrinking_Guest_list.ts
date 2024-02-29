let Guest_list = ['madiha','rumi','azka'];
// for (let i = 0; i < Guest_list.length; i++) {
    // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
// }
let absent_Guest :string = 'madiha' ;
let new_Guest :string = 'diya' ;
Guest_list[0] = new_Guest ;

// for (let i = 0; i < Guest_list.length; i++) {
    // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!');
// }
// console.log (`Miss. ${absent_Guest} is not coming to the party.`);

// console.log('Good News ! we find a big table so we are inviting 3 more guests.')

Guest_list.unshift('Miss Maryam khan') ;
Guest_list.slice(2  , 0 , 'Miss Ayesha') ;
Guest_list.push('Miss Farhana');

// for (let i = 0; i < Guest_list.length; i++) {
    // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!')
// }
// console.log('\nsorry we cannot arrange big table, only two people will ne invited.');
while(Guest_list.length > 2){
   let remove_Guest = Guest_list.pop();
//    console.log(`sorry Miss.${remove_Guest},You are not invited for dinner.`);
}
// 
// for (let i = 0; i < Guest_list.length; i++) {
    // console.log('Dear Miss. ' + Guest_list[i] + ',\n\nyou are still invited.\n\nThank you!\n\n')
// }
// mne sare guest array se dlt krdyea hain
Guest_list.splice(0, 2);
console.log(Guest_list);

//Exercise 19
// print a message indicating the number of people you are inviting bto dinner.
console.log (`total number of Guest are: ${Guest_list.length}`);


