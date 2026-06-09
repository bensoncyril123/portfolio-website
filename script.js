function toggleMenu() {
  const overlay = document.getElementById("overlayMenu");
  const icon = document.querySelector(".hamburger-icon");
  overlay.classList.toggle("open");
  icon.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

// ── SCROLL FADE-IN ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// ── STAGGER SKILL ITEMS ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll("article").forEach((item, i) => {
        setTimeout(() => item.classList.add("skill-visible"), i * 60);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".article-container").forEach(el => skillObserver.observe(el));
