# Wonder Women Fitness Centre - Official Production Website

A complete, polished, production-ready, fully responsive static website built for **Wonder Women Fitness Centre**, located in **Tiruchirappalli, Tamil Nadu, India**.

![Wonder Women Fitness Centre Logo](./assets/logo.png)

---

## 🌟 Overview

The Wonder Women Fitness Centre website is built with HTML5, CSS3, and Vanilla JavaScript. It adheres strictly to the brand visual identity: **Deep Black, Crimson Red, Metallic Gold, and Crisp White**.

### Key Features
* 🏆 **100% Women-Only Fitness Focus**: Premium, energetic visual language tailored to women's strength, yoga, weight loss, and wellness.
* 📍 **Interactive Multi-Branch System**: Instant dynamic switcher between **Tennur Branch**, **Sasthiri Road Branch**, and **Raja Colony Branch** without page refreshes.
* 📅 **Event Showcase & Location Filter**: Filter upcoming workshops & fitness challenges by branch, featuring interactive event detail modals.
* 🖼️ **Dynamic Gallery with Lightbox**: Category filterable photo gallery (`FITNESS`, `YOGA`, `EVENTS`, `BRANCHES`) with fullscreen lightbox popup viewer.
* 📱 **Mobile Optimized CTA Bar**: Sticky bottom bar on mobile (`CALL`, `WHATSAPP`, `ENQUIRE`) for maximum enquiry conversion.
* ✉️ **Enquiry Form Validation & Flexible Endpoint**: Built-in phone validation and demo fallback notification, easily configurable for live backend/Formspree API endpoints.
* 💬 **Contextual WhatsApp Integration**: Automatic pre-filled chat messages with branch-specific parameters.
* 🚀 **Zero Build Step & 100% GitHub Pages Compatible**: Simply upload the files to GitHub Pages for instant live deployment!

---

## 📁 File Structure

```text
wonder-women-fitness/
│
├── index.html                  # Main static HTML5 page with SEO & semantic structure
│
├── css/
│   └── style.css               # Design system, CSS variables, dark/light sections & responsive queries
│
├── js/
│   └── script.js               # Central data models (branches, events, services) & interactive logic
│
├── assets/
│   ├── logo.png                # Official Wonder Women logo
│   ├── hero-woman.jpg          # High-impact hero athlete image
│   ├── about-fitness.jpg       # About section card photo
│   ├── about-yoga.jpg          # About section card photo
│   ├── about-weightloss.jpg    # About section card photo
│   ├── about-personal.jpg      # About section card photo
│   ├── branches/               # Photos for Tennur, Sasthiri Road, Raja Colony
│   ├── services/               # Gym, Yoga, Weight Loss, PT, Nutrition, Wellness images
│   ├── events/                 # Banner images for workshops & challenges
│   └── gallery/                # Gallery thumbnail photos (g1.jpg - g8.jpg)
│
└── README.md                   # Documentation & future admin backend architecture guide
```

---

## 🚀 How to Run Locally

Because this is a static website, no Node.js or `npm install` build step is required!

### Option 1: Direct File Opening
Double-click `index.html` in your file explorer to open it in any modern browser (Chrome, Edge, Safari, Firefox).

### Option 2: Live Server Extension (Recommended for Development)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 How to Deploy to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/) and click **New Repository**.
   - Name it `wonder-women-fitness` (or any preferred name).
   - Set visibility to **Public**.

2. **Upload Files**:
   - Upload all files from the project directory (`index.html`, `css/`, `js/`, `assets/`, `README.md`) into your GitHub repository main branch.

3. **Enable GitHub Pages**:
   - Go to repository **Settings** -> **Pages** (under Code and automation).
   - Under **Build and deployment** -> **Source**, choose **Deploy from a branch**.
   - Select `main` branch and `/ (root)` folder, then click **Save**.

4. **Access Live Website**:
   - Within 1–2 minutes, your website will be live at:
     `https://<your-username>.github.io/wonder-women-fitness/`

---

## 🛠️ How to Customize & Update Content

All website content is centralized inside JavaScript data objects in [`js/script.js`](file:///C:/Users/JeganBaskar/.gemini/antigravity/scratch/wonder-women-fitness/js/script.js).

### 1. Replacing Logo & Images
* **Logo**: Replace `./assets/logo.png` with your updated logo file (keep the filename as `logo.png`).
* **Facility & Service Photos**: Replace any image file in `./assets/services/`, `./assets/branches/`, or `./assets/gallery/` with your actual photography.

### 2. Updating Branch Details
In [`js/script.js`](file:///C:/Users/JeganBaskar/.gemini/antigravity/scratch/wonder-women-fitness/js/script.js), modify the `branches` array:

```javascript
const branches = [
  {
    id: "tennur",
    name: "Tennur Branch",
    shortAddress: "Near Under Thennur Bridge, Tennur, Trichy - 620017",
    fullAddress: "Near Under Thennur Bridge, Tennur, Tiruchirappalli, Tamil Nadu 620017",
    phone: "+91 89731 49600",
    phoneRaw: "918973149600",
    hours: "Mon - Sat: 5:30 AM - 11:30 AM & 4:30 PM - 9:00 PM | Sun: 6:00 AM - 10:00 AM",
    image: "./assets/branches/tennur.jpg",
    mapDirectionsUrl: "https://maps.google.com/?q=Wonder+Women+Fitness+Centre+Tennur+Trichy",
    facilities: ["Strength Equipment", "Cardio Zone", "Dedicated Yoga Studio", "Steam Bath"],
    description: "Branch description text here..."
  },
  // Add or update other branches...
];
```

### 3. Adding or Updating Events
In [`js/script.js`](file:///C:/Users/JeganBaskar/.gemini/antigravity/scratch/wonder-women-fitness/js/script.js), add a new object to the `events` array:

```javascript
const events = [
  {
    id: "e5",
    title: "Postnatal Fitness & Care Workshop",
    dateDay: "12",
    dateMonth: "JUL",
    time: "10:00 AM – 11:30 AM",
    branchId: "sasthiri",
    branchName: "Sasthiri Road Branch",
    image: "./assets/events/event-yoga.jpg",
    shortDesc: "Specialized workshop for young mothers focusing on core recovery.",
    fullDesc: "Complete guide on post-pregnancy recovery and safe core rehabilitation.",
    instructor: "Anitha R. (Postnatal Specialist)"
  }
];
```

### 4. Configuring WhatsApp Number
Update `siteConfig.whatsappNumber` in [`js/script.js`](file:///C:/Users/JeganBaskar/.gemini/antigravity/scratch/wonder-women-fitness/js/script.js):
```javascript
const siteConfig = {
  whatsappNumber: "918973149600", // Country code 91 + 10-digit number without '+' or spaces
};
```

### 5. Connecting Enquiry Form to Backend API
By default, the enquiry form runs in **Interactive Demo Mode**, capturing submissions locally and displaying a confirmation banner.

To connect live email or database submissions (e.g., via Formspree, Supabase, or Google Sheets):
In [`js/script.js`](file:///C:/Users/JeganBaskar/.gemini/antigravity/scratch/wonder-women-fitness/js/script.js), set your form endpoint URL:

```javascript
const siteConfig = {
  formEndpoint: "https://formspree.io/f/your_form_id" // e.g. Formspree or custom API URL
};
```

---

## 🏛️ Future Admin Panel & Database Architecture

When migrating from this static website to a full-stack dynamic platform, use the following blueprint:

### System Architecture Flow

```text
+------------------------+      +-------------------+      +--------------------+
|  Admin Web Dashboard   | ---> |   REST/GraphQL    | ---> | Database (PostgreSQL|
| (React/Next.js/Vue)   |      |  Backend API      |      | Supabase/Firebase) |
+------------------------+      +-------------------+      +--------------------+
                                          |
                                          v
                                +-------------------+
                                | Public Website    |
                                | (Dynamically      |
                                | Fetches Content)  |
                                +-------------------+
```

### Admin Panel Modules Blueprint
1. **Dashboard Overview**:
   - Total Enquiries count (Today / This Month)
   - Branch-wise Enquiry breakdown
   - Active Upcoming Events
   - Total Gallery Media count
2. **Enquiries Management**:
   - View, filter by branch, export to Excel/CSV, mark as "Contacted", "Joined", or "Follow-up".
3. **Branch Management**:
   - Add/edit branch addresses, contact numbers, facility tags, operating hours, and photos.
4. **Events Manager**:
   - Add new events with start date/time, branch tag, cover photo upload, and publish/draft toggles.
5. **Gallery Manager**:
   - Bulk upload gallery photos with category tags (`FITNESS`, `YOGA`, `EVENTS`, `BRANCHES`).
6. **Services & Testimonials Manager**:
   - Dynamic control over package prices, feature highlights, and verified member reviews.

---

## 📄 License & Credits

© 2026 **Wonder Women Fitness Centre**, Tiruchirappalli, Tamil Nadu, India. All Rights Reserved.
