// ==========================================
// FORM & REGISTRATION MODULE (UPDATED WITH API INTEGRATION)
// ==========================================

const formModule = {
    currentStep: 1,
    totalSteps: 4,
    calculatedAmount: 0,
    selectedFile: null, // To store the actual file for ImgBB

    init: function() {
        this.checkDeadline();
        this.setupbKashCards();
        this.setupEventListeners();
        this.handleDressChange();

        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init(CONFIG.apiKeys.emailjs.publicKey);
        } else {
            console.error("EmailJS SDK not loaded.");
        }
    },

    checkDeadline: function() {
        const notice = document.getElementById('deadline-notice');
        if (!CONFIG.registration.isOpen) {
            this.disableForm("Registration is temporarily closed by the organizers.");
            return;
        }
        const deadline = new Date(CONFIG.registration.deadline).getTime();
        const now = new Date().getTime();

        if (now > deadline) {
            this.disableForm("The registration deadline has passed.");
        } else {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            notice.innerHTML = `<i class="fa-solid fa-circle-exclamation mr-1"></i> Deadline: ${new Date(CONFIG.registration.deadline).toLocaleDateString('en-US', options)}`;
        }
    },

    disableForm: function(message) {
        document.getElementById('deadline-notice').innerHTML = `<i class="fa-solid fa-lock mr-1"></i> ${message}`;
        document.getElementById('deadline-notice').classList.replace('bg-red-100', 'bg-gray-200');
        document.getElementById('deadline-notice').classList.replace('text-red-700', 'text-gray-700');

        const formOverlay = document.createElement('div');
        formOverlay.className = "absolute inset-0 bg-white/80 backdrop-blur-sm z-30 flex items-center justify-center rounded-2xl";
        formOverlay.innerHTML = `<div class="bg-white px-8 py-6 rounded-xl shadow-xl border border-gray-200 text-center max-w-md">
            <i class="fa-solid fa-hourglass-end text-4xl text-gray-400 mb-4"></i>
            <h3 class="text-xl font-bold text-brand-navy mb-2">Registration Closed</h3>
            <p class="text-gray-600">${message}</p>
        </div>`;
        document.getElementById('form-container').appendChild(formOverlay);
    },

    setupbKashCards: function() {
        const container = document.getElementById('bkash-cards-container');
        const select = document.getElementById('reg-receiver-number');
        if (!container || !select) return;

        let cardsHtml = '';
        let optionsHtml = '<option value="" disabled selected>Select the number you sent money to</option>';

        CONFIG.payment.recipients.forEach(recipient => {
            cardsHtml += `
                <div class="bg-pink-50 border border-pink-200 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                   <img src="assets/images/ui/bkash-logo.png" alt="bKash" class="h-8 mb-3 object-contain">
                    <div class="text-sm text-gray-600 font-medium mb-1">${recipient.name}'s Number (Personal)</div>
                    <div class="text-xl font-bold text-brand-darkpink mb-3 tracking-wide">${recipient.number}</div>
                    <button type="button" onclick="formModule.copyNumber('${recipient.number}', this)" class="bg-white border border-pink-300 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        <i class="fa-regular fa-copy"></i> Copy Number
                    </button>
                </div>
            `;
            optionsHtml += `<option value="${recipient.number}">${recipient.name} - ${recipient.number}</option>`;
        });
        container.innerHTML = cardsHtml;
        select.innerHTML = optionsHtml;
    },

    copyNumber: function(number, btnElement) {
        navigator.clipboard.writeText(number).then(() => {
            const originalText = btnElement.innerHTML;
            btnElement.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
            btnElement.classList.add('bg-green-500', 'text-white', 'border-green-500');
            setTimeout(() => {
                btnElement.innerHTML = originalText;
                btnElement.classList.remove('bg-green-500', 'text-white', 'border-green-500');
            }, 2000);
        });
    },

    setupEventListeners: function() {
        document.getElementById('btn-next').addEventListener('click', () => this.nextStep());
        document.getElementById('btn-prev').addEventListener('click', () => this.prevStep());

        document.getElementById('reg-screenshot').addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 1024 * 1024) {
                    alert("File size exceeds 1MB. Please upload a smaller image.");
                    e.target.value = "";
                    this.selectedFile = null;
                    return;
                }
                this.selectedFile = file;
            }
        });

        document.getElementById('registration-form').addEventListener('submit', (e) => this.submitForm(e));
    },

    handleDressChange: function() {
        const dressType = document.querySelector('input[name="traditional_dress"]:checked').value;
        const panjabiSizeContainer = document.getElementById('panjabi-size-container');
        const panjabiSelect = document.getElementById('reg-panjabi-size');

        if (dressType === 'Panjabi') {
            panjabiSizeContainer.classList.remove('hidden');
            panjabiSelect.required = true;
            this.calculatedAmount = CONFIG.registration.fees.withTraditionalDress;
        } else {
            panjabiSizeContainer.classList.add('hidden');
            panjabiSelect.required = false;
            panjabiSelect.value = "";
            this.calculatedAmount = dressType === 'Saree' ? CONFIG.registration.fees.withTraditionalDress : CONFIG.registration.fees.withoutTraditionalDress;
        }
        document.getElementById('calculated-amount').innerText = `BDT ${this.calculatedAmount}`;
    },

    validateCurrentStep: function() {
        const stepElement = document.getElementById(`step-${this.currentStep}`);
        const inputs = stepElement.querySelectorAll('input[required], select[required]');

        let isValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.reportValidity();
                isValid = false;
            }
        });

        if (this.currentStep === 1) {
            const phone = document.getElementById('reg-phone').value;
            if (phone && !/^01[3-9]\d{8}$/.test(phone)) {
                alert("Please enter a valid 11-digit Bangladesh mobile number.");
                isValid = false;
            }
        }
        return isValid;
    },

    nextStep: function() {
        if (!this.validateCurrentStep()) return;
        if (this.currentStep < this.totalSteps) {
            document.getElementById(`step-${this.currentStep}`).classList.remove('active');
            document.getElementById(`step-${this.currentStep}`).classList.add('hidden');
            this.currentStep++;
            document.getElementById(`step-${this.currentStep}`).classList.remove('hidden');
            setTimeout(() => { document.getElementById(`step-${this.currentStep}`).classList.add('active'); }, 10);
            this.updateUI();
            if (this.currentStep === this.totalSteps) this.populateReview();
        }
    },

    prevStep: function() {
        if (this.currentStep > 1) {
            document.getElementById(`step-${this.currentStep}`).classList.remove('active');
            document.getElementById(`step-${this.currentStep}`).classList.add('hidden');
            this.currentStep--;
            document.getElementById(`step-${this.currentStep}`).classList.remove('hidden');
            setTimeout(() => { document.getElementById(`step-${this.currentStep}`).classList.add('active'); }, 10);
            this.updateUI();
        }
    },

    updateUI: function() {
        document.getElementById('btn-prev').classList.toggle('hidden', this.currentStep === 1);
        document.getElementById('btn-next').classList.toggle('hidden', this.currentStep === this.totalSteps);
        document.getElementById('btn-submit').classList.toggle('hidden', this.currentStep !== this.totalSteps);

        const progress = ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;

        const indicators = document.querySelectorAll('.step-indicator');
        indicators.forEach((ind, index) => {
            if (index < this.currentStep) {
                ind.classList.add('active');
                ind.querySelector('div').className = "w-10 h-10 rounded-full flex items-center justify-center bg-brand-gold text-brand-navy font-bold border-4 border-white transition-colors duration-300";
                ind.querySelector('span').className = "text-xs md:text-sm font-medium text-brand-navy transition-colors duration-300";
            } else {
                ind.classList.remove('active');
                ind.querySelector('div').className = "w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-500 font-bold border-4 border-white transition-colors duration-300";
                ind.querySelector('span').className = "text-xs md:text-sm font-medium text-gray-400 transition-colors duration-300";
            }
        });
    },

    populateReview: function() {
        document.getElementById('rev-name').innerText = document.getElementById('reg-name').value;
        document.getElementById('rev-roll').innerText = document.getElementById('reg-roll').value;
        document.getElementById('rev-phone').innerText = document.getElementById('reg-phone').value;
        document.getElementById('rev-email').innerText = document.getElementById('reg-email').value;

        const dressType = document.querySelector('input[name="traditional_dress"]:checked').value;
        const panjabiSize = document.getElementById('reg-panjabi-size').value;
        document.getElementById('rev-tshirt').innerText = document.getElementById('reg-tshirt-size').value;
        document.getElementById('rev-dress').innerText = dressType === 'Panjabi' ? `Panjabi (Size: ${panjabiSize})` : dressType;

        const receiver = document.getElementById('reg-receiver-number');
        document.getElementById('rev-amount').innerText = `BDT ${this.calculatedAmount}`;
        document.getElementById('rev-receiver').innerText = receiver.options[receiver.selectedIndex].text;
        document.getElementById('rev-sender').innerText = document.getElementById('reg-sender-number').value;
        document.getElementById('rev-trxid').innerText = document.getElementById('reg-trxid').value;
    },

    // --------------------------------------------------------
    // SUBMIT FORM WORKFLOW: ImgBB -> Admin Email -> Student Email
    // --------------------------------------------------------
    submitForm: async function(e) {
        const submitBtn = document.getElementById('btn-submit');
        submitBtn.disabled = true;

        if (!this.selectedFile) {
            alert("Please upload a payment screenshot.");
            submitBtn.disabled = false;
            return;
        }

        // Prepare EmailJS Parameters
        const dressType = document.querySelector('input[name="traditional_dress"]:checked').value;
        const panjabiSize = document.getElementById('reg-panjabi-size').value;
        const finalDressStr = dressType === 'Panjabi' ? `Panjabi (Size: ${panjabiSize})` : dressType;

        const templateParams = {
            name: document.getElementById('reg-name').value,
            roll: document.getElementById('reg-roll').value,
            phone: document.getElementById('reg-phone').value,
            email: document.getElementById('reg-email').value,
            tshirt_size: document.getElementById('reg-tshirt-size').value,
            traditional_dress: finalDressStr,
            amount: this.calculatedAmount,
            receiver_number: document.getElementById('reg-receiver-number').value,
            sender_number: document.getElementById('reg-sender-number').value,
            trxid: document.getElementById('reg-trxid').value.toUpperCase(),
            screenshot_url: "Pending Upload..."
        };

        try {
            // STEP 1: Upload Image to ImgBB
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Uploading Image...`;
            const formData = new FormData();
            formData.append('image', this.selectedFile);

            const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${CONFIG.apiKeys.imgbb}`, {
                method: 'POST',
                body: formData
            });
            const imgbbData = await imgbbResponse.json();

            if (!imgbbData.success) {
                throw new Error("Image upload failed. Please try again.");
            }

            // Successfully got the image URL
            templateParams.screenshot_url = imgbbData.data.url;

            // STEP 2: Send Admin Notification via EmailJS
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending to Admin...`;
            await emailjs.send(
                CONFIG.apiKeys.emailjs.serviceId,
                CONFIG.apiKeys.emailjs.adminTemplateId,
                templateParams
            );

            // STEP 3: Send Student Confirmation via EmailJS
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Confirmation...`;
            try {
                await emailjs.send(
                    CONFIG.apiKeys.emailjs.serviceId,
                    CONFIG.apiKeys.emailjs.studentTemplateId,
                    templateParams
                );
                this.showSuccess(false); // Fully successful
            } catch (studentEmailError) {
                console.error("Student email failed, but Admin email succeeded:", studentEmailError);
                this.showSuccess(true); // Partial success flag
            }

        } catch (error) {
            console.error("Form Submission Error:", error);
            alert("An error occurred during submission: " + error.message + "\nPlease try again.");
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Submit Registration</span> <i class="fa-solid fa-paper-plane"></i>`;
        }
    },

    showSuccess: function(isPartial) {
        const successDiv = document.getElementById('form-success');
        successDiv.classList.remove('hidden');
        document.getElementById('registration-form').classList.add('hidden');

        if (isPartial) {
            // Honest handling of partial failure
            const messageEl = successDiv.querySelector('p:nth-of-type(2)');
            messageEl.innerHTML = `<span class="text-red-500 font-medium">Notice:</span> Your registration was received by the admin, but we failed to send the confirmation email to your inbox. Do not worry, your data is safe and awaiting verification.`;
        }
    }
};