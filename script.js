// =========================================================
// 1. SHARED STORAGE KEY & DEFAULT SITE SETTINGS
// =========================================================
const STORAGE_KEY = "bluepeak_full_cms_v2";

const defaultContent = {
  // Design & Theme Controls
  primaryColor: "#4338ca",
  navyColor: "#1e1b4b",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  cardRadius: "16px",

  // Text & Information
  brandName: "▲ BLUEPEAK DIGITAL",
  heroTitle: "Design & Tech That Takes You to the Top",
  heroDesc: "We've spent 12+ years working with B2B brands to create clean, user-friendly websites and apps.",
  statNumber: "50%",
  statDesc: "Our new design and smart strategy helped boost user interaction by 50%.",
  serviceIntro: "From idea to impact all in one place",
  aboutStory: "At BluePeak Digital, we see websites as more than just online pages — they’re growth engines for modern brands.",
  contactEmail: "hello@bluepeakdigital.com",
  contactPhone: "+977 980-0000000",
  contactAddress: "Kathmandu, Nepal",

  // Images
  imgMidTop: "image/teamwork main.jpg",
  imgMidBot: "image/teamwork1.jpg",
  imgRightBot: "image/Team.webp"
};

function getSiteData() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return { ...defaultContent, ...(saved || {}) };
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setImg(id, src) {
  const el = document.getElementById(id);
  if (el && src) el.src = src;
}

// =========================================================
// 2. APPLY SAVED DESIGN, TEXT & IMAGES TO PUBLIC WEBSITE
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const data = getSiteData();

  // Apply Custom Font & Colors
  document.body.style.fontFamily = data.fontFamily;
  document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.style.backgroundColor = data.primaryColor;
  });
  document.querySelectorAll(".card-navy").forEach(card => {
    card.style.backgroundColor = data.navyColor;
  });
  document.querySelectorAll(".card").forEach(card => {
    card.style.borderRadius = data.cardRadius;
  });

  // Apply Text
  setText("biz-name", data.brandName);
  setText("footer-brand", data.brandName);
  setText("hero-title", data.heroTitle);
  setText("hero-desc", data.heroDesc);
  setText("stat-number", data.statNumber);
  setText("stat-desc", data.statDesc);
  setText("service-intro", data.serviceIntro);
  setText("about-text", data.aboutStory);
  setText("contact-email", data.contactEmail);
  setText("contact-phone", data.contactPhone);
  setText("contact-address", data.contactAddress);

  // Apply Images
  setImg("img-mid-top", data.imgMidTop);
  setImg("img-mid-bot", data.imgMidBot);
  setImg("img-right-bot", data.imgRightBot);
});

// =========================================================
// 3. NAVBAR SCROLL & MOBILE MENU CONTROLS
// =========================================================
const navbar = document.getElementById("main-navbar");
const menuToggle = document.getElementById("menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");


if (menuToggle && mobileDrawer) {
  menuToggle.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
    menuToggle.textContent = mobileDrawer.classList.contains("open") ? "✕" : "☰";
  });
}

function closeMobileMenu() {
  if (mobileDrawer && menuToggle) {
    mobileDrawer.classList.remove("open");
    menuToggle.textContent = "☰";
  }
}
