const nav=document.querySelector('#navbar');
const drop=document.querySelector('#dropdown');
  drop.addEventListener('click',()=>{
    nav.classList.add('active');
    
})
const cross=document.querySelector('#cross');
cross.addEventListener('click',()=>{
    nav.classList.remove('active');

})
let arr=Array.from(document.querySelectorAll(".smallimg img"));
      console.log(arr);
      arr.forEach((ele)=>{

        ele.addEventListener("click",()=>{
            
            bigmg.setAttribute("src",ele.getAttribute("src"));
        })
      })
      let btn=document.querySelector(".des button");
      let inp=document.querySelector(".des input");
      btn.addEventListener("click",()=>{
          let ids=document.querySelector(".bigimg").dataset.id;
          console.log(ids);
          let pr=localStorage.getItem(ids);
          pr=JSON.parse(pr);
          pr.qty=inp.value;
          localStorage.setItem(`${ids}`,JSON.stringify(pr));
          console.log(localStorage);
      })
    