const users = {
    theresa: {
      fullName: "Theresa Smith",
      admin: true,
      age: 45,
      friends: ["freddie", "meredith"],
    },
    freddie: {
      fullName: "Frederick Jones",
      admin: false,
      age: 32,
      friends: ["meredith"],
    },
    meredith: {
      fullName: "Meredith Johnson",
      admin: false,
      age: 56,
      friends: ["freddie", "sally", "theresa"],
    },
    sally: {
      fullName: "Sally Brown",
      admin: false,
      age: 28,
      friends: ["meredith"],
    },
  };




/* // 1. How would you access theresa's full name (i.e. the string "Theresa Smith")?

users.theresa.fullName

// 2. How would you access Freddie's age?

users.freddie.age

// 3. Create a variable `username` and set it to `sally`
// Write an `if` to see if `username` is an admin or not. It should output either "Is an Admin" or "Not an admin"
// (try it out with different values for the `username` variable to check it works)

let username = 'sally';
if (users[username].admin == true){
    console.log("Is an Admin")
} else {
    console.log("INot an admin")
}

// 4. How would you add a new friend "sally" to Freddie's list of friends?

users.freddie.friends.push("sally")

// 5. How would you add yourself to the users object? (fill out the same info as everyone else).

users.nikhil = {
    fullName: 'Nikhil Mahashabde', 
    admin: true,
    age: 30,
    friends: ["abc"],
}

// 6. Write a loop that outputs the full names of each of Meredith's friends. 


for (n in users){
    console.log(users[n].fullName)
}


*/



