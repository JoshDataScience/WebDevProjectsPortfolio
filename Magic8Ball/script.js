
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/

//this function contains the work done for the extra credit - this function ensures the same answer will not appear twice until all answers have been used at least once.

let arr = [];
function getRandomIntInclusive(min, max) {
  //get a rand #
  min=Math.ceil(min);
  max= Math.floor(max);
  // return Math.floor(Math.random() * (max-min+1)+min);
  let random = Math.floor(Math.random() * (max-min+1)+min);
  
  if (!arr.includes(random)){
    arr.push(random);
    return random;
  } else {
    if(arr.length <=max){
      //Recursively generate number
      return getRandomIntInclusive(min,max);
    }else {
      arr.splice(0,arr.length);
      return getRandomIntInclusive(min,max);
    }
  }
}
let lastIndex = -1;
function answerQuestion() {
// - Create an array containing at least 5 possible answers as strings.
let answers = [
"not today", 
"sometime in the future", 
"try again tomorrow", 
"outlook not so good", 
"my sources say no"
];
// console.log(answers);

// - Generate a random array index by calling getRandomIntInclusive function.
let randArrayIndex = 0;

do{
randArrayIndex = getRandomIntInclusive(0,answers.length-1);
console.log(randArrayIndex);
// answers.splice(randArrayIndex,1); //syntax for splice is arr.splice(x,y,z)

//x= index we want to operate on
//y = number of elements to remove
//z = the new element to add into that index..if this is 0, will not add any element
// console.log(getRandomIntInclusive(0,answers.length));
}
while(randArrayIndex==lastIndex);
lastIndex=randArrayIndex;
makeAnswerAppear(answers[randArrayIndex]);

}
