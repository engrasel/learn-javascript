// 1. conversation
/* function feetToInch(feet) {
    const formula = feet * 12;
    return formula;
}
const totallInches = feetToInch(5);
console.log(totallInches); */



// 2. conversation
/* function centimeterToMeter(centimeter) {
    const formula = centimeter * 0.01;
    return formula;
}
const totallMeter = centimeterToMeter(100);
console.log(totallMeter); */



// 3.calculation
    // book1 has = 100 pages
    // book2 has = 200 pages
    // book3 has = 300 pages
/* function pageRequirements(book1, book2, book3) {
    const sumBook1 = book1 * 100;
    const sumBook2 = book2 * 200;
    const sumBook3 = book3 * 300;

    const totallPages = sumBook1 + sumBook2 + sumBook3;
    return totallPages;
}
const inputBookNumber = pageRequirements(2, 1, 1);
console.log(inputBookNumber); */



// 4. find largest name form array
/* const arr = ['rasel', 'jibon roy', 'rakib hossain', 'sirajul', 'sanzid khan batas', 'yes i am successfull man'];
let biggerName = '';
function bestFriend(names) {
    for (var i = 0; i < names.length; i++){
        if (names[i].length > biggerName.length) {
            biggerName = names[i];
        }
    }
    return biggerName;
}
const result = bestFriend(arr);
console.log(result); */



// 5.will stop the loop if the array has any negative number and returns all the positive number before the negative number
/* const arr = [45,20,22,24,38, -12, 35, 75, -25, 10,20,30];
let positiveNumber = [];
function onlyPositive(number) {
    for (i = 0; i < number.length; i++){
        const element = number[i];
        
        if (element >= 0 && element % 2 == 0) {
           positiveNumber.push(element);
            // console.log(positiveNumber);
        }
        else if (element < 0) {
            // console.log('this is break ');
            break;
        }
    }
    return positiveNumber;
}
const result = onlyPositive(arr);
console.log(result); */