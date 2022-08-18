var siteNameIn = document.getElementById ("siteName");
var siteUrlIn = document.getElementById ("siteUrl");

var allSites;

if(localStorage.getItem("savedSites")==null){

    allSites= [];
}else{

    allSites=JSON.parse(localStorage.getItem ("savedSites"));
    displaySites();
}

function addSite()
{


    var oneSite= {

        siteNameP: siteNameIn.value,

        siteUrlP: siteUrlIn.value

    }

    allSites.push(oneSite);
    localStorage.setItem("savedSites",JSON.stringify(allSites));
    displaySites();
    clearInputs();


}


function clearInputs (){

    siteNameIn.value = siteUrlIn.value=" ";
}


function displaySites(){

    var collector= ``;
   for(var i=0; i<allSites.length; i++ ){
    collector+= `<div class="d-flex my-5 newSite p-4">
    <h2 class="col-4">${allSites[i].siteNameP} </h2>

    <a class="btn btn-primary mx-1" onclick="visitSite()" target="_blank">visit</a>
    <button class="btn btn-danger mx-1" onclick="deleteSite()">delete</button>     
    
        </div>`
   }
   document.getElementById("sites").innerHTML=collector;
}

function deleteSite(index){

allSites.splice(index,1);

displaySites();

localStorage.setItem("savedSites",JSON.stringify(allSites));
}

function visitSite(){
var link  =  document.querySelectorAll("a");

    for (var i=0; i<allSites.length; i++){

    link[i].href= allSites[i].siteUrlP;

}
}