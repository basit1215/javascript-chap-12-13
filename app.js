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