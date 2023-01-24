           const toggleButton = document.getElementsByClassName('button_pop')[0]
           const navbarLinks = document.getElementsByClassName('image__overlay')[0]
           const toggleButoon2 = document.getElementsByClassName('active')
           
           const toggleButton2 = document.getElementsByClassName('button_mobile1')[0]
           const navbarLinks3 = document.getElementsByClassName('img_overlay2')[0]
           const toggleButoon22 = document.getElementsByClassName('active')
           
           const toggleButton1 = document.getElementsByClassName('button_mobile2')[0]
           const navbarLinks2 = document.getElementsByClassName('img_overlay3')[0]
           const toggleButoon21 = document.getElementsByClassName('active')
           
           const toggleButtonM = document.getElementsByClassName('toggle-button')[0]
           const navbarLinksM = document.getElementsByClassName('navbar-links')[0]

            toggleButtonM.addEventListener('click', () => {
              navbarLinksM.classList.toggle('active')
            })
           
           toggleButton.addEventListener('click', () => {
                navbarLinks.classList.toggle('active')
            })
          
            navbarLinks.addEventListener('click', () => {
                navbarLinks.classList.remove('active')
            })
        
            toggleButton1.addEventListener('click', () => {
                navbarLinks2.classList.toggle('active')
            })
          
            navbarLinks2.addEventListener('click', () => {
                navbarLinks2.classList.remove('active')
            })
        
            toggleButton2.addEventListener('click', () => {
                navbarLinks3.classList.toggle('active')
            })
          
            navbarLinks3.addEventListener('click', () => {
                navbarLinks3.classList.remove('active')
            })
        
            window.addEventListener('scroll', function(){
                var header = document.querySelector("nav");
                header.classList.toggle("sticky", window.scrollY > 0 );
            })
        