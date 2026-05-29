
function areaOfNumber(radius: number):
    number{
        return Math.PI * radius * radius
    }


console.log(areaOfNumber(4))


function checkEvenOrOddNum(num: number): string 

{
    if(num % 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}

console.log(checkEvenOrOddNum(4))
console.log(checkEvenOrOddNum(7))

function returnTwoValues<T>(valu1: T, value2: T): T[]{
    return [valu1, value2]

}

console.log(returnTwoValues<string>("Wallex", "Coder"))