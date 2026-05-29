//QUESTION 1
function areaOfNumber(radius: number):
    number{
        return Math.PI * radius * radius
    }

console.log(areaOfNumber(4))

//QUESTION 2
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

//QUESTION 3
function returnTwoValues<T>(valu1: T, value2: T): T[]{
    return [valu1, value2]

}

console.log(returnTwoValues<string>("Wallex", "Coder"))
console.log(returnTwoValues<number>(2, 5))

//QUESTION 4
let apikey: string =  "hVyUnPy5FvnZ1krd7VM7g5EZ4kYEBrRtln969gRb"

async function quotGenerator() {
    let respose = await fetch("https://api.api-ninjas.com/v2/randomquotes", {
        method: 'GET',
        headers: {
            "X-Api-Key": apikey
        }
    })
    let data = await respose.json()
    console.log(data)
}

quotGenerator()

let apikey: string =  "hVyUnPy5FvnZ1krd7VM7g5EZ4kYEBrRtln969gRb"

type Quote = {
  quote: string;
  author: string;
  category: string;
};

let character = document.getElementById("character") as HTMLElement;
if(character){
    character.textContent = 'Losding...'
}

async function quoteGenerator(): Promise<void> {
  let response = await fetch(
    "https://api.api-ninjas.com/v1/advice",
    {
      method: "GET",
      headers: {
        "X-Api-Key": apikey,
      },
    }
  );
let data: Quote[] = await response.json();

  displayQuote(data);
}


let btn = document.getElementById("new-quote") as HTMLButtonElement;

btn.addEventListener("click", quoteGenerator);


function displayQuote(data: Quote[]): void {
  let character = document.getElementById("character") as HTMLElement;

  data.forEach((quote: Quote) => {
    character.textContent = `${quote.quote}`;
  });

}