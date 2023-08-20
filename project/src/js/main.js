
(() => {


  const intro = document.querySelector('.showcase-intro');
  const content = document.querySelector('.event_area');
  const imgBg = document.querySelector('.showcase-scroll__img-bg');

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
        if (winH  * .7 > posFromTop ) {
          items[i].classList.add("active");
        }else if(winH < posFromTop){
          items[i].classList.remove("active");
        }
      }
    }
    
    return {
      init: initModule
    }
  }

  const $hour = document.querySelector(".showcase-timer__content-hour");
  const $minute = document.querySelector(".showcase-timer__content-minute");
  const $second = document.querySelector(".showcase-timer__content-second");

  function christmasClock() {
    const today = new Date();
    const year = today.getFullYear();
    const christmas = new Date(`${year}-12-25`);
  
    const untilChristmas = new Date(christmas - today);
    // const day = String(Math.floor(untilChristmas / (1000 * 3600 * 24)));
    const hour = String(
      Math.floor((untilChristmas / (1000 * 3600)) % 24)).padStart(2, "0");
    const minute = String(
      Math.floor((untilChristmas / (1000 * 60)) % 60)).padStart(2, "0");
    const second = String(Math.floor((untilChristmas / 1000) % 60)).padStart(2,"0");
    $hour.innerText = `${hour}`;
    $minute.innerText = `${minute}`;
    $second.innerText = `${second}`;
  }
  
  const $kv = document.querySelector('.main-kv-video')


  window.onload = function(){
    animation().init();
    loadSlider();
    setTimeout(() => {
      content.classList.add("start");
      $kv.play();
     }, "4000");
    setInterval(christmasClock, 1000);
  }
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  function loadSlider (){
    new Swiper(".showcase-full-img__slider", {
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      loop: true,
      speed: 3000,
      allowTouchMove: false,
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
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
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
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
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
      loop: true,
      slidesPerView: 'auto',
      speed: 5000,
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


class CardFlipOnScroll {
  constructor(wrapper, sticky) {
    this.wrapper = wrapper
    this.sticky = sticky
    this.cards = sticky.querySelectorAll('.scroll_img')
    this.length = this.cards.length

    this.start = 0
    this.end = 0
    this.step = 0
  }

  init() {
    this.start = this.wrapper.offsetTop - 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight 
    this.step = (this.end - this.start) / (this.length * 2)
  }

  animate() {
    this.cards.forEach((card, i) => {
      const s = this.start + this.step * i
      const e = s + this.step * (this.length + 1)

      if (scrollY <= s) {
        card.style.opacity = '0'
      } else if (scrollY > s && scrollY <= e - this.step) {
        card.style.opacity = `
              ${ (scrollY - s) / (e - s) }
            `
      } else if (scrollY > e - this.step && scrollY <= e) {
        card.style.opacity = `
              ${(scrollY - s) / (e - s) }
            `
      } else if (scrollY > e) {
        card.style.opacity = `
             1
            `
      }
    })
  }
}

const mainContent1 = document.querySelector('.showcase-scroll')
const sticky = document.querySelector('.showcase-scroll-sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
  cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
  cardFlipOnScroll.init()
})
