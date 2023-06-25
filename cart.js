
var rv=undefined;
window.addEventListener("DOMContentLoaded",()=>{
    console.log("hi");
    removechild();
    console.log("hi");
    addchild();
    console.log('ji');
    rv=Array.from(document.querySelectorAll("#totals .items button"));
    console.log(rv);
    for(let i=0;i<rv.length;i++){
   
        ele=rv[i];
       ele.addEventListener("click",(e)=>{
        console.log("hi");
       let ids= e.target.parentElement.dataset.id;
       e.target.parentElement.remove();
       let obj=localStorage.getItem(`${ids}`);
       obj=JSON.parse(obj);
       obj.qty="0";
       localStorage.setItem(`${ids}`,JSON.stringify(obj));
       totalvalue();
       })
    }
    let inp =Array.from(document.querySelectorAll("#totals .items input"));
    
    inp.forEach((ele)=>{
        ele.addEventListener("change",(e)=>{
            console.log("click");
            let ids=e.target.parentElement.dataset.id;
            let obj=localStorage.getItem(`${ids}`);
         obj=JSON.parse(obj);
         obj.qty=e.target.value;
        localStorage.setItem(`${ids}`,JSON.stringify(obj));
         let qqq=Number.parseInt(obj.qty);
            let ppp=obj.price.replace('$','');
            ppp=Number.parseFloat(ppp);
            let val=ppp*qqq;
            e.target.nextElementSibling.textContent="$"+`${val}`
            totalvalue();
        })
    })

})
function removechild(){
    let chi=document.querySelector("#totals .items").children;
    for(let i=0;i<chi.length;i++){
        chi[i].remove();
    }
    totalvalue();
}
function addchild(){
    let parent=document.querySelector("#totals .items")
    for(let i=0;i<16;i++){
        let ele=localStorage.getItem(`${i}`);
        ele=JSON.parse(ele);
        console.log(ele);
        if(ele.qty>0){
            console.log("true");
            
            let div=document.createElement('div');
            div.setAttribute('data-id',ele.id);
           
            let img=document.createElement('img');
            img.src=ele.img;
            div.appendChild(img);
            let pri=document.createElement('p');
            pri.innerText=ele.price;
            div.appendChild(pri);
            let qt=document.createElement('INPUT');
            qt.setAttribute("type","number");
            qt.value=ele.qty;
            
            div.appendChild(qt);
            
            div.classList.add("divstyle");
            
            let d=document.createElement('p');
            let qqq=Number.parseInt(ele.qty);
            let ppp=ele.price.replace('$','');
            ppp=Number.parseFloat(ppp);
            let val=ppp*qqq;
            d.textContent="$"+`${val}`
            div.appendChild(d);
            let btn=document.createElement('button');
            btn.innerText="Remove";
            div.appendChild(btn);
           parent.appendChild(div);
           
        }
    }
    totalvalue();
}
function totalvalue(){
    let ans=0;
    for(let i=0;i<16;i++){
        let ele=localStorage.getItem(`${i}`);
        ele=JSON.parse(ele);
        let qqq=Number.parseInt(ele.qty);
            let ppp=ele.price.replace('$','');
            ppp=Number.parseFloat(ppp);
            let val=ppp*qqq;
            ans+=val;
    }
    document.querySelector("#totals .totalval").innerHTML="     Total Value= $"+`${ans}`
}


