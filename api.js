let apiKey = "r1BXDJXwpF+ZK4TjpRIMqQ==B3LDDu51xgivWtj1";
let factor = document.getElementById("fact");
let check = document.getElementById("check");
let url = "https://api.api-ninjas.com/v1/facts?limit=1";

let options = {
    method: "GET",  
    headers: { "X-Api-Key": `${apiKey}`}
}
const generate=()=>{
    let factor = document.getElementById("fact");
    fetch(url, options)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        factor.innerHTML= data[0].fact;
    }
    )
}
check.addEventListener("click" , generate);
