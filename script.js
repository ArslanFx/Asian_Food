/* ==========================================================================
   1. MOBILE NAVIGATION TOGGLE LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Pehle check karein ke HTML me elements maujood hain ya nahi
    if (menuToggle && navLinks) {
        
        // Jese hi hamburger icon par click ho, menu open/close karein
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger icon ko smoothly 'X' (close) icon me badalna
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Agar mobile menu khula ho aur koi link click kare, toh menu khud band ho jaye
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});

/* ==========================================================================
   2. DYNAMIC WHATSAPP ORDERING SYSTEM (AUTOMATED MESSAGE)
   ========================================================================== */
function sendOrder(itemName, itemPrice) {
    // Bahria Town Karachi ka business WhatsApp number
    const phoneNumber = "923000423115";
    
    // Automatic generate hone wala customer message template
    const message = "Assalam-o-Alaikum, I would like to order from Asian Food & Pakwan:\n\n" +
                    "🛒 Item: " + itemName + "\n" +
                    "💰 Price: " + itemPrice + "\n\n" +
                    "Please confirm availability and delivery time for Bahria Town Karachi.";
                    
    // Browser safe formatting ke liye URL encoding
    const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    
    // WhatsApp ko naye clean web tab me open karne ke liye
    window.open(whatsappUrl, '_blank');
}
// ------/
/* ==========================================================================
   1. MOBILE NAVIGATION TOGGLE LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    // Pehle check karein ke HTML me elements maujood hain ya nahi
    if (menuToggle && navLinks) {
        
        // Jese hi hamburger icon par click ho, menu open/close karein
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Hamburger icon ko smoothly 'X' (close) icon me badalna
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Agar mobile menu khula ho aur koi link click kare, toh menu khud band ho jaye
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
});

/* ==========================================================================
   2. DYNAMIC WHATSAPP ORDERING SYSTEM (AUTOMATED MESSAGE)
   ========================================================================== */
function sendOrder(itemName, itemPrice) {
    // Bahria Town Karachi ka business WhatsApp number
    const phoneNumber = "923000423115";
    
    // Automatic generate hone wala customer message template
    const message = "Assalam-o-Alaikum, I would like to order from Asian Food & Pakwan:\n\n" +
                    "🛒 Item: " + itemName + "\n" +
                    "💰 Price: " + itemPrice + "\n\n" +
                    "Please confirm availability and delivery time for Bahria Town Karachi.";
                    
    // Browser safe formatting ke liye URL encoding
    const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    
    // WhatsApp ko naye clean web tab me open karne ke liye
    window.open(whatsappUrl, '_blank');
}
// 1. Form Section ko kholne ka function
function openBookingForm() {
    const bookingSection = document.querySelector('.booking-section');
    if (bookingSection) {
        bookingSection.classList.add('active');
        
        // Form par smoothly scroll karke le jaane k liye
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// 2. Form Section ko band karne ka function
function closeBookingForm() {
    const bookingSection = document.querySelector('.booking-section');
    if (bookingSection) {
        bookingSection.classList.remove('active');
    }
}