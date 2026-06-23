// ── ANCHOR NAV WITHOUT CHANGING THE URL ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

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

// ── ANIMATE CERTIFICATION CARDS ON SCROLL ──
const certObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cert-visible");
      certObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".cert-card").forEach(el => certObserver.observe(el));

// ── CONTACT FAB + MODAL ──
(function () {
  const fab = document.getElementById("contactFabBtn");
  const overlay = document.getElementById("contactModalOverlay");
  const closeBtn = document.getElementById("contactModalClose");
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactFormStatus");
  if (!fab || !overlay || !form) return;

  function openModal() {
    overlay.classList.add("open");
    fab.classList.add("open");
  }
  function closeModal() {
    overlay.classList.remove("open");
    fab.classList.remove("open");
  }

  fab.addEventListener("click", () => {
    overlay.classList.contains("open") ? closeModal() : openModal();
  });
  closeBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector(".contact-form-submit");
    submitBtn.disabled = true;
    status.textContent = "Sending...";
    status.className = "contact-form-status";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        status.textContent = "Message sent — thanks! I'll reply by email.";
        status.className = "contact-form-status success";
        form.reset();
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      status.textContent = "Something went wrong. Please email me directly instead.";
      status.className = "contact-form-status error";
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
