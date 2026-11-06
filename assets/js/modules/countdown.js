// ==========================================
// COUNTDOWN MODULE
// ==========================================
// Calculates time remaining based on CONFIG.event.date and time.

const countdownModule = {
    interval: null,

    init: function() {
        this.startTimer();
    },

    startTimer: function() {
        // Construct standard parsable date string from config
        // Example: "17 November 2026 11:00:00"
        const eventDateString = `${CONFIG.event.date} ${CONFIG.event.startTime}`;
        const targetDate = new Date(eventDateString).getTime();
        const container = document.getElementById('countdown-container');

        if (isNaN(targetDate)) {
            console.error("Invalid Date Format in config.js");
            container.innerHTML = `<p class="text-white font-medium">Date configuration error.</p>`;
            return;
        }

        this.interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference < 0) {
                clearInterval(this.interval);
                container.innerHTML = `
                    <div class="bg-brand-pink/20 border border-brand-pink text-white px-8 py-4 rounded-xl text-xl font-bold tracking-wider uppercase">
                        The Event Has Started!
                    </div>
                `;
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Format numbers to always be 2 digits
            const formatTime = (time) => time < 10 ? `0${time}` : time;

            container.innerHTML = `
                <div class="flex gap-3 sm:gap-4 lg:gap-6 text-center">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg">
                            ${formatTime(days)}
                        </div>
                        <span class="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wide">Days</span>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg">
                            ${formatTime(hours)}
                        </div>
                        <span class="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wide">Hours</span>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold text-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            ${formatTime(minutes)}
                        </div>
                        <span class="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wide">Minutes</span>
                    </div>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-lg">
                            ${formatTime(seconds)}
                        </div>
                        <span class="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-wide">Seconds</span>
                    </div>
                </div>
            `;
        }, 1000);
    }
};