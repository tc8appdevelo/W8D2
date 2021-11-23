Array.prototype.bubbleSort = function() {
    let sorted = false;
    while(!sorted) {
        sorted = true;
        let i = 0
        while(i < this.length-1) {
            if(this[i] > this[i+1]) {
                let b = this[i+1];
                this[i+1] = this[i];
                this[i] = b;
                sorted = false;
            }
            i++;
        }
    }

}