
// Declare a variable named submissions that is initialized to an array with the following objects
const submissions = [

   {   name: "Jane", 
       score: 95, 
       date: "2020-01-24", 
       passed: true
   }, 

   {   name: "Joe", 
       score: 77, 
       date: "2018-05-14",
       passed: true
   }, 

   {   name: "Jack",
       score: 59, 
       date: "2019-07-05", 
       passed: false
   }, 

   {   name: "Jill", 
       score: 88, 
       date: "2020-04-22", 
       passed: true
   } 

];  

// Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) { 
    let passed;
        if (newScore < 60) {
        passed = false; 
          } else {
        passed = true; 
         }; 
    
    array.push({name:newName, score: newScore, date: newDate, passed: passed});
    
    console.log(array); 
}
addSubmission(submissions, "Christina", 100, "2020-11-11");

// Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using the
// splice method.

    function deleteSubmissionByIndex(array, index){  
        array.splice(index) ;   
         console.log(array); 
        }
     deleteSubmissionByIndex(submissions, 4, 1); 

//Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

      function deleteSubmissionByName(array, name){
          let index = array.findIndex (exactName => exactName.name === name);
          array.splice(index, 1); 
          console.log(array); 
   }
      deleteSubmissionByName(submissions, "Christina"); 

// Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise

     function editSubmission(array, index, score){ 
        let findScore = array[index];
        findScore.score = score;  
    
         let passed = findScore.passed; 
      if (passed >= 60) {
          findScore.passed = true; 
         } else {
        findScore.passed = false; 
     } 
        console.log(array); 
     }
     editSubmission(submissions, 4, 40); 

// Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method

     function findSubmissionByName(array, name){
         let result = array.find(objectName => objectName.name === name); 
         console.log(result); 
     }
     findSubmissionByName(submissions, "Jane"); 

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.   

      function findLowestScore(array){
          let lowest = null; 
          array.forEach(function(submission){ 
        
          if (lowest === null || lowest.score > submission.score){
              lowest = submission; 
      }}); 
         console.log(lowest); 
      } 
      findLowestScore(submissions); 

    // Declare a function named findAverageScore
    // ○ Parameter(s): array
    // ○ Functionality: return the average quiz score. Use a for...of loop

    function findAverageScore(array){
      let sum = 0;
      for( let i = 0; i < array.length; i++){
          sum += array[i];
          return sum / array.length; 
      }; 
      console.log(sum); 
    }
    findAverageScore(submissions); 
// ^^I was not able to complete this one due to time^^ 

    // Declare a function named filterPassing
    // ○ Parameter(s): array
    // ○ Functionality: return a new array using the filter method. The filter method
    // should find objects in the array that have passing scores.
    
     function filterPassing(array){
         let passingScore = array.filter(submission => submission.score >= 60);
         console.log(passingScore);  
     }
     filterPassing(submissions); 

    // Declare a function named filter90AndAbove
    // ○ Parameter(s): array
    // ○ Functionality: return a new array using the filter method. The filter method
    // should find objects in the array that have scores greater than or equal to 90.   

     function filter90AndAbove(array){
         let filterNumber = array.filter(function(submission){
         return submission.score >= 90; 
     }); 
         console.log(filterNumber);    
     }
     filter90AndAbove(submissions); 