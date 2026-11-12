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
        tshirtSize: "XL",
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
        name: "Simoon Nahar Nadia",
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
    {
        name: "Tanzila Nusrat Sara",
        roll: "19",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Alpona Akter Tani",
        roll: "57",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Mir Mahfuja Rahman",
        roll: "88",
        tshirtSize: "XXL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Ishita Akhter Meem",
        roll: "199",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Marium Sadia",
        roll: "188",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Somaiya Akter",
        roll: "30",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Anik Kumar",
        roll: "244",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "38", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Hamidur Rahman Farhad",
        roll: "167",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Sanaur Rahman",
        roll: "254",
        tshirtSize: "XXL",
        dressType: "Panjabi",
        traditionalDressSize: "44", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Shakhawat Sujon",
        roll: "219",
        tshirtSize: "M",
        dressType: "NA",
        traditionalDressSize: "NA", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Naznin Sarker Risha",
        roll: "258",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Sajeda Begum Tithi",
        roll: "140",
        tshirtSize: "XL",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Zinnatul Naiem",
        roll: "18",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Redwan Ahmmed",
        roll: "81",
        tshirtSize: "XXL",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Masfia Akter",
        roll: "113",
        tshirtSize: "XL",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "MD Shamim Rana",
        roll: "172",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "44", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Mehedi Hasan",
        roll: "243",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Ashiqur Rahman",
        roll: "285",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Kaniz Fatema",
        roll: "128",
        tshirtSize: "M",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Smrity Rani Das",
        roll: "292",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Rahat Khan",
        roll: "115",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Khairul Islam",
        roll: "264",
        tshirtSize: "XL",
        dressType: "NA",
        traditionalDressSize: "NA", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1200,
        verified: true
    },
    {
        name: "MD Ripon Hossen",
        roll: "64",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Saidur Islam Yousuf",
        roll: "273",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Lamya Akter",
        roll: "54",
        tshirtSize: "M",
        dressType: "NA",
        traditionalDressSize: "Free Size",
        amountPaid: 1200,
        verified: true
    },
    {
        name: "Satabde Das",
        roll: "124",
        tshirtSize: "L",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Ashraful Islam",
        roll: "267",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Mahmudul Hasan",
        roll: "78",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Sultana Mehjabin Dipty",
        roll: "84",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "MD Shamiul Islam",
        roll: "233",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "42", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Nazrul Islam",
        roll: "155",
        tshirtSize: "XL",
        dressType: "Panjabi",
        traditionalDressSize: "44", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Jannatul Ferdous",
        roll: "221",
        tshirtSize: "XL",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Opu Hawlader",
        roll: "68",
        tshirtSize: "M",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Abdullah Al Mahmud",
        roll: "175",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Jahidul Hasan Jhony",
        roll: "60",
        tshirtSize: "L",
        dressType: "Panjabi",
        traditionalDressSize: "40", // পাঞ্জাবি বা শাড়ির সাইজ
        amountPaid: 1500,
        verified: true
    },
    {
        name: "Ratry Debnath",
        roll: "87",
        tshirtSize: "M",
        dressType: "Saree",
        traditionalDressSize: "Free Size",
        amountPaid: 1500,
        verified: true
    },
];