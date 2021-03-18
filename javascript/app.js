

 var firstName="Ikrimah ";
 var lastName="ALwahidi";


 var fullName=firstName+lastName;

console.log(fullName);

 var userName= prompt("whats your name?");

console.log(userName);

 document.write('<h2>'+userName+'</h2>');



var phoneNumber=prompt("whats your phoneNumber?");

console.log(phoneNumber);
if(phoneNumber==077){
    alert('welcome to My site'); 
}else if(phoneNumber===078){
    alert('Not allowed');
}





var favouriteCar= prompt("what's  your favourite Car?");

if(favouriteCar=='BMW'){

    document.write('<img src="pictures/Lemozen.jpeg"/>');

}else if(favouriteCar=='Bmw'){

    document.write('<img src="pictures/Bmw.jpeg"/>');
}else{
    alert('Bmw+Lemozen');
}


alert('The working hours it should be between from 7 to 10 hours');

var Tired=prompt("how much times you are work?");

console.log(Tired);
if(Tired==='10'){
    alert('Please Take a Rest'); 
}else if(Tired=='7'){

    alert('Please Go on');
}else {
    alert('Please put between 7 hours or 10 hours');


}
