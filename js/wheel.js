/* document.addEventListener("DOMContentLoaded", ()=>{

    const smoothScroll = document.getElementById("smoothScroll");
    const sections = [...document.querySelectorAll('section')];
    const buttons = [...document.querySelectorAll('#position button')];

   
    smoothScroll.addEventListener('scroll', ()=>{        
        let x = 0;
        buttons.forEach ((i, j) => {
            if (i.classList.contains('active') ) {  
                x = j;
                x++;
                i.classList.remove('active');
            };            
            buttons[x].classList.add('active');
        });        
    });    
}); */

/* document.addEventListener("DOMContentLoaded", () => {
    const smoothScroll = document.getElementById("smoothScroll");
    const buttons = [...document.querySelectorAll('#position button')];    
    let x = 0; 

        smoothScroll.addEventListener('wheel', e => {
                      
        Math.round(e.deltaY);
        console.log((Math.round(e.deltaY))); 
        //휠을 한번 내렸을 때, 이동하는 수직 픽셀 수 (130.6666717529297)
        //휠을 한번 올렸을 때, 이동하는 수직 필셀 수 (-130.6666717529297)

        if (Math.round(e.deltaY) > 0) { //내릴때
            //x = Math.min(x + 1, buttons.length - 1);
            x++;
            if (x >= buttons.length) {
                x = 3;
            }
            console.log (x);

        } else if (Math.round(e.deltaY) < 0) { //올릴때        
            //x = Math.max(x - 1, 0);
            x--;  
            if (x <= 0) {
                x = 0;
            }
            console.log (x);
        }
        
        buttons.forEach((i, j) => {
            if (j === x) {
                i.classList.add('active');
            } else {
                i.classList.remove('active');
            }
        });            
    
        const sections = document.querySelectorAll('section')[x];
        sections.scrollIntoView({ behavior: "smooth", block:"start" });     
    });    
}); */

/* document.addEventListener("DOMContentLoaded", () => {

    const smoothScroll = document.getElementById("smoothScroll");
    const buttons = [...document.querySelectorAll('#position button')];
    const sections = document.querySelectorAll("#smoothScroll section");

    let x = 0;
    let Scroll = false;   */     

    /* buttons.forEach((i, j) => {
        i.addEventListener("click", () => {
            // 클릭된 버튼을 활성화            
            buttons.forEach((m, n) => {
                //m.classList.toggle('active', n == j);
                
                //if ( n === j) {
                //    m.classList.add('active');
                //} else {
                //    m.classList.remove('active');
                //}

                ( n === j) ? m.classList.add('active') : m.classList.remove('active');
            });            
            const sections = document.querySelectorAll('section')[j];
            sections.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }); */

/*     smoothScroll.addEventListener('wheel', e => {
        e.preventDefault();

        if (Scroll) return;

        Scroll = true;
        setTimeout(() => { Scroll = false; }, 1000);

        const delta = Math.round(e.deltaY);

        if (delta > 0) { 
            x++;
            if (x >= buttons.length) {
                x = buttons.length - 1;
            }

        } else if (delta < 0) { 
            x--;
            if (x < 0) {
                x = 0;
            }
        };
        console.log (x);

        buttons.forEach((i, j) => {
                
            if (j === x) {
                i.classList.add('active');
            } else {
                i.classList.remove('active');
            }  
        });           
        
        scene( x );
    });

    buttons.forEach( (i, k) => {

        i.addEventListener("click", e => {              

            const delta = Math.round(e.deltaY);

            if (delta > 0) { 
            x++;
            if (x >= buttons.length) {
                x = buttons.length - 1;
            }

            } else if (delta < 0) { 
            x--;
            if (x < 0) {
                x = 0;
            }
        };
            console.log (x);

            buttons.forEach( j=> {
                j.classList.remove('active');
            });            
            e.target.classList.add('active');   

            x = k;

            scene(k);
            //sections[k].scrollIntoView({ behavior: "smooth" , block: "start" });           
        });
    });  

    const scene = (z) => {
        const sections = document.querySelectorAll('section')[z];
        sections.scrollIntoView({ behavior: "smooth", block: "start" });
    };        
}); */

document.addEventListener("DOMContentLoaded", () => {
    const smoothScroll = document.getElementById("smoothScroll");
    const buttons = [...document.querySelectorAll('#position button')];
    const sections = document.querySelectorAll("#smoothScroll section");

    let x = 0;
    let Scroll = false;
    let touchStartY = 0;
    let touchEndY = 0;

    //휠 이벤트 처리부분
    smoothScroll.addEventListener('wheel', e => {
        e.preventDefault();
        if (Scroll) return;

        Scroll = true;
        setTimeout(() => { Scroll = false; }, 1000);

        const delta = Math.round(e.deltaY);

        if (delta > 0) { 
            x++;
            if (x >= buttons.length) x = buttons.length - 1;
        } else if (delta < 0) { 
            x--;
            if (x < 0) x = 0;
        }

        console.log(x);

        buttons.forEach((i, j) => {

            if (j === x) {
                i.classList.add('active');
            } else {
                i.classList.remove('active');
            }
            //i.classList.toggle('active', j === x);
        });

        scene(x);
    });

    //버튼 클릭 이벤트 처리 부분
    buttons.forEach((i, k) => {
        i.addEventListener("click", e => {
            buttons.forEach(j => j.classList.remove('active'));
            e.target.classList.add('active');
            x = k;
            scene(k);
        });
    });

    //터치 이벤트 처리 부분
    smoothScroll.addEventListener("touchstart", e => {
        touchStartY = e.touches[0].clientY;
    });

        console.log(touchStartY);

    smoothScroll.addEventListener("touchend", e => {
        touchEndY = e.changedTouches[0].clientY;

        console.log(touchEndY);

        const deltaY = touchStartY - touchEndY;

        console.log(deltaY);
        if (Math.abs(deltaY) < 30) return;

        if (deltaY > 0) { 
            x++;
            if (x >= buttons.length) x = buttons.length - 1;

        } else if (deltaY < 0) { 
            x--;
            if (x < 0) x = 0;
        }

        buttons.forEach((i, j) => {
            if (j === x) {
                i.classList.add('active')
            } else {
                i.classList.remove('active')
            }

            //i.classList.toggle('active', j === x);
        });

        scene(x);
    });

    const scene = (z) => {
        const sections = document.querySelectorAll('section')[z];
        sections.scrollIntoView({ behavior: "smooth", block: "start" });
    };
});







