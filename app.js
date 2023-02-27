var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputValue')
var name= document.querySelector('.name');
var desc= document.querySelector('.desc');
var temp= document.querySelector('.temp');

button.addEventListener('click',function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=f3de74f84093f01d036d79d5668e436f')
    .then(response => response.json())
    .then(data => {
        var nameValue=data['name'];
        var tempValue=data['main']['temp'];
        var descValue=data['weather'][0]['description'];

main.innerHTML=nameValue;
temp.innerHTML=tempValue;
desc.innerHTML=descValue;
input.value="";

    })

    .catch(err => alert("Wrong city name!"));
})
