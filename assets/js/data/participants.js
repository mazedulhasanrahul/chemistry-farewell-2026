// ==========================================
// VERIFIED PARTICIPANTS DATA (MANUAL DB)
// ==========================================
// সতর্কতা: এখানে কোনো ব্যক্তিগত ফোন নাম্বার, ইমেইল বা ট্রানজেকশন আইডি রাখবেন না।
// পেমেন্ট ভেরিফাই করার পর স্টুডেন্টের তথ্য এখানে যোগ করুন।

const participantsData = [
    // ডেমো ডাটা (পরবর্তীতে এগুলো মুছে আসল ডাটা দেবেন)
    {
        name: "Mazedul Hasan Rahul",
        roll: "91",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Khadiza Raisa",
        roll: "147",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Sheikh Fariha Hossain",
        roll: "03",
        tshirtSize: "XL",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Jubayer Ahmed",
        roll: "143",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Shrabony Akter Nila",
        roll: "59",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Fahmida Naznin Ripa",
        roll: "05",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Tabassum Rahaman",
        roll: "01",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Bipasha",
        roll: "48",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Bristy Rani Das",
        roll: "39",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Umme Habiba Sabiha",
        roll: "08",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Romiz Mia",
        roll: "268",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Ashikur Rahman Rajon",
        roll: "261",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Anuradha karmokar",
        roll: "06",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Mahiya Rahman",
        roll: "10",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Sumona Akter",
        roll: "184",
        tshirtSize: "M",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Tonni Akter",
        roll: "189",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Al Meher Abjune",
        roll: "35",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Suraya Akter",
        roll: "179",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Shapna Akter Rupa",
        roll: "217",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Tithi Madhu",
        roll: "161",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Liza Akter",
        roll: "260",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Saimoon Nahar Nadia",
        roll: "112",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Khairunnahar Nafiza",
        roll: "131",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Rabby Hasan Kabbo",
        roll: "16",
        tshirtSize: "XXXL",
        dressType: "Panjabi",
        traditionalDressSize: "46", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Samrat Shekh",
        roll: "105",
        tshirtSize: "L",
        dressType: "NA",
        traditionalDressSize: "Null", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1200,
        verified: true
    },


];