let employee : string[] = ["admin","ahsan","husain"]

for (let i=0; i<employee.length; i++){
    if(employee[i] == "admin"){
        console.log("hello admin,would you like to see a status report?")
    }
    else{
        console.log(`hello ${employee[i]}`)
    }
}