table=document.getElementById("tablee")
Api_url="https://fakestoreapi.com/products"


function updateDom(data){
    data.forEach(x=>{
        console.log(x);
        trow=document.createElement("tr")
         trow.innerHTML=`<td>${x.id}</td>
                          <td>${x.description}</td>
                          <td>${x.price}</td>
                          <td><img src='${x.image}'></td>  `
        table.appendChild(trow)
    })
}

async function get(){
    response=await fetch(Api_url)
    result=await response.json()
    updateDom(result)
    
}
get()