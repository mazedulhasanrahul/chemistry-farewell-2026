// ==========================================
// GALLERY MODULE
// ==========================================
// Handles dynamic rendering of gallery grid and lightbox functionality.

const galleryModule = {
    currentIndex: 0,

    init: function() {
        this.renderGrid();

        // Keyboard navigation for lightbox
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightbox').classList.contains('hidden')) return;
            if (e.key === 'Escape') this.closeLightbox();
            if (e.key === 'ArrowRight') this.nextImage();
            if (e.key === 'ArrowLeft') this.prevImage();
        });
    },

    renderGrid: function() {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;

        let html = '';
        galleryData.forEach((img, index) => {
            html += `
                <div class="relative group overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow" onclick="galleryModule.openLightbox(${index})">
                    <img src="${img.src}" alt="${img.alt}" class="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
                    <div class="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <i class="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = html;
    },

    openLightbox: function(index) {
        this.currentIndex = index;
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');

        img.src = galleryData[index].src;
        img.alt = galleryData[index].alt;

        lightbox.classList.remove('hidden');
        setTimeout(() => {
            lightbox.classList.remove('opacity-0');
            img.classList.remove('scale-95');
        }, 10);
    },

    closeLightbox: function() {
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');

        lightbox.classList.add('opacity-0');
        img.classList.add('scale-95');

        setTimeout(() => {
            lightbox.classList.add('hidden');
        }, 300);
    },

    nextImage: function() {
        this.currentIndex = (this.currentIndex + 1) % galleryData.length;
        this.updateLightboxImage();
    },

    prevImage: function() {
        this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
        this.updateLightboxImage();
    },

    updateLightboxImage: function() {
        const img = document.getElementById('lightbox-img');
        // Simple fade effect during change
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = galleryData[this.currentIndex].src;
            img.alt = galleryData[this.currentIndex].alt;
            img.style.opacity = 1;
        }, 200);
    }
};