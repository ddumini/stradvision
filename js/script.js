$(function () {
  // 가이드 코딩 이미지 전환
  var $guide = $('.guide');
  var guideLength = $guide.length;

  $guide.on('click', function () {
    if (guideLength === 1) {
      return false;
    }

    var $this = $(this);
    var $idx = $this.index() + 1;

    if ($idx === guideLength) {
      $idx = 0;
    }

    $guide.eq($idx).removeClass('hide');

    $.each($guide, function (idx, ele) {
      $guide.eq($idx).siblings().addClass('hide');
    });
  });
  // ------------------------- common ------------------------
  Splitting();
  document.querySelector('.fade-anim') && fadeAnims();
  document.querySelector('.fade-in') && fadeItems();
  // document.querySelector('.counter') && countingAnim();
  // 새로고침시 페이지 상단으로 이동
  // window.onload = function () {
  //   setTimeout(function () {
  //     scrollTo(0, 0);
  //   }, 100);
  // };
  // ---------------------------- main page --------------------------------
  if (document.querySelector('.main-page')) {
    showMainNews();
    countingAnim();
    mvSlide();
    mainAbout();
    productAnims();
    mainTab();
    mainWithSlide();
    infiniteCarousel({
      trigger: '.box-carousel',
      duration: 7, 
      reverse: true, 
      pauseOnHover: false,
    });
  }
  // ---------------------------- sub page --------------------------------
  if (document.querySelector('.sub-page')) {
  }
  // --------------------- header -------------------------
  const header = document.querySelector('.header');
  let headerHeight = parseFloat(getComputedStyle(header)['height']);
  document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
  window.addEventListener('resize', function () {
    let headerHeight = parseFloat(getComputedStyle(header)['height']);
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
  });
  headerAnim();
  // ------------------------- footer ------------------------

  
  //  ----------------------- functions ----------------------------
  function mvSlide() {
    $('.main-mv__slide').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      fade: true,
    });
    $('.main-mv__slide').slickNav('.item', {
      circle: true,
      circleSize: '24px',
      circleBorder: '1px',
      circleTrack: 'rgba(255, 255, 255, .3)',
      duration: 5000,
    });
  }
  function mainAbout() {
    gsap.to('.main-about__typo figure img', {
      scrollTrigger: {
        trigger: '.main-about__typo',
        // markers: true,
        start: '0, 50%',
      },
      scale: 1,
      duration: 3,
    });
  }
  function fadeItems() {
    gsap.utils.toArray('.fade-in').forEach((ele) => {
      var y;
      var start;
      var delay;
      $(ele).hasClass('deeper') ? (y = 150) : (y = 60);
      $(ele).hasClass('slow') ? (start = '0%, 40%') : (start = '0%, 70%');
      $(ele).hasClass('delay') ? (delay = 0.5) : (delay = 0);

      if (ele.querySelector('.fade-in__ele')) {
        gsap.fromTo(
          ele.querySelectorAll('.fade-in__ele'),
          {
            y: y,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: delay,
            scrollTrigger: {
              trigger: ele,
              markers: false,
              start: start,
            },
          }
        );
      }
      if (ele.querySelector('.fade-in__right')) {
        gsap.fromTo(
          ele.querySelectorAll('.fade-in__right'),
          {
            x: -30,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: ele,
              markers: false,
              start: start,
            },
          }
        );
      }
    });
  }
  function fadeAnims() {
    gsap.utils.toArray('.fade-anim').forEach((ele) => {
      gsap.fromTo(
        ele,
        {
          y: 60,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.7,
          scrollTrigger: {
            trigger: ele,
            markers: false,
            start: '0%, 80%',
          },
        }
      );
    });
  }
  function productAnims() {
    gsap.utils.toArray('.main-product li').forEach((ele) => {
      gsap.fromTo(
        ele,
        {
          y: 120,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ele,
            markers: false,
            start: '0%, 70%',
            toggleActions: 'play play play reverse',
          },
        }
      );
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.main-product',
          start: '-100vh, 0',
          end: '100%, 100%',
          scrub: 1,
        },
      })
      .to('.main-product h2', {
        position: 'fixed',
        top: '200px',
      })
      .to('.main-product h2', {
        opacity: 1,
        duration: 1,
      })
      .to('.main-product h2', {
        color: '#000',
        duration: 2,
      })
      .to('.main-product h2', {
        autoAlpha: 0,
        delay: 4,
        duration: 1,
      });

    gsap.to('.main-product', {
      scrollTrigger: {
        trigger: '.main-technology',
        start: '0, 0',
        end: '+=100%',
        pin: true,
        scrub: 1,
      },
      marginTop: '-100vh',
      duration: 1,
    });
  }
  function showMainNews() {
    gsap.fromTo(
      '.main-news',
      {
        marginTop: '-100%',
      },
      {
        scrollTrigger: {
          trigger: '.main-news',
          start: '100%, 100%',
          end: '+=200%',
          pin: true,
        },
        marginTop: 0,
      }
    );
  }
  function headerAnim() {
    let headerHeight = parseFloat(getComputedStyle(header)['height']);
    let prevY = 0;
    addEventListener('scroll', (e) => {
      const currentY = scrollY;
      currentY > headerHeight + 10 ? header.classList.remove('top') : header.classList.add('top');
      currentY > prevY && currentY > 20 ? header.classList.add('hide') : header.classList.remove('hide');
      prevY = scrollY;
      $('.header').on('mouseleave', function () {
        if (currentY < headerHeight + 10) {
          $('.header').addClass('top');
        } else {
          $('.header').removeClass('top');
        }
      });
    });
    $('.header').on('mouseover', function () {
      $('.header').removeClass('top');
    });
    $('.header').on('mouseleave', function () {
      $('.header').addClass('top');
    });
  }
  function countingAnim() {
    let startCount = { var: 0 };
    let number = document.querySelectorAll('.counter');
    number.forEach((ele) => {
      let countValue = parseInt(ele.dataset.value);
      let duration = 2; 
      if (countValue >= 100 && countValue <= 999) {
          duration = 3; 
      }
      gsap.to(startCount, {
        var: countValue,
        duration: duration,
        ease: 'none',
        onUpdate: changeNumber,
        scrollTrigger: {
          trigger: number,
        },
      });
  
      function changeNumber() {
        ele.innerHTML = startCount.var.toFixed();
      }
    })
  }
  function mainTab() {
    let tabItem = $('.main-tab ul li')
    let tabList = $('.main-with__lists ul')
    tabItem.on('click', function() {
      let tabIdx = $(this).index();
      tabList.eq(tabIdx).addClass('active').siblings().removeClass('active');
      $('.main-tab__bg').stop().animate({'left' : tabIdx * 160 + 5 + tabIdx * 10 + 'px' });
      tabList.eq(tabIdx).slick('unslick').slick({
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
      });
    })
  }
  function mainWithSlide() {
    let withSlide = $('.main-with__lists ul');
    withSlide.each(function(idx, ele) {
      $(ele).slick({
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
      })
    })
  }
  function infiniteCarousel({ trigger, duration, reverse, pauseOnHover }) {
    trigger = document.querySelectorAll(trigger);

    trigger.forEach((trigger) => {
      trigger.style.overflow = 'hidden';
      trigger.style.visibility = 'visible';

      const items = trigger.querySelector('.carousel-items');
      const item = trigger.querySelectorAll('.carousel-item');
      const itemWidthArr = [...item].map((item) => {
        item.style.position = 'absolute';
        return item.clientWidth;
      });
      let totalWidth = 0;

      itemWidthArr.map((width, idx, arr) => {
        if (idx === 0) {
          totalWidth = itemWidthArr[arr.length - 1];
        } else if (arr[idx - 1]) {
          totalWidth = totalWidth + arr[idx - 1];
        }
        gsap.set(item[idx], {
          x: totalWidth,
        });
      });

      items.style.position = 'relative';
      items.style.height = `${item[0].offsetHeight}px`;
      items.style.left = `-${Math.max(...itemWidthArr)}px`;

      const tl = gsap.timeline();
      tl.to(item, duration * item.length, {
        x: () => {
          return reverse ? `-=${totalWidth}` : `+=${totalWidth}`;
        },
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            return reverse ? (x < 0 ? (parseFloat(x) % totalWidth) + totalWidth : x) : parseFloat(x) % totalWidth;
          }),
        },
      });

      if (pauseOnHover) {
        trigger.addEventListener('mouseover', () => {
          tl.pause();
        });

        trigger.addEventListener('mouseleave', () => {
          tl.play();
        });
      }
    });
  }
});
