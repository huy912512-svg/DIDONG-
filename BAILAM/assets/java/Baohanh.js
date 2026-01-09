
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("bannerJs");

    if (!banner) return;

    let hoverTimer = null;
    let isPinned = false; 

    /* ===== HOVER DESKTOP ===== */
    banner.addEventListener("mouseenter", () => {
        if (isPinned) return;

        clearTimeout(hoverTimer);
        banner.classList.add("active");
    });

    banner.addEventListener("mouseleave", () => {
        if (isPinned) return;

        hoverTimer = setTimeout(() => {
            banner.classList.remove("active");
        }, 200); // Delay 200ms cho mượt
    });

    /* ===== CLICK (DESKTOP + MOBILE) ===== */
    banner.addEventListener("click", () => {
        isPinned = !isPinned;

        if (isPinned) {
            banner.classList.add("active");
        } else {
            banner.classList.remove("active");
        }
    });
    banner.addEventListener("touchstart", () => {
        banner.classList.add("active");
    });

    banner.addEventListener("touchend", () => {
        setTimeout(() => {
            if (!isPinned) {
                banner.classList.remove("active");
            }
        }, 300);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("bannerJs");
    if (!banner) return;

    // Delay nhẹ cho sang
    setTimeout(() => {
        banner.classList.add("show-left");
    }, 200);
});
banner.addEventListener("mousemove", e => {
    const rect = banner.getBoundingClientRect();
    banner.style.setProperty("--x", `${e.clientX - rect.left}px`);
    banner.style.setProperty("--y", `${e.clientY - rect.top}px`);
});

