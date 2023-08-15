
(() => {

  // const showCaseElems = document.querySelectorAll('.showcase');
  // let itemList = showCaseElems[0];
  // let windowHeight = window.innerHeight;
  // let ioIndex;
  // const io = new IntersectionObserver((enteries, observer) => {
  //   ioIndex = enteries[0].target.dataset.index * 1;
  // })

  // for (let i = 0; i < showCaseElems.length; i++){
  //   io.observe(showCaseElems[i]);
  //   showCaseElems[i].dataset.index = i;
  // };

  // function acitvate (){
  //   itemList.classList.add('active');
  // }

  // function inacitvate (){
  //   itemList.classList.remove('active');
  // }


  // window.addEventListener('scroll', () => {
  //   let step;
  //   let scrollAcition;
  //   console.log(window.scrollY + window.innerHeight);
  //   for (let i = 0; i < showCaseElems.length; i++){
  //     step = showCaseElems[i];
  //     if (!step) continue;
  //     scrollAcition = step.getBoundingClientRect().top;
  //     if (scrollAcition < windowHeight){
  //       itemList = showCaseElems[step.dataset.index];
  //       acitvate();
  //     }else {
  //       inacitvate();
  //     }
  //   };
  // });


  // class CardFlipOnScroll {
  //   constructor(wrapper, sticky) {
  //     this.wrapper = wrapper
  //     this.sticky = sticky
  //     this.cards = sticky.querySelectorAll('.card')
  //     this.length = this.cards.length
  
  //     this.start = 0
  //     this.end = 0
  //     this.step = 0
  //   }
  
  //   init() {
  //     this.start = this.wrapper.offsetTop - 100
  //     this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
  //     this.step = (this.end - this.start) / (this.length * 2)
  //   }
  
  //   animate() {
  //     this.cards.forEach((card, i) => {
  //       const s = this.start + this.step * i
  //       const e = s + this.step * (this.length + 1)
  
  //       if (scrollY <= s) {
  //         card.style.transform = `
  //               perspective(100vw)
  //               translateX(100vw) 
  //               rotateY(180deg)
  //             `
  //       } else if (scrollY > s && scrollY <= e - this.step) {
  //         card.style.transform = `
  //               perspective(100vw)
  //               translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
  //               rotateY(180deg)
  //             `
  //       } else if (scrollY > e - this.step && scrollY <= e) {
  //         card.style.transform = `
  //               perspective(100vw)
  //               translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
  //               rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
  //             `
  //       } else if (scrollY > e) {
  //         card.style.transform = `
  //               perspective(100vw)
  //               translateX(0vw) 
  //               rotateY(0deg)
  //             `
  //       }
  //     })
  //   }
  // }
  
  // const mainContent1 = document.querySelector('.main-content-1')
  // const sticky = document.querySelector('.sticky')
  // const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
  // cardFlipOnScroll.init()
  
  // window.addEventListener('scroll', () => {
  //   cardFlipOnScroll.animate()
  // })
  
  // window.addEventListener('resize', () => {
  //   cardFlipOnScroll.init()
  // })



  var animation = function () {
    var items, winH;
    
    var initModule = function () {
      items = document.querySelectorAll(".showcase");
      winH = window.innerHeight;
      _addEventHandlers();
    }
    
    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };
    
    var _checkPosition = function () {
      for (var i = 0; i < items.length; i++) {
        var posFromTop = items[i].getBoundingClientRect().top;
        if (winH > posFromTop) {
          items[i].classList.add("active");
        }else{
          items[i].classList.remove("active");
        }
      }
    }
    
    return {
      init: initModule
    }
  }
    
  window.onload = function(){
    animation().init();
    loadSlider();
  }
  window.onbeforeunload = function () {
    // window.scrollTo(0, 0);
  }

function loadSlider (){
  new Swiper(".showcase-full-img__slider", {
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

  new Swiper(".showcase-fade-in__slider", {
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
  

  new Swiper(".showcase-fade-in__slider", {
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

  new Swiper(".showcase-progressbar__slider", {
    freeMode: true,
    slidesPerView: 'auto',
    pagination: {
      el: ".pagination_progress",
      type: "progressbar",
    },
  });

  new Swiper(".showcase-free__slider", {
    freeMode: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 4000,
    slideToClickedSlide: false,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
    }
  });

  new Swiper(".showcase-benefit-event__slider", {
    freeMode: true,
    slidesPerView: 'auto',
    pagination: {
      el: ".pagination_progress",
      type: "progressbar",
    },
  });

  new Swiper(".showcase-designer__silder", {
    freeMode: true,
    slidesPerView: 'auto',
  
  });

  new Swiper(".showcase-new-item-type03", {
    loop: true,
    speed: 800,
    slideToClickedSlide: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,      
    }
  });

  new Swiper(".showcase-progressbar-type02__slider", {
    freeMode: true,
    slidesPerView: 'auto',
    pagination: {
      el: ".pagination_progress",
      type: "progressbar",
    },
  });


}
 

})();
