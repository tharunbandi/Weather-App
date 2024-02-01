let inputele=document.getElementById("location-input");
let button=document.getElementById("btn");
let img=document.getElementById("icon");
let tempvalue=document.getElementById("temp-value");
let weatherdesc=document.getElementById("Weather-desc")
let locations=document.getElementById("location")

const apiKey="e3addb1da487e99b5acc297f818666a5";

button.onclick=(function(){
    if(inputele.value=="")
    {
        alert('Input should not empty')
    }
    else
    {
        loc=inputele.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res=>res.json())
            .then(data=>{
                console.log(data)
                const{name}=data
                const{feels_like}=data.main
                const{description}=data.weather[0]
                tempvalue.innerText=Math.floor(feels_like-273)
                locations.innerText=name;
                weatherdesc.innerText=description
            })
            .catch(()=>{
                alert("Enter valid location")
            })
            inputele.value=""





        
    }
})
