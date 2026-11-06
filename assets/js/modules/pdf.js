// ==========================================
// PDF MODULE
// ==========================================
// Generates a clean, tabular PDF of verified participants.

const pdfModule = {
    downloadPDF: function() {
        const verified = participantsData.filter(p => p.verified);

        if (verified.length === 0) {
            alert("No verified participants available to download.");
            return;
        }

        // 1. Create a hidden container for the PDF content
        const element = document.createElement('div');
        element.style.padding = '20px';
        element.style.fontFamily = 'Inter, sans-serif';
        element.style.color = '#0f172a'; // brand-navy

        // 2. Build the HTML structure
        let html = `
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #d4af37; padding-bottom: 20px;">
                <h1 style="font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 5px;">${CONFIG.event.title}</h1>
                <h2 style="font-size: 16px; margin-bottom: 5px; font-weight: normal;">${CONFIG.event.institution} | Session: ${CONFIG.event.session}</h2>
                <p style="font-size: 12px; color: #64748b;">Event Date: ${CONFIG.event.date} | Total Verified: ${verified.length}</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 12px; text-align: left;">
                <thead>
                    <tr style="background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;">
                        <th style="padding: 10px; border: 1px solid #e2e8f0;">S/N</th>
                        <th style="padding: 10px; border: 1px solid #e2e8f0;">Name</th>
                        <th style="padding: 10px; border: 1px solid #e2e8f0;">Roll</th>
                        <th style="padding: 10px; border: 1px solid #e2e8f0;">T-Shirt</th>
                        <th style="padding: 10px; border: 1px solid #e2e8f0;">Traditional Dress</th>
                    </tr>
                </thead>
                <tbody>
        `;

        verified.forEach((p, index) => {
            const dressInfo = p.dressType === 'Panjabi' ?
                `Panjabi (${p.traditionalDressSize})` :
                p.dressType;

            html += `
                <tr style="border-bottom: 1px solid #e2e8f0;">
                    <td style="padding: 8px; border: 1px solid #e2e8f0;">${(index + 1).toString().padStart(3, '0')}</td>
                    <td style="padding: 8px; border: 1px solid #e2e8f0; font-weight: bold;">${p.name}</td>
                    <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.roll}</td>
                    <td style="padding: 8px; border: 1px solid #e2e8f0;">${p.tshirtSize}</td>
                    <td style="padding: 8px; border: 1px solid #e2e8f0;">${dressInfo}</td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
            
            <div style="margin-top: 40px; font-size: 10px; color: #94a3b8; text-align: center;">
                Generated from the official Farewell 2026 Registration Portal.<br>
                Organizing Committee - Chemistry (${CONFIG.event.session})
            </div>
        `;

        element.innerHTML = html;

        // 3. Configure html2pdf options
        const opt = {
            margin: 10,
            filename: 'Farewell_2026_Participants.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // 4. Generate and download
        // We use html2pdf() promise to let user know it's working
        const btn = document.querySelector('button[onclick="pdfModule.downloadPDF()"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generating...`;

        html2pdf().set(opt).from(element).save().then(() => {
            btn.innerHTML = `<i class="fa-solid fa-check"></i> Downloaded!`;
            setTimeout(() => { btn.innerHTML = originalText; }, 2000);
        });
    }
};