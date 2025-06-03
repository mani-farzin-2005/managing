
const appearingElements = document.querySelectorAll('.hidden-on-load');

const showing = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.6 // 60% of element must be visible
});

// Observe each matching element
appearingElements.forEach(el => showing.observe(el));

const target = document.querySelector('.detector');
 const targett = document.querySelector('.hero');

 var x = 0;
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (x==0){
            $('.album').addClass('show');
            x+=1;
        }

        $('#company').removeClass('position-fixed');

      }
    });
  }, {
    threshold: 0.5 // 50% of element must be visible
  });
    const observerr = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (window.innerWidth>600){

            $('#company').addClass('position-fixed');
        }
      }
    });
  }, {
    threshold: 0.5 // 50% of element must be visible
  });

  observer.observe(target);
  observerr.observe(targett);


