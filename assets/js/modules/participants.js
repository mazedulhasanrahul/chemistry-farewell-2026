// ==========================================
// PARTICIPANTS MODULE
// ==========================================
// Handles verified members rendering, statistics calculation, and search.

const participantsModule = {
    init: function() {
        this.calculateStats();
        this.renderParticipants(participantsData);
        this.setupSearch();
    },

    calculateStats: function() {
        const verified = participantsData.filter(p => p.verified);

        let totalAmount = 0;
        let panjabiCount = 0;
        let sareeCount = 0;

        verified.forEach(p => {
            totalAmount += p.amountPaid;
            if (p.dressType === 'Panjabi') panjabiCount++;
            if (p.dressType === 'Saree') sareeCount++;
        });

        // Update DOM
        document.getElementById('stat-total').innerText = verified.length;
        document.getElementById('stat-amount').innerText = `৳${totalAmount}`;
        document.getElementById('stat-panjabi').innerText = panjabiCount;
        document.getElementById('stat-saree').innerText = sareeCount;
    },

    renderParticipants: function(data) {
        const grid = document.getElementById('participants-grid');
        const noResults = document.getElementById('no-results');
        if (!grid) return;

        const verified = data.filter(p => p.verified);

        if (verified.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');
        let html = '';

        verified.forEach((p, index) => {
            // Determine badge color based on dress
            let badgeHtml = '';
            if (p.dressType === 'Panjabi') {
                badgeHtml = `<span class="bg-red-100 text-red-700 text-xs px-2 py-1 rounded font-medium">Panjabi (${p.traditionalDressSize})</span>`;
            } else if (p.dressType === 'Saree') {
                badgeHtml = `<span class="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded font-medium">Saree</span>`;
            } else {
                badgeHtml = `<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium">No Traditional</span>`;
            }

            html += `
                <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div class="absolute top-0 right-0 bg-brand-gold text-brand-navy font-bold text-xs px-3 py-1 rounded-bl-lg z-10">
                        #${(index + 1).toString().padStart(3, '0')}
                    </div>
                    
                    <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 mx-auto border-2 border-brand-pink text-brand-navy text-2xl">
                        <i class="fa-solid fa-user-graduate"></i>
                    </div>
                    
                    <div class="text-center">
                        <h4 class="font-bold text-brand-navy text-lg mb-1 truncate" title="${p.name}">${p.name}</h4>
                        <p class="text-gray-500 text-sm mb-3">Roll: <span class="font-medium text-gray-800">${p.roll}</span></p>
                        
                        <div class="flex flex-wrap justify-center gap-2 mt-4">
                            <span class="bg-brand-navy/10 text-brand-navy text-xs px-2 py-1 rounded font-medium border border-brand-navy/20">T-Shirt: ${p.tshirtSize}</span>
                            ${badgeHtml}
                        </div>
                    </div>
                    
                    <!-- Verified Badge -->
                    <div class="mt-5 pt-3 border-t border-gray-100 flex justify-center items-center gap-1 text-green-600 text-xs font-semibold">
                        <i class="fa-solid fa-circle-check"></i> Payment Verified
                    </div>
                </div>
            `;
        });

        grid.innerHTML = html;
    },

    setupSearch: function() {
        const searchInput = document.getElementById('search-participant');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = participantsData.filter(p =>
                p.verified &&
                (p.name.toLowerCase().includes(term) || p.roll.toString().includes(term))
            );
            this.renderParticipants(filtered);
        });
    }
};