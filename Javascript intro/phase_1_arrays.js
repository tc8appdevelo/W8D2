function Array(array){
      this.array = array;
               
}

Array.prototype.uniq = function() {
    const uniqArr = [];

    this.array.forEach(function(el) {
        if (!uniqArr.includes(el))
            uniqArr.push(el);
        }
    
    )
    return uniqArr;  
}

// function myUniq(array) {
//     const uniqArr = [];

//     array.forEach(function(el) {
//         if (!uniqArr.includes(el))
//             uniqArr.push(el);
//         }
    
//     )
//     return uniqArr;
// }

