const pokecount =646;
let count =1;
var pokedex={}
let pooke = document.createElement("div");
window.onload = async function(){
  document.body.style.zoom="95%"
  for(let i =1; i <= pokecount; i++)
 {
    await getpokemon(i);  

//will display each pokemon into the list side of the webstite
    let poke = document.createElement("div");
poke.id=i;
poke.innerText= i.toString()+ ". " + pokedex[i]["name"].toUpperCase();
poke.classList.add("pokemon-name");
poke.addEventListener("click",displaypokemon)
document.getElementById("poke-list").append(poke)

}

document.getElementById("poke-desc").innerText=pokedex[1]["fact"];
document.getElementById("pokename").innerText="Name:" + pokedex[1]["name"];

console.log(pokedex)


}


//fetch is async funtion meaning that meaning that even if it hasnst gotten 
//all data it lets you continue to run the code which is why we use await which will wait till fetch() has fully recieved the data
//to use await in functions we must declare those funtion as async as well as functions calling async funtions

async function getpokemon(num)
{
    let url ="https://pokeapi.co/api/v2/pokemon/" + num.toString();

let res = await fetch(url);
let pokemon = await res.json();
//console.log(pokemon)
let pokename = pokemon["name"];
let poketype = pokemon["types"];
let pokeimg =pokemon["sprites"]["front_default"]
let pokeability=pokemon["abilities"][0]["ability"]["name"]
//console.log(pokeability)

res = await fetch(pokemon["species"]["url"])
let pokedescription = await res.json();
//console.log(pokedescription);
let pokehabitat = pokedescription["habitat"];
if(pokehabitat == 'null')
{
    pokehabitat ="none";
}
count++;
//console.log(count);
//console.log(pokehabitat)


let pokefact = pokedescription["flavor_text_entries"][3]["flavor_text"];
//console.log(pokefact)

pokedex[num]={"name": pokename, "img": pokeimg, "types": poketype, "habitat": pokehabitat, "fact":pokefact}

//console.log(pokedex[num])
}

function displaypokemon()
{


document.getElementById("pokeimg").src = pokedex[this.id]["img"];

let namesdiv = document.getElementById("pokename"); 

while(namesdiv.firstChild)
{
namesdiv.firstChild.remove();
}

let names ='Name: ' +pokedex[this.id]["name"];
namesdiv.append(names)


let typesdiv = document.getElementById("poke-types")

//removes currnent type if there is one
while(typesdiv.firstChild)
{
typesdiv.firstChild.remove();
}

let types =pokedex[this.id]["types"];
for(let i=0; i < types.length; i++)
{
  let typee = document.createElement("span")  
  typee.innerText=types[i]["type"]["name"].toUpperCase();
 
  typee.classList.add("typecontain")
  typee.classList.add(types[i]["type"]["name"]);
  typesdiv.append(typee);


}

document.getElementById("poke-desc").innerText=pokedex[this.id]["fact"]



/*let poken = document.getElementById("poke-description");
while(poken.firstChild)
{
poken.firstChild.remove();
}

let pokenamee= document.createElement("div");
pokenamee.innerText='name: '+pokedex[this.id]["name"];

poken.classList.add("poken");
poken.append(pokenamee);

//poken.innerText=pokedex[this.id]["name"];

*/







}



function randpoke()
{
    

let randompokemon = Math.round(Math.random() * 151)
console.log(randompokemon)
displaypokemonn(randompokemon);
}





function displaypokemonn(pokenum)
{


document.getElementById("pokeimg").src = pokedex[pokenum]["img"];

namesdiv = document.getElementById("pokename"); 
while(namesdiv.firstChild)
{
namesdiv.firstChild.remove();
}

let names ='Name: ' + pokedex[pokenum]["name"];
namesdiv.append(names)


 typesdiv = document.getElementById("poke-types")

//removes currnent type if there is one
while(typesdiv.firstChild)
{
typesdiv.firstChild.remove();
}

 types =pokedex[pokenum]["types"];
for(let i=0; i < types.length; i++)
{
   typee = document.createElement("span")  
  typee.innerText=types[i]["type"]["name"].toUpperCase();
 
  typee.classList.add("typecontain")
  typee.classList.add(types[i]["type"]["name"]);
  typesdiv.append(typee);


}

document.getElementById("poke-desc").innerText=pokedex[pokenum]["fact"]



/*let poken = document.getElementById("poke-description");
while(poken.firstChild)
{
poken.firstChild.remove();
}

let pokenamee= document.createElement("div");
pokenamee.innerText='name: '+pokedex[this.id]["name"];

poken.classList.add("poken");
poken.append(pokenamee);

//poken.innerText=pokedex[this.id]["name"];

*/







}

function search()
{
    //console.log( document.getElementById("search").value)
 //checks if its a number   
if (!isNaN(document.getElementById("search").value))
{
numericsearch(document.getElementById("search").value);

}

else{
   // console.log( document.getElementById("search").value)
    stringsearch(document.getElementById("search").value)//.toLowerCase())
}

}

function numericsearch(numsearch)
{
    document.getElementById("pokeimg").src = pokedex[numsearch]["img"];

    namesdiv = document.getElementById("pokename"); 
    while(namesdiv.firstChild)
    {
    namesdiv.firstChild.remove();
    }
    
     names ='Name: ' + pokedex[numsearch]["name"];
    namesdiv.append(names)
    
    
     typesdiv = document.getElementById("poke-types")
    
    //removes currnent type if there is one
    while(typesdiv.firstChild)
    {
    typesdiv.firstChild.remove();
    }
    
     types =pokedex[numsearch]["types"];
    for(let i=0; i < types.length; i++)
    {
       typee = document.createElement("span")  
      typee.innerText=types[i]["type"]["name"].toUpperCase();
     
      typee.classList.add("typecontain")
      typee.classList.add(types[i]["type"]["name"]);
      typesdiv.append(typee);
    
    
    }
    
    document.getElementById("poke-desc").innerText=pokedex[numsearch]["fact"]
    
    



    
}


function stringsearch(ssearch)
{

  let track;
let newssearch = ssearch.toLowerCase();
for (let i =1; i< pokecount; i++)
{


if (ssearch.toLowerCase() == pokedex[i]["name"])
{
    track =i;
     console.log(pokedex[i]["name"])
}

else{
    console.log('no')
}

}


if (!isNaN(track))
{
document.getElementById("pokeimg").src = pokedex[track]["img"];

namesdiv = document.getElementById("pokename"); 
while(namesdiv.firstChild)
{
namesdiv.firstChild.remove();
}

 names ='Name: ' + pokedex[track]["name"];
namesdiv.append(names)


 typesdiv = document.getElementById("poke-types")

//removes currnent type if there is one
while(typesdiv.firstChild)
{
typesdiv.firstChild.remove();
}

 types =pokedex[track]["types"];
for(let i=0; i < types.length; i++)
{
   typee = document.createElement("span")  
  typee.innerText=types[i]["type"]["name"].toUpperCase();
 
  typee.classList.add("typecontain")
  typee.classList.add(types[i]["type"]["name"]);
  typesdiv.append(typee);


}

document.getElementById("poke-desc").innerText=pokedex[track]["fact"]


}

}