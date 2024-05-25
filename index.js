
// so the main thing come here that locomotive with gsap doesn't work then we have to search for locomotive codepen and copy all the js code

function loccomotive(){
 
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
   
}

loccomotive(); 

function cursor(){
  var cursor = document.querySelector(".cursor")
  var main = document.querySelector("#main")
  main.addEventListener("mousemove", function(details) {
       gsap.to(cursor , {
            left:  details.x + 20 +"px", 
            top: details.y+ 20 +"px", 

       })
  })  
}

cursor();

var cursor = document.querySelector(".cursor")
var video = document.querySelector("#page1 video");
video.addEventListener("mouseenter", function(event){
  gsap.to(cursor, {
    width:"120px",
    height:"30px", 
    borderRadius:"20px"
  })
})

video.addEventListener("mouseleave", function(event){
  gsap.to(cursor, {
      width: "10px", 
      height:"10px", 
  })
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1", 
        scroller:"#main", 
        start:"top 30%", 
        end:"top 0", 
        scrub:3,
    }
})

tl.to("#page1 h1", {
    x: -100
},"second")

tl.to("#page1 h2",{
    x:100
},"second")

tl.to("#page1 video",{
    width:"90%"
},"second")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1", 
      scroller:"#main", 
      start:"top -150px", 
      end:"top -130",
      scrub:3,
  }
})

tl2.to("#main", {
  backgroundColor:"#ffff",
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1", 
      scroller:"#main", 
      start:"top -280%", 
      end:"top -300%", 
      markers:true, 
      scrub:3,
  }
})

tl3.to("#main", {
      backgroundColor:"#0F0D0D",
})

var boxes = document.querySelectorAll(".box");    
boxes.forEach( (elem ) => {
   elem.addEventListener('mouseenter' , () => { 
    
    var att = elem.getAttribute("data-img") 

      gsap.to(cursor , {
        width: '300px', 
        height: '250px', 
        ease: "power1", 
        mixBlendMode: 'normal', 
        objectFit: 'cover',  
      })
      cursor.style.backgroundImage = `url(${att})`;
   }) 

   elem.addEventListener('mouseleave' , () => {
      elem.style.backgroundColor = 'transparent'
        gsap.to(cursor , {
          width: '20px', 
          height: '20px',
        })
        cursor.style.backgroundImage = `url(${""})`
   })
})






 