(function(){
  "use strict";

  var navbar = document.getElementById("navbar");
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("navMenu");

  window.addEventListener("scroll", function(){
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, {passive:true});

  // Gentle mouse parallax for the hero artwork.
  var heroArt = document.querySelector(".hero-art");
  if (heroArt && window.matchMedia("(pointer:fine)").matches) {
    heroArt.addEventListener("mousemove", function(e){
      var rect = heroArt.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;

      heroArt.style.setProperty("--mx", (x * 10) + "px");
      heroArt.style.setProperty("--my", (y * 10) + "px");

      var mainPhone = heroArt.querySelector(".phone-main");
      var readerPhone = heroArt.querySelector(".phone-reader");

      if (mainPhone) {
        mainPhone.style.marginLeft = (x * 7) + "px";
        mainPhone.style.marginTop = (y * 7) + "px";
      }
      if (readerPhone) {
        readerPhone.style.marginLeft = (x * -5) + "px";
        readerPhone.style.marginTop = (y * -5) + "px";
      }
    });

    heroArt.addEventListener("mouseleave", function(){
      var mainPhone = heroArt.querySelector(".phone-main");
      var readerPhone = heroArt.querySelector(".phone-reader");
      if (mainPhone) {
        mainPhone.style.marginLeft = "";
        mainPhone.style.marginTop = "";
      }
      if (readerPhone) {
        readerPhone.style.marginLeft = "";
        readerPhone.style.marginTop = "";
      }
    });
  }

  menuBtn.addEventListener("click", function(){
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", function(){ nav.classList.remove("open"); });
  });

  // -------------------------------------------------
  // Velith modal
  // -------------------------------------------------
  var modal = document.getElementById("velithModal");
  var close = document.getElementById("modalClose");
  var openers = document.querySelectorAll(".open-velith");

  // CHANGE ONLY THESE TWO VALUES when you have the real links.
  var VELITH_WEB_URL = "/velith";
  var ANDROID_APP_URL = "YOUR_ANDROID_APP_URL";

  document.getElementById("webLink").href = VELITH_WEB_URL;
  document.getElementById("appLink").href = ANDROID_APP_URL;

  function openModal(){
    modal.classList.add("open");
    document.body.classList.add("lock");
    close.focus();
  }

  function closeModal(){
    modal.classList.remove("open");
    document.body.classList.remove("lock");
  }

  openers.forEach(function(button){
    button.addEventListener("click", openModal);
  });

  close.addEventListener("click", closeModal);

  modal.addEventListener("click", function(e){
    if(e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  document.getElementById("appLink").addEventListener("click", function(e){
    if(ANDROID_APP_URL === "YOUR_ANDROID_APP_URL"){
      e.preventDefault();
      alert("Add your Google Play Store or APK link in js/main.js.");
    }
  });

  // -------------------------------------------------
  // Scroll animations
  // -------------------------------------------------
  var elements = document.querySelectorAll(".reveal");

  if("IntersectionObserver" in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.12});

    elements.forEach(function(el){ observer.observe(el); });
  }else{
    elements.forEach(function(el){ el.classList.add("visible"); });
  }
})();