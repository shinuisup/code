
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
    console.log(window.scrollY + window.innerHeight);
    for (let i = 0; i < showCaseElems.length; i++){
      step = showCaseElems[i];
      if (!step) continue;
      scrollAcition = step.getBoundingClientRect();
      if (step.offsetTop < window.scrollY + window.innerHeight){
        itemList = showCaseElems[step.dataset.index];
        acitvate();
      }
    };
  });


var swiper = new Swiper(".showcase-main-kv__slider", {
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

var swiper = new Swiper(".showcase-fade-in__slider", {
  observer: true,
  observeParents: true,
  slidesPerView: 'auto',
  effect: "fade",
  loop: true,
  speed: 800,
  allowTouchMove: false,
  disableOnInteraction: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  }
});

})();
  
