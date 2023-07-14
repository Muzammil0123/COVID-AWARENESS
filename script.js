const nav=document.querySelector('#navbar');
const drop=document.querySelector('#dropdown');
  drop.addEventListener('click',()=>{
    nav.classList.add('active');
    
})
const cross=document.querySelector('#cross');
cross.addEventListener('click',()=>{
    nav.classList.remove('active');

})
