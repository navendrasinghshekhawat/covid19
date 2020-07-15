//variables
var l=0;
var fin,cur,act,rec,dea,coun,kill;
var confirmed,recovered,deaths,activecase,confirmedtoday,recoveredtoday,deathstoday;
//to hide element
function hidet(table){
document.getElementById(table).style.display = 'none'; 
document.getElementById(table).style.visibility = 'hidden'; 
}
// to make element visible
function showt(table){
document.getElementById(table).style.display = 'block';          
document.getElementById(table).style.display = 'inline';         
document.getElementById(table).style.display = 'inline-block';   
document.getElementById(table).style.visibility = 'visible';
}
//place holder typo
document.getElementById("mySearch").placeholder = "Search country codes";

//variables of document.getelementbyid
var landingconfirmed=document.getElementById("confirmedcases");
var landingactive=document.getElementById("activecase");
var landingrecovered=document.getElementById("recovered");
var landingdeaths=document.getElementById("dead");
var landingconfirmedtoday=document.getElementById("confirmedcasestoday");
var landingrecoveredtoday=document.getElementById("recoveredtoday");
var landingdeathstoday=document.getElementById("deadtoday");
var searchcountry=document.getElementById("countryname");
var searchconfirmed=document.getElementById("confirmedcasesinsearch");
var searchactive=document.getElementById("activecasesinsearch");
var searchrecovered=document.getElementById("recoveredcasesinsearch");
var searchdeaths=document.getElementById("deadinsearch");


//links and their references.
//link for click on india....
var ind= document.getElementById("india");
ind.addEventListener('click',function(){
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    hidet("searchbar");
    showt("tableindia");
    });

//link for click on world....
var word= document.getElementById("word");
word.addEventListener('click',function(){
    hidet("tableindia");
    hidet("land");
    hidet("searchbar");
    hidet("landtoday");
    showt("tableworld");
    });

//link for click on covid-19 counter
var home = document.getElementById("covid");
home.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    hidet("searchbar");
    showt("land");
    showt("landtoday");
    });

//corona-api for landing page....
function homepage(){
    fetch('https://corona-api.com/timeline')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    confirmed=data["data"][0]["confirmed"];
    recovered=data["data"][0]["recovered"];
    deaths=data["data"][0]["deaths"];
    activecase=data["data"][0]["active"];
    confirmedtoday=data["data"][0]["new_confirmed"];
    recoveredtoday=data["data"][0]["new_recovered"];
    deathstoday=data["data"][0]["new_deaths"];
    })
}
homepage();

function print(){
setTimeout(function(){
    l=l+1;
//for world till date
    landingconfirmed.innerText="Confirmed cases are " + confirmed;
    landingactive.innerText="Active cases are " + activecase;
    landingrecovered.innerText="Recovered cases are " + recovered;
    landingdeaths.innerText="Deaths are  " + deaths;
//for world today
    landingconfirmedtoday.innerText="Confirmed Cases today are  " + confirmedtoday;
    landingrecoveredtoday.innerText="Recovered Cases today are  " + recoveredtoday;
    landingdeathstoday.innerText="Deaths today are  " + deathstoday;
},3000);
}

//refresh function to fetch and update live data
function refresh(){
setTimeout(function(){
    homepage();
    print();
    world_table();
    refresh();
},10000);
}


//link for search bar

var home = document.getElementById("searchclick");
home.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    showt("searchbar");
    find();
    
    for(j in store["data"]){
        // kill=;
        if(store["data"][j]["name"]==fin || store["data"][j]["code"]==fin)
        {
            console.log(fin);
            cur = store["data"][j]["latest_data"]["confirmed"];
            act = store["data"][j]["latest_data"]["critical"];
            rec=store["data"][j]["latest_data"]["recovered"];
            dea= store["data"][j]["latest_data"]["deaths"];
            coun=store["data"][j]["name"];
            searchresult();
            break;
        }
    }
    });

//search function
function find(){
    fin=document.getElementById("mySearch").value;
    if(fin.length <= 3){
    fin=fin.toUpperCase();
    }
        else{
    fin=fin.replace(/^./, fin[0].toUpperCase());
        }
    console.log(fin);
}
//function to update the search result into the html nav card
function searchresult(){
    searchcountry.innerText= coun;
    // console.log(searchconfirmed);
    searchconfirmed.innerText="Confirmed cases are " + cur;
    // console.log(searchactive);
    searchactive.innerText="Active cases are " + act;
    // console.log(searchrecovered);
    searchrecovered.innerText="Recovered cases are " + rec;
    // console.log(searchdeaths);
    searchdeaths.innerText="Deaths are  " + dea;
}



 //corona-api for world table
var a,b,c,d,e,f,g,h,x='',z='',fun,store;
var url="https://corona-api.com/countries";
var corona=document.getElementById('corona');
//test function for adding data to the world table
function world_table(){
fetch(url)
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
store=data;
    	for(i in data["data"]){
            fun=data["data"][i]["code"]; //code of country
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

















//function calls
        print();
        refresh();
        world_table();
        hidet("searchbar");
       // hidet("land");
       // hidet("landtoday");
        hidet("tableindia");
        hidet("tableworld");
    
//javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();






