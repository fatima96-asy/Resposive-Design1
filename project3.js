// sticky navbar
window.addEventListener('scroll',function(e){
  var header=document.querySelector('header');  
  header.classList.toggle('sticky',scrollY>0);
});
//add class when click at item in nav bar
document.addEventListener('click',function(){
    var navItems=document.querySelector('.home');
    navItems.classList.toggle('radiusItem');
}) 

