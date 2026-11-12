const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
function unlockAdmin() {
    const user = document.getElementById("user-input").value.trim();
    const pass = document.getElementById("pass-input").value.trim();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
        document.getElementById("logout-btn").style.display = "inline-block";
        loadFormValues();
    } else {
        alert("❌ Invalid Username or Password. Try admin / admin123");
    }
}

function logoutAdmin() {
    document.getElementById("pass-input").value = "";
    document.getElementById("admin-dashboard").style.display = "none";
    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
}

function loadFormValues() {
    const data = getSiteData();
    document.getElementById("in-primary-color").value = data.primaryColor;
    document.getElementById("in-navy-color").value = data.navyColor;
    document.getElementById("in-font").value = data.fontFamily;
    document.getElementById("in-radius").value = data.cardRadius;
    document.getElementById("in-img-top").value = data.imgMidTop;
    document.getElementById("in-img-mid").value = data.imgMidBot;
    document.getElementById("in-img-right").value = data.imgRightBot;
    document.getElementById("in-brand").value = data.brandName;
    document.getElementById("in-hero-title").value = data.heroTitle;
    document.getElementById("in-hero-desc").value = data.heroDesc;
    document.getElementById("in-service-intro").value = data.serviceIntro;
    document.getElementById("in-stat-num").value = data.statNumber;
    document.getElementById("in-stat-desc").value = data.statDesc;
    document.getElementById("in-about-story").value = data.aboutStory;
    document.getElementById("in-email").value = data.contactEmail;
    document.getElementById("in-phone").value = data.contactPhone;
    document.getElementById("in-address").value = data.contactAddress;
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

function saveChanges() {
    const updated = {
        primaryColor: document.getElementById("in-primary-color").value,
        navyColor: document.getElementById("in-navy-color").value,
        fontFamily: document.getElementById("in-font").value,
        cardRadius: document.getElementById("in-radius").value,
        imgMidTop: document.getElementById("in-img-top").value,
        imgMidBot: document.getElementById("in-img-mid").value,
        imgRightBot: document.getElementById("in-img-right").value,
        brandName: document.getElementById("in-brand").value,
        heroTitle: document.getElementById("in-hero-title").value,
        heroDesc: document.getElementById("in-hero-desc").value,
        serviceIntro: document.getElementById("in-service-intro").value,
        statNumber: document.getElementById("in-stat-num").value,
        statDesc: document.getElementById("in-stat-desc").value,
        aboutStory: document.getElementById("in-about-story").value,
        contactEmail: document.getElementById("in-email").value,
        contactPhone: document.getElementById("in-phone").value,
        contactAddress: document.getElementById("in-address").value
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    showToast("✅ Published! Refresh your homepage to see your new design & content.");
}

function resetDefaults() {
    if (confirm("Reset all colors, fonts, images, and text back to original defaults?")) {
        localStorage.removeItem(STORAGE_KEY);
        loadFormValues();
        showToast("🔄 Reset to defaults.");
    }
}