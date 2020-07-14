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

// //thevirustracker.com api for landing page....
var confirmed,recovered,deaths,activecase,confirmedtoday,recoveredtoday,deathstoday;
function mathapi(){
    fetch('https://corona-api.com/timeline')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    confirmed=data["data"][0]["confirmed"];
    recovered=data["data"][0]["recovered"];;
    deaths=data["data"][0]["deaths"];;
    activecase=data["data"][0]["active"];;
    })
}
mathapi();

//ninja api for landing page today stats
function ninja(){
    fetch('https://corona.lmao.ninja/v2/continents?yesterday=true&sort')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    confirmedtoday=data[0]["todayCases"];
    recoveredtoday=data[0]["todayRecovered"];
    deathstoday=data[0]["todayDeaths"];
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
    if(i<3){
        ninja();
    mathapi();
    }
},3000);

}
//test of time function...for landing page
print();
function refresh(){
setTimeout(function(){
    if(i>3){
    ninja();
    mathapi();}
    print();
},10000);
}
refresh();




//thevirustracker.com api for world


























   hidet("tableindia");
   hidet("tableworld");
    
//javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

