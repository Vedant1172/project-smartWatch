
document.addEventListener("DOMContentLoaded", () => {
  
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            if (link.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 60,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

 
    const revealElements = document.querySelectorAll("section, .blog-card, .footer-box");
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

  
    const loginBtn = document.querySelector(".cart-info span:first-child");
    const signInBtn = document.querySelector(".cart-info span:last-child");
    let modal;

    function openModal(type) {
        modal = document.createElement("div");
        modal.classList.add("modal-overlay");
        modal.innerHTML = `
            <div class="modal-box">
                <h2>${type === "login" ? "Log In" : "Sign In"}</h2>
                <form id="authForm">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">${type === "login" ? "Log In" : "Sign Up"}</button>
                </form>
                <button class="modal-close">Close</button>
            </div>
        `;
        document.body.appendChild(modal);

        
        modal.querySelector(".modal-close").addEventListener("click", () => modal.remove());
        modal.addEventListener("click", e => { if (e.target === modal) modal.remove(); });

        
        const form = modal.querySelector("#authForm");
        form.addEventListener("submit", e => {
            e.preventDefault();
            const email = form.querySelector("input[type='email']").value.trim();
            const pass = form.querySelector("input[type='password']").value.trim();
            if (!email.includes("@") || pass.length < 4) {
                alert("❌ Please enter a valid email and a password with at least 4 characters.");
            } else {
                alert(`✅ ${type === "login" ? "Logged in" : "Signed up"} successfully!`);
                modal.remove();
            }
        });
    }

    if (loginBtn) loginBtn.addEventListener("click", () => openModal("login"));
    if (signInBtn) signInBtn.addEventListener("click", () => openModal("signin"));


    const footer = document.querySelector(".footer");
    if (footer) {
        const year = new Date().getFullYear();
        const yearElement = document.createElement("p");
        yearElement.style.textAlign = "center";
        yearElement.style.marginTop = "20px";
        yearElement.innerHTML = `&copy; ${year} VEDANT. All Rights Reserved.`;
        footer.appendChild(yearElement);
    }
});


const style = document.createElement("style");
style.textContent = `

document.head.appendChild(style);
