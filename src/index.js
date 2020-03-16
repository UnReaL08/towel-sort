
// You should implement your task here.

module.exports = function towelSort (matrix) {
 var object = []; 
 if (!matrix){
   return [];
 };
 for (i = 0; i < matrix.length; i++){
   object = (i % 2 == 0 ? object.concat(matrix[i]) : object.concat(matrix[i].reverse()))
 };
 return object;
}
