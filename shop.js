
const nav=document.querySelector('#navbar');
const drop=document.querySelector('#dropdown');
  drop.addEventListener('click',()=>{
    nav.classList.add('active');
    
})
const cross=document.querySelector('#cross');
cross.addEventListener('click',()=>{
    nav.classList.remove('active');

})
let arr=document.querySelectorAll('.ele');
let i=0;
arr.forEach((ele)=>{
    let obj={};
    if(localStorage.getItem(`${i}`)==undefined){
    obj["id"]=i;
    obj["price"]=ele.querySelector("h4").textContent;
    obj["img"]=ele.querySelector("img").src;
    obj["head"]=ele.querySelector("h5").textContent;
    
    obj["qty"]="0";
    
    localStorage.setItem(`${i}`,JSON.stringify(obj));
    }
    i=(i+1)%16;
 })

        arr.forEach((ele)=>{
            ele.addEventListener("click",()=>{
              
                window.location=`./sproduct/${ele.dataset.id}.html`;

            })
        })
        
  
  