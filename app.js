var userInput= prompt("Enter a Letter");
var letter= userInput.charCodeAt(0);
if(letter>=65 && letter<=90){
    alert("It is capital Alphabet");
}
else if(letter>=97 && letter<=122){
    alert("It is small Alphabet");
}
else{
    alert("This is not a Letter");
}

var num1= +prompt("Enter the First Number");
var num2= +prompt("Enter the Second Number");

if(num1>num2){
    alert(num1 + "is larger than " + num2);
}
else if(num2>num1){
    alert(num2 + "is larger than " + num1);
}
else if(num1===num2){
    alert("Both Numbers are Equals");
}
else{
    alert("Please enter a valid number");
}

var numb= +prompt("Enter a number, I will check number is positive, negative or zero");
if(numb>0){
    alert("Your number is positive");
}
else if(numb<0){
    alert("Your number is negative");
}
else if(numb===0){
    alert ("Your number is zero");
}
else {
    alert("Please enter a valid number, not a letter");
}

var checkVowel= prompt("Enter any One Alphabet");
if()