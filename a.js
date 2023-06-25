
const x=()=>{
    const d=new Date();
    hour.textContent=d.getHours();
    minutes.textContent=d.getMinutes();
    seconds.textContent=d.getSeconds();
}
let a=setInterval(x,1000);