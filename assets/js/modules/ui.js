// ==========================================
// UI MODULE
// ==========================================
// Handles Navbar, Mobile Menu, Dynamic Rendering of Schedule, FAQ, and Config text.

const uiModule = {
    init: function() {
        this.setupNavbar();
        this.populateEventInfo();
        this.renderSchedule();
        this.renderFAQ();
    },

    setupNavbar: function() {
        const navbar = document.getElementById('navbar');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Scroll Effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('bg-white/80', 'bg-white');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('bg-white', 'bg-white/80');
            }
        });

        // Mobile Menu Toggle
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.replace('fa-xmark', 'fa-bars');
            } else {
                icon.classList.replace('fa-bars', 'fa-xmark');
            }
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            });
        });
    },

    populateEventInfo: function() {
        // Hero Section
        document.getElementById('hero-date').innerText = `${CONFIG.event.date} | ${CONFIG.event.institution}`;
        document.getElementById('hero-tagline').innerText = `"${CONFIG.event.tagline}"`;
        document.getElementById('hero-poster').src = CONFIG.images.poster;

        // Dress Images
        document.getElementById('img-tshirt').src = CONFIG.images.dresses.tshirt;
        document.getElementById('img-panjabi').src = CONFIG.images.dresses.panjabi;
        document.getElementById('img-saree').src = CONFIG.images.dresses.saree;

        // Footer Social & Contact Links
        document.getElementById('footer-email').href = `mailto:${CONFIG.social.email}`;
        document.getElementById('link-fb-group').href = CONFIG.social.facebookGroup;
        document.getElementById('link-fb-page').href = CONFIG.social.facebookPage;
        document.getElementById('link-location').href = CONFIG.social.location;
    },

    renderSchedule: function() {
        const container = document.getElementById('schedule-container');
        if (!container) return;

        let html = '';
        eventSchedule.forEach((item, index) => {
            html += `
                <div class="relative pl-8 md:pl-0 mb-8 md:flex items-center justify-center group w-full">
                    <!-- Mobile Line Dot -->
                    <div class="md:hidden absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                    
                    <!-- Desktop Layout (Alternating) -->
                    <div class="hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12 order-2'}">
                        <div class="text-xl font-bold text-brand-navy">${item.title}</div>
                        <div class="text-brand-pink font-semibold mt-1 mb-2">${item.time}</div>
                        <p class="text-gray-600 text-sm">${item.description}</p>
                    </div>
                    
                    <!-- Desktop Center Dot -->
                    <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-md z-10 group-hover:scale-125 transition-transform duration-300"></div>
                    
                    <!-- Desktop Center Line -->
                    <div class="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 bottom-[-40px] w-0.5 bg-gray-200 -z-0"></div>
                    
                    <!-- Mobile Layout -->
                    <div class="md:hidden bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm ml-4">
                        <div class="text-brand-pink font-semibold text-sm mb-1">${item.time}</div>
                        <div class="text-lg font-bold text-brand-navy mb-2">${item.title}</div>
                        <p class="text-gray-600 text-sm">${item.description}</p>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    renderFAQ: function() {
        const container = document.getElementById('faq-container');
        if (!container) return;

        let html = '';
        faqData.forEach((faq, index) => {
            html += `
                <div class="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300">
                    <button class="w-full text-left px-6 py-4 font-semibold text-brand-navy flex justify-between items-center focus:outline-none bg-gray-50 hover:bg-gray-100 transition-colors" onclick="uiModule.toggleFAQ(${index})">
                        <span>${faq.question}</span>
                        <i id="faq-icon-${index}" class="fa-solid fa-chevron-down text-brand-gold transition-transform duration-300"></i>
                    </button>
                    <div id="faq-answer-${index}" class="px-6 py-0 max-h-0 overflow-hidden transition-all duration-300 text-gray-600 text-sm">
                        <div class="py-4 border-t border-gray-100">
                            ${faq.answer}
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    },

    toggleFAQ: function(index) {
        const answer = document.getElementById(`faq-answer-${index}`);
        const icon = document.getElementById(`faq-icon-${index}`);

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    },

    // Dress Size Chart Modal
    openSizeChart: function(type) {
        const modal = document.getElementById('size-modal');
        const modalContent = document.getElementById('size-modal-content');
        const modalImg = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');

        modalImg.src = CONFIG.images.sizeCharts[type];
        modalTitle.innerText = type.charAt(0).toUpperCase() + type.slice(1) + " Size Chart";

        modal.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
    },

    closeSizeChart: function() {
        const modal = document.getElementById('size-modal');
        const modalContent = document.getElementById('size-modal-content');

        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');

        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Matches the duration-300 class
    }
};