Array.prototype.myEach = function(callback) {
        this.forEach( function(el) {
            callback(el)
        })
}

Array.prototype.myMap = function(callback) {
    const newMap = [];
    this.myEach(function(el)  {
        newMap.push(callback(el));
    });
    return newMap;
}

Array.prototype.myReduce = function(callback,initialValue){
    if (initialValue === undefined){
        initialValue = this.shift();
    }
    let sum = initialValue;
    this.myEach(function(el){
        sum = callback(sum,el);

    });
    return sum;
}

// callback = function(acc, el) {
//     return acc + el;
//   }




