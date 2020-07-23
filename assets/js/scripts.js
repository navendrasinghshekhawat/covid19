//variables
var l=0;
var fin,cur,act,rec,dea,coun,kill,sct,srt,sdt;
var confirmed,recovered,deaths,activecase,confirmedtoday,recoveredtoday,deathstoday;
var indiaconfirmed,indiarecovered,indiaactive,indiadeaths;
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
var searchcountrytoday=document.getElementById("countrynametoday");
var searchconfirmedtoday=document.getElementById("confirmedcasesinsearch1");
var searchrecoveredtoday=document.getElementById("recoveredcasesinsearch1");
var searchdeathstoday=document.getElementById("deadinsearch1");
var indiacon=document.getElementById("confirmindia");
var indiaacti=document.getElementById("actiindia");
var indiareco=document.getElementById("recoindia");
var indiadead=document.getElementById("deadindia");
var faq=document.getElementById("faq");
var ccin=document.getElementById("cindia");
var rrin=document.getElementById("rindia");
var ddin=document.getElementById("dindia");


//links and their references.
//link for click on india....
var ind= document.getElementById("india");
ind.addEventListener('click',function(){
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    hidet("searchbar");
    hidet("faq");
    showt("tableindia");
    });

//link for click on world....
var word= document.getElementById("word");
word.addEventListener('click',function(){
    hidet("tableindia");
    hidet("land");
    hidet("searchbar");
    hidet("landtoday");
    hidet("faq");
    showt("tableworld");
    });

//link for click on covid-19 counter
var home = document.getElementById("covid");
home.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    hidet("searchbar");
    hidet("faq");
    showt("land");
    showt("landtoday");
    });

//link for click on FAQ
var Faq= document.getElementById("Q");
Faq.addEventListener('click',function(){
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    hidet("searchbar");
    hidet("tableindia");
    showt("faq")
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
    // world_table();
    refresh();
},50000);
}


//corona-api for world table
var a,b,c,d,e,f,g,h,x='',z='',fun,store;
var corona=document.getElementById('corona');
//test function for adding data to the world table
function world_table(){
fetch('https://corona-api.com/countries')
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
//console.log(a,b,c,d,e,f,g,h);
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



//search function
function find(){
    fin=document.getElementById("mySearch").value;
    if(fin.length < 3){
    fin=fin.toUpperCase();
    }
    else{
    fin=fin.replace(/^./, fin[0].toUpperCase());
        }
    // console.log(fin);
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

    searchcountrytoday.innerText="Cases in "+ coun +" today";
    searchconfirmedtoday.innerText="Confirmed cases are " + sct;
    searchrecoveredtoday.innerText="Recovered cases are " + srt;
    searchdeathstoday.innerText="Deaths are  " + sdt;
}

//corona-api for india statewise table
var p,q,r,s,t,u='',v='',w,ct,rt,dt,cin,rin,din;
var stateindia=document.getElementById('statewisetable');
//india_table function for adding data to the india table
function india_table(){
fetch("https://api.covid19india.org/data.json")
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
w=data; //data for searching states of india
    	for(k in data["statewise"]){
          
          p=data["statewise"][k]["state"]; //state name
          q=data["statewise"][k]["confirmed"]; //total confirmed cases
          r=data["statewise"][k]["active"]; //total active cases
          s=data["statewise"][k]["recovered"]; //total recovered cases
          t=data["statewise"][k]["deaths"] //total deaths cases
          ct=data["statewise"][k]["deltaconfirmed"]; //confirmed today cases
          rt=data["statewise"][k]["deltarecovered"];
          dt=data["statewise"][k]["deltadeaths"];
//console.log(p,q,r,s,t,ct,rt,dt);
if(k==0){
    cin=data["statewise"][k]["deltaconfirmed"];
    rin=data["statewise"][k]["deltadeaths"];
    din=data["statewise"][k]["deltarecovered"];
    continue;
}
          u+='<tr>';
          u+='<td>'+p+'</td>';
          u+='<td>'+q+'</td>';
          u+='<td>'+r+'</td>';
          u+='<td>'+s+'</td>';
          u+='<td>'+t+'</td>';
          u+='<td>'+ct+'</td>';
          u+='<td>'+rt+'</td>';
          u+='<td>'+dt+'</td>';
          u+='</tr>';
}
v=v+u;
stateindia.innerHTML=v;
ccin.innerText="Confirmed cases today are " + cin;
rrin.innerText="Recovered cases today are " + din;
ddin.innerText="Deaths today are " + rin;



    })

}
india_table();




//link for search bar
var home = document.getElementById("searchclick");
home.addEventListener('click',function(){
    hidet("tableindia");
    hidet("tableworld");
    hidet("land");
    hidet("landtoday");
    hidet("faq");
    showt("searchbar");
    find();
    
    for(j in store["data"]){
        // kill=;
        if(store["data"][j]["name"]==fin || store["data"][j]["code"]==fin)
        {
            //console.log(fin);
            cur = store["data"][j]["latest_data"]["confirmed"];
            act = store["data"][j]["latest_data"]["critical"];
            rec=store["data"][j]["latest_data"]["recovered"];
            dea= store["data"][j]["latest_data"]["deaths"];
            coun=store["data"][j]["name"];
            sct=store["data"][j]["today"]["confirmed"];
            srt="Not Available";
            sdt=store["data"][j]["today"]["deaths"];
            searchresult();
            break;
        }
    }

            for(re in w["statewise"]){
            if(w["statewise"][re]["statecode"]==fin || w["statewise"][re]["state"]==fin)
        {
            //console.log(fin);
            cur = w["statewise"][re]["confirmed"];
            act = w["statewise"][re]["active"];
            rec=w["statewise"][re]["recovered"];
            dea= w["statewise"][re]["deaths"];
            coun=w["statewise"][re]["state"];
            sct=w["statewise"][re]["deltaconfirmed"];
            srt=w["statewise"][re]["deltarecovered"];
            sdt=w["statewise"][re]["deltadeaths"];
            // console.log(cur,act,rec,dea,coun);
            searchresult();
            break;
        }
            }
           
    
    });

// function for india total cases
function indiatoday(){
    fetch('https://api.rootnet.in/covid19-in/stats/latest')
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    indiaconfirmed=data["data"]["unofficial-summary"][0]["total"];
    //deathstoday=data["data"][0]["new_deaths"];
    indiaactivated=data["data"]["unofficial-summary"][0]["active"];
    indiarecover=data["data"]["unofficial-summary"][0]["recovered"];
    indiadeath=data["data"]["unofficial-summary"][0]["deaths"];

    //for india today
indiacon.innerText="Confirmed Cases are " + indiaconfirmed;
indiaacti.innerText="Active Cases are " + indiaactivated;
indiareco.innerText="Recovered Cases are " + indiarecover;
indiadead.innerText="Deaths are " + indiadeath;

    })
}
indiatoday();


 

//corona-api for india tests taken table
var date,test,res='',restotal='';
var testindia=document.getElementById('indiatest');
//india_test function for adding data to the test taken table
function india_test(){
fetch("https://api.rootnet.in/covid19-in/stats/testing/history")
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    	for(m in data["data"]){
          date=data["data"][m]["day"];
          test=data["data"][m]["totalSamplesTested"];

          res+='<tr>';
          res+='<td>'+date+'</td>';
          res+='<td>'+test+'</td>';
          res+='</tr>';
}
restotal=restotal+res;
testindia.innerHTML=restotal;
    })}
india_test();


//corona-api for hospitals information table
var hs,hos,rh,uh,tb,rb,ub,ason,hospi='',hospitotal='';
var hospiindia=document.getElementById('hospitals');
var vrl="https://api.rootnet.in/covid19-in/hospitals/beds";
//india_test function for adding data to the hospitals table
function india_hospi(){
fetch(vrl)
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    	for(o in data["data"]["regional"]){
           
          hs=data["data"]["regional"][o]["state"];
          hos=data["data"]["regional"][o]["totalHospitals"];
          rh=data["data"]["regional"][o]["ruralHospitals"];
          uh=data["data"]["regional"][o]["urbanHospitals"];
          tb=data["data"]["regional"][o]["totalBeds"];
          rb=data["data"]["regional"][o]["ruralBeds"];
          ub=data["data"]["regional"][o]["urbanBeds"];
          ason=data["data"]["regional"][o]["asOn"];

          hospi+='<tr>';
          hospi+='<td>'+hs+'</td>';
          hospi+='<td>'+hos+'</td>';
          hospi+='<td>'+rh+'</td>';
          hospi+='<td>'+uh+'</td>';
          hospi+='<td>'+tb+'</td>';
          hospi+='<td>'+rb+'</td>';
          hospi+='<td>'+ub+'</td>';
          hospi+='<td>'+ason+'</td>';
          hospi+='</tr>';
}
hospitotal=hospitotal+hospi;
hospiindia.innerHTML=hospitotal;
    })}
india_hospi();


//corona-api for Medical colleges information table
var ms,mn,mc,mo,ma,mh,lastupdate,medi='',meditotal='';
var mediindia=document.getElementById('mediindia');
var xrl="https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
//india_test function for adding data to the medical colleges table
function india_medi(){
fetch(xrl)
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
    	for(pk in data["data"]["medicalColleges"]){
           
          ms=data["data"]["medicalColleges"][pk]["state"];
          mn=data["data"]["medicalColleges"][pk]["name"];
          mc=data["data"]["medicalColleges"][pk]["city"];
          mo=data["data"]["medicalColleges"][[pk]]["ownership"];
          ma=data["data"]["medicalColleges"][pk]["admissionCapacity"];
          mh=data["data"]["medicalColleges"][pk]["hospitalBeds"];          

          medi+='<tr>';
          medi+='<td>'+ms+'</td>';
          medi+='<td>'+mn+'</td>';
          medi+='<td>'+mc+'</td>';
          medi+='<td>'+mo+'</td>';
          medi+='<td>'+ma+'</td>';
          medi+='<td>'+mh+'</td>';
          medi+='</tr>';
}
meditotal=meditotal+medi;
mediindia.innerHTML=meditotal;
    })}
india_medi();
















//function calls
        print();
        refresh();
        world_table();
        hidet("searchbar");
       // hidet("land");
       // hidet("landtoday");
        hidet("tableindia");
        hidet("tableworld");
        hidet("faq");
    
//javascript for activating the Perfect Scrollbar -->
$('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();






