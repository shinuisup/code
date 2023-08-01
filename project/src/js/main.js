
(() => {
   function active(){

    
   }
})();
  
var swiper = new Swiper(".mySwiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    disableOnInteraction: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
});