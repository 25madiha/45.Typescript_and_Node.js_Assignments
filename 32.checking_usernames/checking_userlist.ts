let current_users: string[] =["moeed","ahsan","sana","hussain","sara"];

let new_users: string[] = ["alia","MOEED","sonia","ahmed","SarA"];

for(let new_user of new_users){
    let isAvailable = true;
    for(let current_user of current_users){
     if(new_user.toLowerCase() === current_user.toLowerCase()) {
        console.log(`username "${new_user}" is already taken.please choose a different username.`);
        isAvailable = false;
        break;
     }  
    }
    if(isAvailable){
        console.log(`username "${new_user}" is available`)
    }
}
