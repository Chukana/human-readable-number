module.exports = function toReadable (number) {
    let firstdecade = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) {
        return 'zero';
    } 
    
    var h = Math.floor(number/100);
    var d = Math.floor((number - h*100)/10);
    var m = Math.floor((number - h*100) - d*10);

    const arr = [];
    if (h > 0) {
        arr.push(firstdecade[h] + ' hundred');
    }
    if (d > 0) {
        if (d == 1) {
            arr.push(teens[m]);
        } else {
            arr.push(decades[d-2]);
            if (m > 0) {
                arr.push(firstdecade[m]);
            }
        }
    } else {
        if (m > 0) {
            arr.push(firstdecade[m]);
        }        
    }
    return arr.join(' ');
}
