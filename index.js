  const cards = document.querySelectorAll('.servicemaincard');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // viewport pe aate hi animate hoga
        observer.unobserve(entry.target);   // ek hi baar chalega
      }
    });
  }, { threshold: 0.2 }); // 20% visible hone par trigger

  cards.forEach(card => observer.observe(card));