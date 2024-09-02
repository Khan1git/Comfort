window.addEventListener('load', () => {
    alert('This is just a demo version. I can create a full application using the MERN STACK. This is just a design; check it out. I designed it fully by myself.');
    
    const confirm = window.confirm('Tell me even if you don t like it. I spent an entire day on this');
    
    if (confirm) {
        return; 
    } else {
        alert('Why not?');  
    }
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); 
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  