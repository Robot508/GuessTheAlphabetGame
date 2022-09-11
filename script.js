var user = 0;
let cpu;
var sef = [];
let abc = "abcdefghijklmnopqrstuvwxyz"
let arr = [];
let score = 100;
let guesses = 0;
let buttons = document.getElementsByClassName("Button");

for (let i = 0; i < abc.length; i++) {
  arr.push(abc[i].toUpperCase());
}
console.log(arr);
const buttongenerator = (x) => {
  sef.push(`<button class="Button" id = "${x}"> ${x} </button>`)
}

for (let element of arr) {
  buttongenerator(element);
}
sef = sef.join(' ');
document.getElementById("keyboard").innerHTML = `${sef}`;

cpu = arr[Math.floor(Math.random() * arr.length)];

//helper function

//Logic here
console.log(arr.indexOf(user))

const game = () => {
  let tv = document.getElementById("TV");
  if (user == cpu) {
    tv.innerHTML = `Congratulations!🎉<br> You Won The Game, <br>Your Score was ${score - guesses} and Guesses Were ${guesses}`
    console.log("Congratulations!🎉 You Won The Game!");
    document.getElementById("guess-cpu").innerHTML = cpu;
  }

  else if (arr.indexOf(user) < arr.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes After "${user}", <br>Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes After "${user}", Guess Between A-Z`);
    guesses++;
  }

  else if (arr.indexOf(user) > arr.indexOf(cpu)) {
    tv.innerHTML = `Wrong Guess!💫<br> The Alphabet Comes Before "${user}",<br> Guess Between A-Z`
    console.log(`Wrong Guess!💫 The Alphabet Comes Before "${user}", Guess Between A-Z`)
    guesses++;
  }
}
const yo = () => {
  for (let i = 0; i < arr.length; i++) {
    buttons[i].onclick = function() {
      user = (this.id);
      document.getElementById("guess-user").innerHTML = (this.id);
      console.log(user);
      game();
    }
  }
}
yo();
console.log(user)
