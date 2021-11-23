// function Array(array){
//       this.array = array;
               
// }

Array.prototype.uniq = function() {
    const uniqArr = [];

    this.forEach(function(el) {
        if (!uniqArr.includes(el))
            uniqArr.push(el);
        }
    
    )
    return uniqArr;  
}

Array.prototype.twoSum = function() {
    const arr = [];
    let i = 0;
    while(i < this.length) {
        let pair_arr = [];
        let j = 0;
        while(j < this.length) {
            if ((j > i) && (this[i] + this[j] === 0)) {
                pair_arr = [i, j];
                arr.push([i,j])
            }
            j++;
        }
        i++;
    }
    return arr;
}
// newArr = Array.from(Array(length), () => new Array(this.length));
Array.prototype.transpose = function() {

    const length = this[0].length;

    let arr = Array.from(Array(length), () => new Array(this.length));
    let row = 0;
    let col = 0;
    while(row < length) {
        col = 0;
        while(col < this.length) {
            arr[row][col] = this[col][row];
            col++;
        }
        row++;
    }
    return arr;
}



