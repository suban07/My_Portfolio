
    const menuToggle = document.getElementById('menuToggle');
    const navLinkElements = document.querySelectorAll('.nav-links a');
      const navLinks = document.getElementById('navLinks');
  

menuToggle.addEventListener('click',()=>{
      navLinks.classList.toggle(`show`);
    
      if(navLinks.classList.contains(`show`))
        {
    menuToggle.innerHTML = '&times;';
     }
     else{
        menuToggle.innerHTML = '&#9776;';
     }


});

document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        console.log(e.target);
        navLinks.classList.remove('show');
        menuToggle.innerHTML = '&#9776;';
      }
    });


        const text = "Aspiring Web Developer";
        let index = 0;
        const typingText = document.getElementById("typingText");

        function type() {
        if (index < text.length) {
            typingText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 200);
        }
        }
        typingText.textContent = "";
       type();

       window.addEventListener('load',()=>{
        AOS.init();
       });