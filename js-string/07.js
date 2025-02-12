// Self Assinge Task
/*
    USER Name : 
        1. Jamal Uddin
        2. Mohammed Ashikur Rahaman
        2. Md Kobir Khan

    You have to Show the Short name of user. 
    Note that if user Has Mohammed or Md -> it's not the nickname.
*/

    // Ashikur Rahaman
    // let user = 'Ashikur Rahamn';
    // let tempUser = user.split(' ');
    // console.log(tempUser[0]);

    // Mohammed Jamal Uddin + Md Ashikur Rahaman
    function myName(user){
        let tempUser = user.trim().split(' ');
        
        if(tempUser[0].toLowerCase().slice(0,6) === 'mohamm' || tempUser[0].toLowerCase() === 'md')
            console.log(tempUser[1]);
        else 
            console.log(tempUser[0]);
    }

    // split() toLowerCase() array string if-else 
    
    // Handle Error like 
    // "Md Ashikur Rahmana"       => Ashikur
    // " md Ashikur Rahaman"      => Ashikur
    // " mOhammad Ashikur Rahamn" => Ashik

    myName("Md Ashikur Rahaman");
    myName(" md Ashikur Rahaman");
    myName(" mOhammad Ashikur Rahamn");