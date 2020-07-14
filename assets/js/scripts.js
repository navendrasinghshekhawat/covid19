//to hide table 
function hidet(table){
document.getElementById(table).style.display = 'none'; 
document.getElementById(table).style.visibility = 'hidden'; 
}
// to make table visible
function showt(table){
document.getElementById(table).style.display = 'block';          
document.getElementById(table).style.display = 'inline';         
document.getElementById(table).style.display = 'inline-block';   
document.getElementById(table).style.visibility = 'visible';
}
//place holder typo
document.getElementById("mySearch").placeholder = "Search country codes";

//links and their references.
//link for click on india....
var ind= document.getElementById("india");
ind.addEventListener('click',function(){
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    showt("tableindia");
    });

//link for click on world....
var word= document.getElementById("word");
word.addEventListener('click',function(){
    hidet("tableindia");
    hidet("land");
    hidet("landtoday");
    showt("tableworld");
    });

//link for click on covid-19 counter
var home = document.getElementById("covid");
home.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    showt("land");
    showt("landtoday");
    });

//corona-api for landing page....
var confirmed,recovered,deaths,activecase,confirmedtoday,recoveredtoday,deathstoday;
function mathapi(){
    fetch('https://corona-api.com/timeline')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    confirmed=data["data"][0]["confirmed"];
    recovered=data["data"][0]["recovered"];
    deaths=data["data"][0]["deaths"];
    activecase=data["data"][0]["active"];
    })
}
mathapi();

//corona-api for landing page today stats
function ninja(){
    fetch('https://corona-api.com/timeline')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    confirmedtoday=data["data"][0]["new_confirmed"];
    recoveredtoday=data["data"][0]["new_recovered"];
    deathstoday=data["data"][0]["new_deaths"];
    })
}
ninja();
//time function
var i=0;
function print(){
setTimeout(function(){
    // console.log(confirmedtoday);
    // console.log(activecase);
    // console.log(recoveredtoday);
    // console.log(deathstoday);
    i=i+1;
//for world till date
    var landingconfirmed=document.getElementById("confirmedcases");
    // console.log(landingconfirmed);
    landingconfirmed.innerText="Confirmed cases are " + confirmed;
    
    var landingactive=document.getElementById("activecase");
    // console.log(landingactive);
    landingactive.innerText="Active cases are " + activecase;

    var landingrecovered=document.getElementById("recovered");
    // console.log(landingrecovered);
    landingrecovered.innerText="Recovered cases are " + recovered;
    
    var landingdeaths=document.getElementById("dead");
    // console.log(landingdeaths);
    landingdeaths.innerText="Deaths are  " + deaths;

//for world today
    var landingconfirmedtoday=document.getElementById("confirmedcasestoday");
    // console.log(landingconfirmedtoday);
    landingconfirmedtoday.innerText="Confirmed Cases today are  " + confirmedtoday;

    var landingrecoveredtoday=document.getElementById("recoveredtoday");
    // console.log(landingrecoveredtoday);
    landingrecoveredtoday.innerText="Recovered Cases today are  " + recoveredtoday;

    var landingdeathstoday=document.getElementById("deadtoday");
    // console.log(landingdeathstoday);
    landingdeathstoday.innerText="Deaths today are  " + deathstoday;
    
},3000);

}
//test of time function...for landing page
print();

function refresh(){
setTimeout(function(){
  
    ninja();
    mathapi();
    print();
    refresh();
  
},10000);
}

refresh();




 //corona-api for world
var a,b,c,d,e,f,g,h,x='',z='';
var url="https://corona-api.com/countries";
var corona=document.getElementById('corona');

function test(){
fetch(url)
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    	for(i in data["data"]){
    a=data["data"][i]["name"]; //name of country
b=data["data"][i]["population"]; //population 
c=data["data"][i]["latest_data"]["confirmed"]; //confirmed till date
f=data["data"][i]["latest_data"]["recovered"]; //recovered till date
e=data["data"][i]["latest_data"]["deaths"]; // deaths till date
d=data["data"][i]["latest_data"]["critical"]; //active cases
g=data["data"][i]["today"]["confirmed"]; // confirmed today
h=data["data"][i]["today"]["deaths"]; //deaths today

console.log(a,b,c,d,e,f,g,h);

x+='<tr>';
x+='<td>'+a+'</td>';
x+='<td>'+b+'</td>';
x+='<td>'+c+'</td>';
x+='<td>'+d+'</td>';
x+='<td>'+e+'</td>';
x+='<td>'+f+'</td>';
x+='<td>'+g+'</td>';
x+='<td>'+h+'</td>';
x+='</tr>';
}
z=z+x;
corona.innerHTML=z;
    })}
test();
























   hidet("tableindia");
   hidet("tableworld");
    
//javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

