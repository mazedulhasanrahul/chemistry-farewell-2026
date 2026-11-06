// ==========================================
// MAIN INITIALIZATION
// ==========================================
// Entry point for the application. Initializes all modules when DOM is ready.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI & Content
    uiModule.init();

    // 2. Start Countdown Timer
    countdownModule.init();

    // 3. Setup Registration Form Logic
    formModule.init();

    // 4. Initialize Participants & Statistics
    participantsModule.init();

    // 5. Initialize Gallery
    galleryModule.init();

    console.log("Chemistry Farewell 2026 - All modules initialized successfully.");
});