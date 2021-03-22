

var firstName = "Ikrimah ";
var lastName = "ALwahidi";


var fullName = firstName + lastName;

console.log(fullName);

var userName = prompt("whats your name?");

console.log(userName);

document.write('<h2>' + userName + '</h2>');



var phoneNumber = prompt("whats your phoneNumber?");

console.log(phoneNumber);
if (phoneNumber == 077) {
    alert('welcome to My site');
} else if (phoneNumber === 078) {
    alert('Not allowed');
}





var favouriteCar = prompt("what's  your favourite Car?");

if (favouriteCar == 'BMW') {

    document.write('<img src="pictures/Lemozen.jpeg"/>');

} else if (favouriteCar == 'Bmw') {

    document.write('<img src="pictures/Bmw.jpeg"/>');
} else {
    alert('Bmw+Lemozen');
}


alert('The working hours it should be between from 7 to 10 hours');

var Tired = prompt("how much times you are work?");

console.log(Tired);
if (Tired === '10') {
    alert('Please Take a Rest');
} else if (Tired == '7') {

    alert('Please Go on');
} else {
    alert('Please put between 7 hours or 10 hours');


}


var age = prompt("whats your age?");

console.log(age);
if (age >= 18 && age <= 30) {
    alert('Your Welcome ');
} else if (age < 18 || age > 30) {
    alert('sorry You Cant entry');
} else {
    alert('please put The age');
}




var favouriteCar = prompt("what your favourite Car?");

while (favouriteCar !== 'Bmw' && favouriteCar !== 'Lemozen') {
    favouriteCar = prompt('please Choice Bmw/Lemozen');


}


var numberOfBmw = prompt('how many Pic of Bmw do you want?');

var Bmw = '';
var result = '';

if (favouriteCar == 'Lemozen') {
    result = '<img src="https://www.bmw-jordan.com/content/dam/bmw/marketMIDEAST/bmw-jordan_com/JOR%20Payment%20Gateway%20and%20Finance%20teasers.004%20(1).jpeg">';
} else if (favouriteCar == 'Bmw') {
    result = '<img src="https://www.bmw-jordan.com/content/dam/bmw/marketMIDEAST/bmw-jordan_com/JOR%20Payment%20Gateway%20and%20Finance%20teasers.004%20(1).jpeg">';
}



for (var i = 0; i < numberOfBmw ; i++) {
    console.log(result);
    
    document.write(result);
}

