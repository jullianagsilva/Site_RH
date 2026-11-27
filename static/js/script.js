// -------------------------------------------------------------
// SCRIPT.JS - VERSÃO PREMIUM
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // Scroll suave para links do menu
  // -----------------------------
  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if(targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -----------------------------
  // Accordion aprimorado
  // -----------------------------
  const accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const body = item.querySelector(".accordion-body");
    const arrow = item.querySelector(".arrow");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      accordions.forEach(acc => {
        acc.classList.remove("active");
        const accBody = acc.querySelector(".accordion-body");
        const accArrow = acc.querySelector(".arrow");
        accBody.style.maxHeight = null;
        accBody.style.padding = "0 16px";
        accArrow.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        item.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px";
        body.style.padding = "16px";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });

  // -----------------------------
  // Formulário de contato
  // -----------------------------
  const form = document.getElementById("contato-form");
  const feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          feedback.textContent = "✅ Mensagem enviada com sucesso!";
          feedback.style.color = "green";
          feedback.style.display = "block";
          form.reset();
        } else {
          throw new Error("Falha no envio");
        }
      } catch (error) {
        feedback.textContent = "❌ Ocorreu um erro. Tente novamente.";
        feedback.style.color = "red";
        feedback.style.display = "block";
      }
    });
  }

  // -----------------------------
  // Animação premium de fade + slide
  // -----------------------------
  const scrollElements = document.querySelectorAll('header, .profile, .card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 150; // cascata suave
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  scrollElements.forEach(el => observer.observe(el));

});
