document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader-wrapper');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});
document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-level');
    const animateSkills = () => {
        skills.forEach(skill => {
            const targetWidth = skill.style.width;
            skill.style.width = '0';
            setTimeout(() => {
                skill.style.width = targetWidth;
            }, 100);
        });
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) observer.observe(skillsSection);
});
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out'
    });
});