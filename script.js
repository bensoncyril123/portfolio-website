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

// ── ANIMATE BIO PARAGRAPHS ON SCROLL ──
const bioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("bio-visible");
      bioObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".bio-chunk").forEach(el => bioObserver.observe(el));

// ── ANIMATE SKILL ITEMS ON SCROLL ──
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("skill-visible");
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".article-container article").forEach(el => skillObserver.observe(el));

// ── ANIMATE TIMELINE ITEMS ON SCROLL ──
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("timeline-visible");
      timelineObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".timeline-item").forEach(el => timelineObserver.observe(el));

// ── ANIMATE PROJECT CARDS ON SCROLL ──
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("project-visible");
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll("#projects .about-containers").forEach(el => projectObserver.observe(el));
