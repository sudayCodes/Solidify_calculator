// This will result in a 32 bit hash 

//For a 32-bit FNV-1a hash,FNV offset basis value is 2166136261 

//For a 32-bit FNV-1a hash, FNV prime value is 16777619 

//Remember always the resulting hash should be of 32 bit if it is more than that just trim it to 32 bit
/*Applying Modulo Operation:

To fit the result within a 32-bit unsigned integer, we apply a modulo operation with 2³² (4,294,967,296):

36,342,607,798,597,324 mod 4,294,967,296 = 3,634,260,774

Conclusion:

After applying the modulo operation, the final hash value becomes 3,634,260,774. This ensures that the hash value remains within the 32-bit unsigned integer range*/ 






function Hashing(salted){
    // Define the offset basis and prime value as BigInt
let offset_basis = BigInt(14695981039346656037);
let prime_value = BigInt(1099511627211);

// Initialize the current hash as a BigInt
let current_hash = offset_basis;

// Iterate over each character in the input string
for (let char of salted) {
    // Get the ASCII value of the character
    let ascii = BigInt(char.charCodeAt(0));
    // Perform the XOR operation
    current_hash = current_hash ^ ascii; // XOR function

    // Multiply by the prime value
    current_hash = current_hash * prime_value;
    current_hash = current_hash % BigInt(2**64);
}
return current_hash;
}
// numbers- 48 to 57
// uppercase (65-90) and lowercase (97-122)
// i am generating a string of len-6
function randomchar(){
    let randomcode = Math.floor(Math.random() * 75) + 48; // generates b/w 48to 122
    let randomLetter = String.fromCharCode(randomcode);
    return randomLetter;
}


function salting(input){
    let random = randomchar();

let salt ="";
for (let i = 0; i < 8; i++) {
    salt = salt + randomchar();
}
return [input+salt, salt];
}


const username = "suday";
const password = "password"

let [salt_output, salt] = salting(password);
let hash = Hashing(salt_output);
let data = {
    
};
// Initialize the user object if it doesn't exist
if (!data[username]) {
    data[username] = {};
}
data[username]["salt"]= salt;
data[username]["hash"]= hash;


document.getElementById("signupForm").addEventListener('submit', function (e){
    e.preventDefault();
    let username__ = document.getElementById("newUsername").value;
    let password_ = document.getElementById("newPassword").value;
    let [salt_output, salt] = salting(password_);
    let hash = Hashing(salt_output);
    
    const user = {
        [username__]:{ // very imp as it thinks "username__" if u just write username__ u shd also include them in []
            "salt":salt,
            "hash":hash.toString()
        }
    };
    
    // Convert the object to a JSON string
    const userJSON = JSON.stringify(user);
    
    // Store the JSON string in localStorage
    localStorage.setItem('user', userJSON);

alert("You've successfully registered, now you can login");
})


