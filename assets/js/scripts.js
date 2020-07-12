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
    showt("tableindia");
    });

//link for click on world....
var word= document.getElementById("word");
word.addEventListener('click',function(){
    hidet("tableindia");
    hidet("land");
    showt("tableworld");
    });

//link for click on covid-19 counter
var word= document.getElementById("home");
word.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    showt("land");
    });

// //mathdroid api for landing page....
var confirmed,recovered,deaths;
fetch('https://covid19.mathdro.id/api/')
.then((response)=>{
return response.json()
})
.then((data)=>{
confirmed=data["confirmed"]["value"];
recovered=data["recovered"]["value"];
deaths=data["deaths"]["value"];
})

//time function
function print(){
setTimeout(function(){
    console.log(confirmed);
    console.log(recovered);
    console.log(deaths);

    var landingconfirmed=document.getElementById("confirmedcases");
    console.log(landingconfirmed);
    landingconfirmed.innerText=confirmed;
    
    var landingrecovered=document.getElementById("recovered");
    console.log(landingrecovered);
    landingrecovered.innerText=recovered;
    
    var landingdeaths=document.getElementById("dead");
    console.log(landingdeaths);
    landingdeaths.innerText=deaths;
},2000);
}
//test of time function...
print();



























   hidet("tableindia");
   hidet("tableworld");
    
//javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

