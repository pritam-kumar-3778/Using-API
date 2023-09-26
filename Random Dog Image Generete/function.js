let url = "https://dog.ceo/api/breeds/image/random"; //random Dog image generate API

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let link = await getImages();
    console.log(link);

    let image = document.querySelector("img");
    image.setAttribute("src", link);
})

async function getImages(){
    try{
       let result = await axios.get(url);
       return result.data.message;
} catch(e){
    console.log("Error is : ",e);
    return "No Image found";
}
}
getfacts();
