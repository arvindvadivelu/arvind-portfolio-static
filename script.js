lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

// --- 1. TYPEWRITER EFFECT ---
const titles = ["Software Engineer", "Java Developer", "Full Stack Developer"];
let titleIndex = 0;
const textElement = document.getElementById("typewriter-text");

function cycleText() {
    textElement.style.opacity = '0';
    textElement.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        textElement.innerText = titles[titleIndex];
        textElement.style.opacity = '1';
    }, 500);
}
setInterval(cycleText, 3000);

// --- 2. MOBILE MENU LOGIC ---
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMobileMenu() {
    mobileMenuOverlay.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileMenu() {
    mobileMenuOverlay.classList.add('translate-x-full');
    document.body.style.overflow = ''; // Restore scrolling
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);

// Close menu when clicking a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// --- 3. MODAL DATA & LOGIC ---
const projectsData = {
    'pibcache': {
        title: 'PibCache',
        desc: 'A high-performance predictive caching prediction system built using TCN-Transformers. It predicts which articles will be popular in the next hour and caches them in Redis before traffic spikes. This reduced database load by 40% and improved response times by 200ms.',
        images: [
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&h=400&fit=crop'
        ],
        skills: ['Python', 'TensorFlow', 'Redis', 'Docker', 'FastAPI'],
        github: '#',
        demo: '#'
    },
    'farmiq': {
        title: 'FarmIQ',
        desc: 'Comprehensive backend architecture for agricultural data analysis. Features include robust API endpoints for soil data ingestion, automated schema validation to handle inconsistent sensor data, and optimized SQL queries for generating real-time dashboards.',
        images: [
            'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1625246333195-58197bd47d26?q=80&w=600&h=400&fit=crop'
        ],
        skills: ['Java', 'Spring Boot', 'MySQL', 'Postman', 'Hibernate'],
        github: '#',
        demo: '#'
    }
};

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');

function openModal(id) {
    const data = projectsData[id];
    if (!data) return;

    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-github').href = data.github;
    document.getElementById('modal-demo').href = data.demo;

    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = data.images.map(img =>
        `<img src="${img}" class="h-64 min-w-[300px] object-cover rounded-xl snap-center shadow-md">`
    ).join('');

    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = data.skills.map(skill =>
        `<span class="px-3 py-1 bg-gray-800 rounded-lg text-xs font-bold text-gray-300 border border-gray-700">${skill}</span>`
    ).join('');

    modal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// --- 4. NAV SCROLL HIGHLIGHT ---
const sections = document.querySelectorAll("section, footer#contact");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.remove("nav-active");
                link.classList.remove("text-white");
                link.classList.add("text-gray-400");

                if (link.getAttribute("data-target") === entry.target.id) {
                    link.classList.add("nav-active");
                    link.classList.remove("text-gray-400");
                }
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach((section) => observer.observe(section));

// --- 5. UTILS ---
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    const toast = document.getElementById("toast");
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}

document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const video = wrapper.querySelector('video');
    if (video) {
        wrapper.addEventListener('mouseenter', async () => {
            try { await video.play(); } catch (e) { }
        });
        wrapper.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

// --- SCROLL PROGRESS BAR ---
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + "%";
    }
});

function scrollGallery(elementId, direction) {
    const container = document.getElementById(elementId);
    // NOW SCROLLS FULL WIDTH (100%)
    const scrollAmount = container.clientWidth;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}