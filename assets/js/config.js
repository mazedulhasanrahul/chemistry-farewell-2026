// ==========================================
// CENTRALIZED CONFIGURATION FILE
// ==========================================
// এই ফাইল থেকে পুরো ওয়েবসাইটের তথ্য নিয়ন্ত্রণ করা হবে।

const CONFIG = {
    // 1. EVENT INFORMATION
    event: {
        institution: "Government Titumir College",
        department: "Department of Chemistry",
        session: "2021–22",
        title: "Chemistry Department Farewell 2026",
        tagline: "The End of a Chapter, The Beginning of Forever.",
        date: "17 November 2026",
        startTime: "11:00 AM",
        timezone: "Asia/Dhaka",
        venue: "College Campus",
        contactPerson: "Rahul",
        contactNumber: "01319722155",
        totalSubmittedRegistrations: 0 // ম্যানুয়াল কাউন্ট (যেহেতু ডাটাবেস নেই, আপনি মাঝে মাঝে এটি আপডেট করে দিতে পারেন)
    },

    // 2. REGISTRATION & DEADLINE
    registration: {
        isOpen: true, // রেজিস্ট্রেশন বন্ধ করতে false করে দিন
        deadline: "2026-11-12T23:59:59+06:00", // Bangladesh Time (ISO 8601 format)
        fees: {
            withTraditionalDress: 1500, // শাড়ি বা পাঞ্জাবি নিলে
            withoutTraditionalDress: 1200, // শুধুমাত্র টি-শার্ট নিলে (শাড়ি/পাঞ্জাবি ছাড়া)
            bothTraditionalDress: 0 // যদি কেউ শাড়ি এবং পাঞ্জাবি দুটোই সিলেক্ট করে (এমন অপশন না থাকলে ০ রাখুন)
        }
    },

    // 3. PAYMENT INFORMATION (bKash)
    payment: {
        method: "bKash Send Money",
        accountType: "Personal",
        recipients: [
            { name: "Rahul", number: "01319722155" },
            { name: "Raisa", number: "01627986982" }
        ]
    },

    // 4. ASSETS & IMAGE PATHS
    images: {
        logo: "assets/images/logo/chem-logo.png", // লোগোর পাথ
        poster: "assets/images/poster/farewell-poster.jpg", // স্কয়ার পোস্টার
        dresses: {
            tshirt: "assets/images/dresses/tshirt-white.jpg",
            panjabi: "assets/images/dresses/panjabi-maroon.jpg",
            saree: "assets/images/dresses/saree-pink.jpg"
        },
        sizeCharts: {
            tshirt: "assets/images/dresses/tshirt-size.jpg",
            panjabi: "assets/images/dresses/panjabi-size.jpg",
            saree: "assets/images/dresses/saree-size.jpg"
        }
    },

    // 5. SOCIAL & LINKS
    social: {
        facebookPage: "https://facebook.com/your-page-link",
        facebookGroup: "https://facebook.com/groups/your-group-link",
        location: "https://maps.google.com/?q=Government+Titumir+College+Dhaka",
        email: "contact@yourdomain.com"
    },

    // 6. API KEYS (EmailJS & ImgBB)
    apiKeys: {
        imgbb: "93cb745a2488ccab48610e7d09cba7e3",
        emailjs: {
            publicKey: "f6UtKJBgEuWhs1rnK",
            serviceId: "service_dmyv009",
            adminTemplateId: "template_1ug7gby",
            studentTemplateId: "template_2s0s9qy"
        }
    }
};