import "./book-animation.css"

export const BookAnimation = () => {
    const header = document.getElementById('header');
    const home = document.getElementById('home-main');
    const homeLeft = document.getElementById('home-left');
    const homeRight = document.getElementById('home-right');
    const contacts = document.getElementById('contact-form');
    const bookTop = document.getElementById('book-top');
    const bookBottom = document.getElementById('book-bottom');
    const media = window.matchMedia("(max-width: 1000px)");
    const duration = 500;
    
    const openAnimation = () => {
        if (media.matches) { 
            openBookMobile();
            keepOpenMobile();
            setTimeout(() => {removeAnimMobile()}, duration);    
        } else {  
            // Animate
            document.getElementById('home').scrollIntoView();

            homeLeft.classList.add('animate-left');
            homeRight.classList.add('animate-right');
            bookTop.classList.add('animate-top');
            bookBottom.classList.add('animate-bottom');
        
            // Keep in place
            homeLeft.classList.add('keep-left');
            homeRight.classList.add('keep-right');
        
            // Remove animation
            setTimeout(() => {
                homeLeft.classList.remove('animate-left');
                homeRight.classList.remove('animate-right');
                bookTop.classList.remove('animate-top');
                bookBottom.classList.remove('animate-bottom');
            }, duration);       
        }
        }

    const closeAnimation = () => {
        if (media.matches) { 
            // Reverse Animation
            header.classList.add('animate-reverse-mobile');
            home.classList.add('animate-reverse-mobile');
            contacts.classList.add('animate-reverse-mobile');
            bookTop.classList.add('animate-top-reverse-mobile');
            bookBottom.classList.add('animate-bottom-reverse-mobile');
            
            // Keep closed
            setTimeout(() => {
                header.classList.remove('keep-mobile');
                home.classList.remove('keep-mobile');
                contacts.classList.remove('keep-mobile');
            },duration);
                
            // Remove Animation
            setTimeout(() => {
                header.classList.remove('animate-reverse-mobile');
                home.classList.remove('animate-reverse-mobile');
                contacts.classList.remove('animate-reverse-mobile');
                bookTop.classList.remove('animate-top-reverse-mobile');
                bookBottom.classList.remove('animate-bottom-reverse-mobile');
            },duration);
        } else {
            // Reverse Animation
            homeLeft.classList.add('animate-left-reverse');
            homeRight.classList.add('animate-right-reverse');
            bookTop.classList.add('animate-top-reverse');
            bookBottom.classList.add('animate-bottom-reverse');
            
            // Keep closed
            setTimeout(() => {
                homeLeft.classList.remove('keep-left');
                homeRight.classList.remove('keep-right');
            },duration);
                
            // Remove Animation
            setTimeout(() => {
                homeLeft.classList.remove('animate-left-reverse');
                homeRight.classList.remove('animate-right-reverse');
                bookTop.classList.remove('animate-top-reverse');
                bookBottom.classList.remove('animate-bottom-reverse');
            },duration);
        }
    }

    const openBookMobile = () => {
        header.classList.add('animate-mobile');
        home.classList.add('animate-mobile');
        contacts.classList.add('animate-mobile');
        bookTop.classList.add('animate-top-mobile');
        bookBottom.classList.add('animate-bottom-mobile');
    };
    const keepOpenMobile = () => {
        header.classList.add('keep-mobile');
        home.classList.add('keep-mobile');
        contacts.classList.add('keep-mobile');
    };
    const removeAnimMobile = () => {
        header.classList.remove('animate-mobile');
        home.classList.remove('animate-mobile');
        contacts.classList.remove('animate-mobile');
        bookTop.classList.remove('animate-top-mobile');
        bookBottom.classList.remove('animate-bottom-mobile');
    };
 
    return {
        openAnimation, closeAnimation, duration
    }
};