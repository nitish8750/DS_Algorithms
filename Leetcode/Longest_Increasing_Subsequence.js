module.exports = { 
    //param A : array of integers
    //return an integer
       lis : function(A){
           // var lisArr = Array.from({length: A.length}, function(){
           //     return [1];
           // });
           var lisArr = [];
           for(var k=0; k<A.length; k++){
               lisArr.push(1);
           }
           for(var i=1; i<A.length; i++){
               for(var j=0; j<i; j++){
                   if(A[i] > A[j] && lisArr[i] < lisArr[j] + 1){
                       lisArr[i] = lisArr[j] + 1;
                   }
               }
           }
           return Math.max.apply(null, lisArr);
       }
   };
   