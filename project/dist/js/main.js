
(() => {

  const showCaseElems = document.querySelectorAll('.showcase');
  let itemList = showCaseElems[0];
  let ioIndex;

  const io = new IntersectionObserver((enteries, observer) => {
    ioIndex = enteries[0].target.dataset.index * 1;
  })

  for (let i = 0; i < showCaseElems.length; i++){
    io.observe(showCaseElems[i]);
    showCaseElems[i].dataset.index = i;
  };

  function acitvate (){
    itemList.classList.add('motion');
  }

  function inacitvate (){
    itemList.classList.remove('motion');
  }


  window.addEventListener('scroll', () => {
    let step;
    let scrollAcition;

    for (let i = ioIndex - 1; i < ioIndex +2; i++){
      step = showCaseElems[i];
      if (!step) continue;
      scrollAcition = step.getBoundingClientRect();
      if (scrollAcition.top > window.innerHeight * 0.1 && scrollAcition.top < window.innerHeight * 0.8){
        inacitvate();
        itemList = showCaseElems[step.dataset.index];
        acitvate();
      }
    };
  });



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