let url = "https://catfact.ninja/fact"; //Random cat fact generate API

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let fectDisplay = await getfacts();
    console.log(fectDisplay);

    let p = document.querySelector("p");
    p.innerText = fectDisplay;
})

async function getfacts(){
    try{
       let result = await axios.get(url);
        return result.data.fact;
} catch(e){
    console.log("Error is : ",e);
    return "No fact found";
}
}
getfacts();
