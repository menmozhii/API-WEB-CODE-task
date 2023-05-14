  var h1=document.createElement("h1");
  h1.innerHTML=" COVID -19";
 
 var div=document.createElement("div");
 div.style.textAlign="center";

 var input=document.createElement("input");
 input.setAttribute("type","text");
 input.setAttribute("id","country");
 input.style.width="30%";
 input.setAttribute("placeholder","enter the countryname");

 var linebreak=document.createElement("br");
 var button =document.createElement("button");
 button.setAttribute("type","button");
 button.classList.add("btn","btn-primary");
 button.style.margin="20px";
 button.innerHTML="search";
 button.addEventListener("click",foo);

 var outputdiv=document.createElement("div");
outputdiv.style.fontSize="20px";


 div.append(h1,input,linebreak,button,outputdiv);
 document.body.append(div);

 async function foo()
 {
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/dayone/country/${res} `;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    var activeindex=res2.length-1;
    console.log(res2[activeindex].Active);

var deathindex=res2.length-1;
    console.log(res2[deathindex].Deaths);

    var recoveredindex =res2.length-1;

    console.log(res2[recoveredindex].Recovered);

outputdiv.innerHTML=`
No of active: ${res2[activeindex].Active}<br>
No of death: ${res2[deathindex].Deaths}<br>
No of recovered: ${[recoveredindex].Recovered}<br>
`


}

