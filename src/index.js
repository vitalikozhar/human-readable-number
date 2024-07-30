module.exports = function toReadable(number) {

    let array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let array2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let array3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = number.toString();
    if (str.length === 3) { return array1[str[0] - 1] + ' hundred' + fortwonumbers(str[1],str[2], ' ') }
    if (str.length === 2) { return fortwonumbers(str[0],str[1], '') }
    if (str.length === 1 && str[0] !== '0') { return array1[str[0] - 1] } else if (str.length === 1 && str[0] === '0'){return 'zero'}
    if (str.length === 0) { return '' }

    function fortwonumbers(a,b,c) {
        if(+(a+b) === 0 ){ return ''}
        if(+(a+b) <= 9){ return c + array1[+b - 1]} else
        if(+(a+b) > 9 && +(a+b) < 20 ){return c + array2[+b] }else 
        if(+(a+b) >= 20 && +(a+b) <= 99 && b === '0' ){return c + array3[+a - 2]}else
        if(+(a+b) >= 20 && +(a+b) <= 99 && b !== '0' ){return c + array3[+a - 2] + " " + array1[+b - 1] }

        }
    }

