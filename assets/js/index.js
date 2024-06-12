AOS.init({
  once: true
})

// nav handler
const menu_btn = document.querySelector('nav .menu');
const links = document.querySelector('nav ul');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
    document.body.classList.toggle('no_scroll') 
})
 
links.addEventListener('click', (e) => { 
  if (e.target.tagName === 'A') { 
    menu_btn.classList.remove('active')
    links.classList.remove('active')
    document.body.classList.remove('no_scroll')
  } 
})


// contract 
document.addEventListener('DOMContentLoaded', function() {
  
  let light_left = document.querySelector('.light_left');
  let light_right = document.querySelector('.light_right');
  let backgroundContract = document.querySelector('.backgroundContract');

  const copyContractBtns = document.querySelectorAll('.copy-contract');
  
  copyContractBtns.forEach(copyContractBtn => {
      copyContractBtn.addEventListener('click', function() { 
        
      let copiedMessage = copyContractBtn.querySelector('.copied');
      let contractInput = copyContractBtn.querySelector('.contractInput');
      let movingColor_container = copyContractBtn.querySelector('.moving-color_container');

        contractInput.select();
        document.execCommand('copy');
    
        // Tampilkan pesan terkopikan
        copiedMessage.classList.add('flex')
        copiedMessage.classList.remove('hidden');

        
        // movingColor_container.classList.add('hidden')
        // light_left.src = './assets/images/light_off_left.png'
        // light_right.src = './assets/images/light_off_right.png'
     
        setTimeout(function() {
          copiedMessage.classList.remove('flex')
          copiedMessage.classList.add('hidden')
        }, 2000);
      });
  })
     
    // JavaScript untuk mengganti gambar
  const imagesLeft = [
      './assets/images/light_off_left.png',
      './assets/images/light_on_left.png', 
  ];

  const imagesRight = [
    './assets/images/light_off_right.png',
    './assets/images/light_on_right.png', 
  ];

  let currentIndex = 0;
  let currentIndex2 = 0;
  let elseTrue = false;

  function changeImageLeft() { 
      currentIndex = (currentIndex + 1) % imagesLeft.length;
      light_left.src = imagesLeft[currentIndex];
  }

  function changeImageRight() { 
    currentIndex2 = (currentIndex2 + 1) % imagesRight.length;
    light_right.src = imagesRight[currentIndex2];
  }

  function bgContract() { 
    elseTrue = !elseTrue
    if(elseTrue === false){
      backgroundContract.classList.add('hidden')
    } else {
      backgroundContract.classList.remove('hidden')
    }
  }

  setInterval(changeImageLeft, 2000);
  setInterval(changeImageRight, 2000);
  setInterval(bgContract, 2000);


  });




// controller ScrollMagic
let controller = new ScrollMagic.Controller();

// animation scroll effect
const animations = [
  { selector: ".biden_container", duration: 7000, x: -200 },
  { selector: ".plan._1", duration: 10000, x: -100 },
  { selector: ".plan._2", duration: 10000, x: 50 },
  { selector: ".plan._3", duration: 10000, x: 50 },
  { selector: ".plan._4", duration: 10000, x: -100 },
  { selector: ".image_plan1", duration: 11000, x: -100 },
  { selector: ".image_plan2", duration: 11000, x: 100 },
  { selector: ".image_plan3", duration: 11000, x: 100 },
  { selector: ".image_plan4", duration: 11000, x: -100 },
  { selector: ".text_footer", duration: 11000, x: -100 },
  { selector: ".footer_image", duration: 6000, x: -100 },
  { selector: ".trump_biden", duration: 5000, x: 300 },
  { selector: ".jet", duration: 5000, x: 500, y: -50, rotate: -60 }, 
  // { selector: ".og_image", duration: 5000,  y: 300 }, 
];





function adjustXValue() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1200) { 
    animations.forEach(animation => {
      if (animation.hasOwnProperty('x')) {  
        animation.x = animation.x * 4;
      }
      if (animation.hasOwnProperty('y')) { 
        animation.y = animation.y * 2;
      }
      if (animation.hasOwnProperty('rotate')) { // Adjust rotate value if it exists
        animation.rotate = animation.rotate; // Adjust as needed, here it's kept same
      }
    });
  }
}

adjustXValue();
window.addEventListener('resize', adjustXValue);

animations.forEach(animation => {
  // Create the tween object with conditionals for `y`
  var tweenParams = { duration: 300, x: animation.x };
  if (animation.hasOwnProperty('x')) {
    tweenParams.x = animation.x;
  }
  if (animation.hasOwnProperty('y')) {
    tweenParams.y = animation.y;
  }
  if (animation.hasOwnProperty('rotate')) {
    tweenParams.rotate = animation.rotate;
  }
  
  var tween = gsap.to(animation.selector, tweenParams);

  var scene = new ScrollMagic.Scene({
    triggerElement: animation.selector,
    duration: animation.duration
  })
  .setTween(tween)
  .addTo(controller);
});





// function adjustXValue() {
//   const screenWidth = window.innerWidth;
//   if (screenWidth > 1200) { 
//     animations.forEach(animation => {
//       animation.x = animation.x * 4; 
//     });
//   }
// }
 
// adjustXValue();
// window.addEventListener('resize', adjustXValue);



// var tween1, tween2,tween3;

// animations.forEach(animation => {
//   var tween = gsap.to(animation.selector, {duration: 300, x: animation.x});

//   var scene = new ScrollMagic.Scene({
//     triggerElement: animation.selector,
//     duration: animation.duration
//   })
//   .setTween(tween)
//   .addTo(controller);
// });
