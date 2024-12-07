document.addEventListener("DOMContentLoaded", () => {
    
    const scrollToTopButton = document.createElement("button");
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.style.position = "fixed";
    scrollToTopButton.style.bottom = "20px";
    scrollToTopButton.style.right = "20px";
    scrollToTopButton.style.padding = "10px 15px";
    scrollToTopButton.style.background = "#333";
    scrollToTopButton.style.color = "#fff";
    scrollToTopButton.style.border = "none";
    scrollToTopButton.style.borderRadius = "50%";
    scrollToTopButton.style.display = "none";
    scrollToTopButton.style.cursor = "pointer";
    document.body.appendChild(scrollToTopButton);

    window.addEventListener("scroll", () => {
        scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", event => {
            event.preventDefault();
            const targetId = anchor.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach(element => observer.observe(element));
});



document.querySelectorAll("[data-tooltip]").forEach(item => {
    item.addEventListener("mouseover", (event) => {
        const tooltip = document.createElement("div");
        tooltip.textContent = item.getAttribute("data-tooltip");
        tooltip.style.position = "absolute";
        tooltip.style.background = "#333";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.zIndex = "1000";
        tooltip.classList.add("tooltip");
        document.body.appendChild(tooltip);

        item.addEventListener("mousemove", (e) => {
            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.left = `${e.pageX + 10}px`;
        });

        item.addEventListener("mouseout", () => {
            tooltip.remove();
        });
    });
});
