/**
 * WONDER WOMEN FITNESS CENTRE - MAIN JAVASCRIPT
 * tiruchirappalli, Tamil Nadu, India
 * Static Data Driven Architecture for dynamic presentation & easy backend integration
 */

// ==========================================================================
// 1. SITE CONFIGURATION & DATA OBJECTS
// ==========================================================================

const siteConfig = {
  brandName: "Wonder Women Fitness Centre",
  whatsappNumber: "918973149600", // Default central WhatsApp number
  formEndpoint: "", // Configurable API / Formspree URL. Leave empty for demo mode.
  googleReviewsUrl: "https://maps.google.com/?q=Wonder+Women+Fitness+Centre+Trichy",
  googleRating: "4.8",
  reviewCount: "125+",
  city: "Tiruchirappalli, Tamil Nadu, India"
};

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
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.77583626786!2d78.6833!3d10.8251!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56789abcdef%3A0x123456789abcdef!2sTennur%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1620000000000",
    mapDirectionsUrl: "https://maps.google.com/?q=Wonder+Women+Fitness+Centre+Tennur+Trichy",
    facilities: ["Strength Equipment", "Cardio Zone", "Dedicated Yoga Studio", "Steam Bath", "Personal Training", "Locker Rooms"],
    description: "Our flagship branch near Under Thennur Bridge features state-of-the-art strength training gear, spacious aerobic spaces, and specialized women-only workout zones."
  },
  {
    id: "sasthiri",
    name: "Sasthiri Road Branch",
    shortAddress: "1st Floor, Sri Gem Plaza, Sankaran Pillai Road, Trichy - 620001",
    fullAddress: "1st Floor, Sri Gem Plaza, Sankaran Pillai Road, Tiruchirappalli, Tamil Nadu 620001",
    phone: "+91 94432 60997",
    phoneRaw: "919443260997",
    hours: "Mon - Sat: 5:30 AM - 11:30 AM & 4:30 PM - 9:00 PM | Sun: 6:00 AM - 10:00 AM",
    image: "./assets/branches/sasthiri.jpg",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.66583626786!2d78.6912!3d10.8310!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56789abcdef%3A0x987654321fedcba!2sSankaran%20Pillai%20Rd%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1620000000000",
    mapDirectionsUrl: "https://maps.google.com/?q=Wonder+Women+Fitness+Centre+Sri+Gem+Plaza+Trichy",
    facilities: ["Full Gym Floor", "Weight Loss Programs", "Hatha & Vinyasa Yoga", "Nutrition Consultation", "Shower Facilities"],
    description: "Conveniently located at Sri Gem Plaza on Sankaran Pillai Road, offering a vibrant atmosphere with personalized posture and fitness guidance."
  },
  {
    id: "rajacolony",
    name: "Raja Colony Branch",
    shortAddress: "Raja Colony, Cantonment Area, Trichy - 620021",
    fullAddress: "Raja Colony, Main Road, Tiruchirappalli, Tamil Nadu 620021",
    phone: "+91 84889 58537",
    phoneRaw: "918488958537",
    hours: "Mon - Sat: 5:30 AM - 11:30 AM & 4:30 PM - 9:00 PM | Sun: 6:00 AM - 10:00 AM",
    image: "./assets/branches/rajacolony.jpg",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.99583626786!2d78.6800!3d10.8100!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56789abcdef%3A0x555555555555555!2sRaja%20Colony%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1620000000000",
    mapDirectionsUrl: "https://maps.google.com/?q=Wonder+Women+Fitness+Centre+Raja+Colony+Trichy",
    facilities: ["Premium Studio Floor", "Women's Wellness Lounge", "Functional Training", "Zumba & HIIT", "Expert Female Coaches"],
    description: "Nestled in Raja Colony, this studio is designed for holistic female wellness, combining intensive strength work with soothing mind-body practices."
  }
];

const services = [
  {
    id: "gym-fitness",
    title: "Gym & Fitness",
    icon: "fa-dumbbell",
    image: "./assets/services/gym.jpg",
    description: "Targeted strength training, cardio conditioning, and resistance programs tailored specifically for women's physiology.",
    features: ["Custom Workout Routines", "Treadmills & Ellipticals", "Core & Toning Machines", "Certified Female Instructors"]
  },
  {
    id: "yoga",
    title: "Yoga & Meditation",
    icon: "fa-spa",
    image: "./assets/services/yoga.jpg",
    description: "Traditional Hatha, Power Yoga, and relaxation sessions designed to enhance flexibility, balance, posture, and inner calm.",
    features: ["Stress Relief & Breathing", "Flexibility & Mobility", "Postural Alignment", "Guided Meditation"]
  },
  {
    id: "weight-loss",
    title: "Weight Loss Programs",
    icon: "fa-fire",
    image: "./assets/services/weightloss.jpg",
    description: "Science-backed fat loss protocols combining high-burn workouts with manageable lifestyle and dietary modifications.",
    features: ["Body Composition Tracking", "Calorie Burn Workouts", "Metabolic Conditioning", "Weekly Progress Reviews"]
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: "fa-user-ninja",
    image: "./assets/services/personal-training.jpg",
    description: "One-on-one dedicated coaching to accelerate your fitness goals with focused form corrections and daily accountability.",
    features: ["1-on-1 Dedicated Trainer", "Tailored Goal Roadmap", "Form & Safety Priority", "Accelerated Results"]
  },
  {
    id: "nutrition",
    title: "Nutrition Guidance",
    icon: "fa-apple-whole",
    image: "./assets/services/nutrition.jpg",
    description: "Empowering meal plans and sustainable dietary advice that nourish your body without restrictive starvation diets.",
    features: ["Customized Meal Charts", "Macro & Micronutrient Focus", "South Indian Healthy Options", "Ongoing Dietary Support"]
  },
  {
    id: "wellness",
    title: "Women's Wellness",
    icon: "fa-heart-pulse",
    image: "./assets/services/wellness.jpg",
    description: "Comprehensive wellness care addressing hormonal balance, postnatal recovery, bone density, and overall vitality.",
    features: ["PCOS / PCOD Management", "Postnatal Fitness", "Bone & Joint Strength", "Holistic Energy Boost"]
  }
];

const events = [
  {
    id: "e1",
    title: "Yoga for Beginners Workshop",
    dateDay: "20",
    dateMonth: "MAY",
    time: "7:00 AM – 8:30 AM",
    branchId: "tennur",
    branchName: "Tennur Branch",
    image: "./assets/events/event-yoga.jpg",
    shortDesc: "Learn foundational postures, breathing techniques, and posture correction in a gentle morning session.",
    fullDesc: "Join our expert yoga master for a 90-minute immersive workshop specially designed for beginners. You will learn fundamental asanas, prana breathing techniques, and alignment secrets for everyday stress relief.",
    instructor: "Lakshmi Priya (Senior Yoga Master)"
  },
  {
    id: "e2",
    title: "Women's 30-Day Fitness Challenge",
    dateDay: "05",
    dateMonth: "JUN",
    time: "6:00 PM – 7:30 PM",
    branchId: "sasthiri",
    branchName: "Sasthiri Road Branch",
    image: "./assets/events/event-challenge.jpg",
    shortDesc: "Kickstart your transformation with our high-energy group endurance and strength conditioning kick-off.",
    fullDesc: "Take up the ultimate 30-day fitness challenge! Includes initial body composition analysis, weekly group bootcamps, performance tracking, and exciting rewards for top transformers.",
    instructor: "Kavitha R. (Head Fitness Coach)"
  },
  {
    id: "e3",
    title: "Nutrition & Healthy Lifestyle Seminar",
    dateDay: "18",
    dateMonth: "JUN",
    time: "11:00 AM – 12:30 PM",
    branchId: "rajacolony",
    branchName: "Raja Colony Branch",
    image: "./assets/events/event-nutrition.jpg",
    shortDesc: "Interactive workshop on balanced South Indian nutrition, meal planning, and sustainable fat loss.",
    fullDesc: "Learn how to eat healthy without giving up your traditional local meals. Our clinical nutritionist breaks down practical tips for weight management, hormonal balance, and family wellness.",
    instructor: "Dr. Ananya S. (Sports Nutritionist)"
  },
  {
    id: "e4",
    title: "Zumba & Cardio Party",
    dateDay: "25",
    dateMonth: "JUN",
    time: "5:30 PM – 7:00 PM",
    branchId: "tennur",
    branchName: "Tennur Branch",
    image: "./assets/events/event-yoga.jpg",
    shortDesc: "Burn calories and dance to uplifting beats in our exclusive weekend group cardio party.",
    fullDesc: "An exhilarating evening of music, dance, and cardiovascular conditioning suitable for all fitness levels. Bring a friend and enjoy an energetic workout party!",
    instructor: "Divya M. (Zumba Specialist)"
  }
];

const galleryItems = [
  { id: "g1", title: "Strength Training Zone", category: "fitness", image: "./assets/gallery/g1.jpg" },
  { id: "g2", title: "Morning Yoga Class", category: "yoga", image: "./assets/gallery/g2.jpg" },
  { id: "g3", title: "Mindfulness & Stretching", category: "yoga", image: "./assets/gallery/g3.jpg" },
  { id: "g4", title: "Personal Training Session", category: "fitness", image: "./assets/gallery/g4.jpg" },
  { id: "g5", title: "Tennur Branch Studio", category: "branches", image: "./assets/gallery/g5.jpg" },
  { id: "g6", title: "Group Fitness Challenge", category: "events", image: "./assets/gallery/g6.jpg" },
  { id: "g7", title: "Sasthiri Road Gym Floor", category: "branches", image: "./assets/gallery/g7.jpg" },
  { id: "g8", title: "Nutrition Seminar Event", category: "events", image: "./assets/gallery/g8.jpg" }
];

const testimonials = [
  {
    id: "t1",
    name: "Priya Sundaram",
    branch: "Tennur Branch",
    rating: 5,
    text: "Joining Wonder Women Fitness Centre was the best decision for my health! The women-only environment made me feel completely comfortable, and I have lost 8 kgs in 4 months."
  },
  {
    name: "Anitha Rajan",
    branch: "Sasthiri Road Branch",
    rating: 5,
    text: "The yoga sessions here completely relieved my chronic lower back pain. The trainers at Sri Gem Plaza branch are attentive and treat every member with so much care."
  },
  {
    name: "Meena Krishnan",
    branch: "Raja Colony Branch",
    rating: 5,
    text: "Excellent facilities and extremely professional female trainers. The personal training program helped me build genuine strength and confidence!"
  },
  {
    name: "Deepa Venkatesh",
    branch: "Tennur Branch",
    rating: 5,
    text: "Clean, safe, well-equipped, and supportive community. Flexible morning timings fit perfectly into my busy routine as a working mother."
  }
];


// ==========================================================================
// 2. DYNAMIC RENDER FUNCTIONS
// ==========================================================================

let activeBranchId = "tennur";

// Render Branch Selector Tabs & Active Showcase
function renderBranchSelector() {
  const container = document.getElementById("branchPillsContainer");
  const showcaseContainer = document.getElementById("branchShowcaseContainer");
  const branchSelectDropdown = document.getElementById("enquiryBranchSelect");

  if (!container || !showcaseContainer) return;

  // Render Pill Buttons
  container.innerHTML = branches.map(b => `
    <button type="button" 
            class="branch-pill-btn ${b.id === activeBranchId ? 'active' : ''}" 
            onclick="switchActiveBranch('${b.id}')">
      <i class="fa-solid fa-location-dot me-1"></i> ${b.name}
    </button>
  `).join("");

  // Populate Enquiry Form Dropdown
  if (branchSelectDropdown) {
    branchSelectDropdown.innerHTML = `<option value="">Select Branch *</option>` +
      branches.map(b => `<option value="${b.id}" ${b.id === activeBranchId ? 'selected' : ''}>${b.name} (${b.shortAddress.split(',')[0]})</option>`).join("");
  }

  // Get active branch details
  const b = branches.find(item => item.id === activeBranchId) || branches[0];

  // Render Main Showcase Card
  showcaseContainer.innerHTML = `
    <div class="branch-showcase-card">
      <div class="row g-0">
        <div class="col-lg-6 branch-img-col">
          <img src="${b.image}" alt="${b.name} Facility Photo" loading="lazy">
        </div>
        <div class="col-lg-6 branch-details-col">
          <div class="badge-tag badge-tag-red mb-3">
            <i class="fa-solid fa-shield-halved"></i> 100% Women Only Gym
          </div>
          <h3 class="branch-name-title">${b.name}</h3>
          <p class="text-muted mb-4">${b.description}</p>

          <ul class="branch-info-list">
            <li class="branch-info-item">
              <i class="fa-solid fa-map-location-dot"></i>
              <div>
                <strong>Address:</strong><br>
                <span>${b.fullAddress}</span>
              </div>
            </li>
            <li class="branch-info-item">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <strong>Phone & WhatsApp:</strong><br>
                <a href="tel:${b.phoneRaw}" class="text-decoration-none text-dark fw-bold">${b.phone}</a>
              </div>
            </li>
            <li class="branch-info-item">
              <i class="fa-regular fa-clock"></i>
              <div>
                <strong>Timings:</strong><br>
                <span>${b.hours}</span>
              </div>
            </li>
          </ul>

          <div class="mb-4">
            <h6 class="fw-bold mb-2 text-uppercase text-muted" style="font-size:0.75rem; letter-spacing:0.1em;">Available Facilities:</h6>
            <div class="branch-facilities-wrap">
              ${b.facilities.map(f => `<span class="facility-chip"><i class="fa-solid fa-check text-red me-1"></i> ${f}</span>`).join("")}
            </div>
          </div>

          <div class="d-flex flex-wrap gap-3">
            <a href="${b.mapDirectionsUrl}" target="_blank" rel="noopener" class="btn-ww-secondary">
              <i class="fa-solid fa-compass"></i> GET DIRECTIONS
            </a>
            <button type="button" class="btn-ww-primary" onclick="triggerEnquiryForBranch('${b.id}')">
              <i class="fa-solid fa-paper-plane"></i> ENQUIRE NOW
            </button>
            <button type="button" class="btn btn-outline-success rounded-pill px-3" onclick="openWhatsApp('${b.id}', 'branch')">
              <i class="fa-brands fa-whatsapp me-1"></i> Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchActiveBranch(branchId) {
  activeBranchId = branchId;
  renderBranchSelector();
}

function triggerEnquiryForBranch(branchId) {
  switchActiveBranch(branchId);
  const enquirySection = document.getElementById("enquiry");
  if (enquirySection) {
    enquirySection.scrollIntoView({ behavior: "smooth" });
  }
}

// Render Services Grid
function renderServices() {
  const container = document.getElementById("servicesGridContainer");
  const serviceSelectDropdown = document.getElementById("enquiryServiceSelect");

  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="service-card">
        <div class="service-img-wrap">
          <img src="${s.image}" alt="${s.title} Wonder Women Fitness" loading="lazy">
          <div class="service-badge-icon">
            <i class="fa-solid ${s.icon}"></i>
          </div>
        </div>
        <div class="service-content">
          <h4 class="service-title">${s.title}</h4>
          <p class="service-desc">${s.description}</p>
          <ul class="service-features">
            ${s.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join("")}
          </ul>
          <button type="button" class="btn-ww-outline-red w-100 justify-content-center mt-auto" onclick="triggerEnquiryForService('${s.title}')">
            ENQUIRE FOR THIS PROGRAM <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (serviceSelectDropdown) {
    serviceSelectDropdown.innerHTML = `<option value="">Select Service *</option>` +
      services.map(s => `<option value="${s.title}">${s.title}</option>`).join("");
  }
}

function triggerEnquiryForService(serviceTitle) {
  const serviceSelectDropdown = document.getElementById("enquiryServiceSelect");
  if (serviceSelectDropdown) {
    serviceSelectDropdown.value = serviceTitle;
  }
  const enquirySection = document.getElementById("enquiry");
  if (enquirySection) {
    enquirySection.scrollIntoView({ behavior: "smooth" });
  }
}

// Render Events with Branch Filter
let currentEventFilter = "all";

function renderEvents(filter = "all") {
  currentEventFilter = filter;
  const container = document.getElementById("eventsListContainer");
  const filterWrap = document.getElementById("eventsFilterWrap");

  if (!container) return;

  // Filter buttons HTML
  if (filterWrap) {
    const filterOptions = [
      { id: "all", label: "ALL EVENTS" },
      { id: "tennur", label: "TENNUR" },
      { id: "sasthiri", label: "SASTHIRI ROAD" },
      { id: "rajacolony", label: "RAJA COLONY" }
    ];

    filterWrap.innerHTML = filterOptions.map(opt => `
      <button type="button" 
              class="gallery-filter-btn ${opt.id === currentEventFilter ? 'active' : ''}" 
              onclick="renderEvents('${opt.id}')">
        ${opt.label}
      </button>
    `).join("");
  }

  const filtered = currentEventFilter === "all" 
    ? events 
    : events.filter(e => e.branchId === currentEventFilter);

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-muted italic py-3">No upcoming events scheduled for this branch currently.</p>`;
    return;
  }

  container.innerHTML = filtered.map(e => `
    <div class="events-card-item">
      <div class="event-date-badge">
        <span class="event-date-num">${e.dateDay}</span>
        <span class="event-date-month">${e.dateMonth}</span>
      </div>
      <div class="event-info-wrap">
        <h5 class="event-title">${e.title}</h5>
        <div class="event-meta">
          <i class="fa-regular fa-clock me-1 text-red"></i> ${e.time} &nbsp;|&nbsp; 
          <i class="fa-solid fa-location-dot me-1 text-red"></i> ${e.branchName}
        </div>
        <p class="small text-muted mb-0 mt-1 d-none d-sm-block">${e.shortDesc}</p>
      </div>
      <div>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill fw-bold" onclick="openEventModal('${e.id}')">
          VIEW DETAILS
        </button>
      </div>
    </div>
  `).join("");
}

// Event Modal Handler
function openEventModal(eventId) {
  const event = events.find(e => e.id === eventId);
  if (!event) return;

  const modalTitle = document.getElementById("eventModalTitle");
  const modalBody = document.getElementById("eventModalBody");

  if (modalTitle && modalBody) {
    modalTitle.innerText = event.title;
    modalBody.innerHTML = `
      <div class="text-center mb-3">
        <img src="${event.image}" alt="${event.title}" class="img-fluid rounded" style="max-height: 250px; width: 100%; object-fit: cover;">
      </div>
      <div class="d-flex align-items-center gap-2 mb-3">
        <span class="badge bg-danger">${event.dateDay} ${event.dateMonth}</span>
        <span class="badge bg-dark">${event.time}</span>
        <span class="badge bg-warning text-dark">${event.branchName}</span>
      </div>
      <p class="fw-bold text-gold">${event.shortDesc}</p>
      <p class="text-light">${event.fullDesc}</p>
      <p class="small text-muted mb-3"><i class="fa-solid fa-user-check me-1"></i> Instructor: ${event.instructor}</p>
      <div class="p-3 rounded bg-dark border border-secondary mb-3">
        <small class="text-muted d-block mb-1">Event Location:</small>
        <strong>${event.branchName}</strong> - Wonder Women Fitness Centre
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-ww-primary" onclick="closeModalAndEnquire('${event.title}')">
          REGISTER FOR THIS EVENT
        </button>
      </div>
    `;
    const bsModal = new bootstrap.Modal(document.getElementById("eventModal"));
    bsModal.show();
  }
}

function closeModalAndEnquire(eventTitle) {
  const eventModalEl = document.getElementById("eventModal");
  const modalInstance = bootstrap.Modal.getInstance(eventModalEl);
  if (modalInstance) modalInstance.hide();

  const msgInput = document.getElementById("enquiryMessage");
  if (msgInput) {
    msgInput.value = `Hi, I would like to register for the event: ${eventTitle}`;
  }
  const enquirySection = document.getElementById("enquiry");
  if (enquirySection) {
    enquirySection.scrollIntoView({ behavior: "smooth" });
  }
}

// Render Gallery with Category Filter & Lightbox Trigger
let currentGalleryFilter = "all";

function renderGallery(filter = "all") {
  currentGalleryFilter = filter;
  const container = document.getElementById("galleryGridContainer");
  const filterWrap = document.getElementById("galleryFilterWrap");

  if (!container) return;

  if (filterWrap) {
    const categories = [
      { id: "all", label: "ALL" },
      { id: "fitness", label: "FITNESS" },
      { id: "yoga", label: "YOGA" },
      { id: "events", label: "EVENTS" },
      { id: "branches", label: "BRANCHES" }
    ];
    filterWrap.innerHTML = categories.map(c => `
      <button type="button" 
              class="gallery-filter-btn ${c.id === currentGalleryFilter ? 'active' : ''}" 
              onclick="renderGallery('${c.id}')">
        ${c.label}
      </button>
    `).join("");
  }

  const filtered = currentGalleryFilter === "all"
    ? galleryItems
    : galleryItems.filter(g => g.category === currentGalleryFilter);

  container.innerHTML = filtered.map(g => `
    <div class="gallery-thumb" onclick="openLightbox('${g.image}', '${g.title}')">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-thumb-overlay">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  `).join("");
}

// Lightbox Modal
function openLightbox(imgSrc, title) {
  const lbImg = document.getElementById("lightboxImage");
  const lbTitle = document.getElementById("lightboxTitle");
  if (lbImg && lbTitle) {
    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    const bsModal = new bootstrap.Modal(document.getElementById("lightboxModal"));
    bsModal.show();
  }
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById("testimonialsGridContainer");
  if (!container) return;

  container.innerHTML = testimonials.map(t => `
    <div class="col-md-6 col-lg-3 mb-4">
      <div class="review-card">
        <div class="review-stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <p class="small text-muted mb-3">"${t.text}"</p>
        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
          <div>
            <h6 class="fw-bold mb-0 text-dark" style="font-size:0.9rem;">${t.name}</h6>
            <span class="small text-muted" style="font-size:0.75rem;">${t.branch}</span>
          </div>
          <i class="fa-brands fa-google text-muted"></i>
        </div>
      </div>
    </div>
  `).join("");
}


// ==========================================================================
// 3. WHATSAPP & ENQUIRY INTEGRATION
// ==========================================================================

function openWhatsApp(branchId = "tennur", type = "general") {
  const branch = branches.find(b => b.id === branchId) || branches[0];
  const targetPhone = branch.phoneRaw || siteConfig.whatsappNumber;

  let textMessage = `Hi, I am interested in Wonder Women Fitness Centre (${branch.name}, Trichy). Please provide me details on membership plans and timings.`;
  if (type === "service") {
    textMessage = `Hi, I want to enquire about fitness & yoga programs at Wonder Women Fitness Centre - ${branch.name}.`;
  }

  const encoded = encodeURIComponent(textMessage);
  const waUrl = `https://wa.me/${targetPhone}?text=${encoded}`;
  window.open(waUrl, "_blank");
}

// Enquiry Form Submit Handler
function handleEnquiryFormSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById("enquiryName");
  const phoneInput = document.getElementById("enquiryPhone");
  const emailInput = document.getElementById("enquiryEmail");
  const branchInput = document.getElementById("enquiryBranchSelect");
  const serviceInput = document.getElementById("enquiryServiceSelect");
  const messageInput = document.getElementById("enquiryMessage");
  const alertContainer = document.getElementById("enquiryFormAlert");

  if (!alertContainer) return;

  // Validation
  const name = nameInput ? nameInput.value.trim() : "";
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const branch = branchInput ? branchInput.value : "";
  const service = serviceInput ? serviceInput.value : "";
  const message = messageInput ? messageInput.value.trim() : "";

  // Phone regex (Indian 10 digit)
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!name || !phone || !branch || !message) {
    alertContainer.innerHTML = `
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="fa-solid fa-triangle-exclamation me-2"></i> Please fill in all required fields (Name, Phone, Branch, Message).
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    return;
  }

  if (!phoneRegex.test(phone.replace(/[\s-]/g, ""))) {
    alertContainer.innerHTML = `
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <i class="fa-solid fa-circle-exclamation me-2"></i> Please enter a valid 10-digit phone number.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    return;
  }

  const formDataPayload = {
    name,
    phone,
    email: emailInput ? emailInput.value.trim() : "",
    branch,
    service,
    message,
    submittedAt: new Date().toISOString()
  };

  if (siteConfig.formEndpoint && siteConfig.formEndpoint !== "") {
    // Submit to configured backend API / Formspree
    alertContainer.innerHTML = `
      <div class="alert alert-info" role="alert">
        <i class="fa-solid fa-spinner fa-spin me-2"></i> Submitting your enquiry...
      </div>
    `;

    fetch(siteConfig.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataPayload)
    })
    .then(res => {
      if (res.ok) {
        alertContainer.innerHTML = `
          <div class="alert alert-success" role="alert">
            <i class="fa-solid fa-circle-check me-2"></i> Thank you ${name}! Your enquiry has been successfully submitted. Our team will contact you shortly.
          </div>
        `;
        e.target.reset();
      } else {
        throw new Error("Form submission failed");
      }
    })
    .catch(err => {
      alertContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
          <i class="fa-solid fa-circle-xmark me-2"></i> Submission error. Please try calling or WhatsApping us directly!
        </div>
      `;
    });
  } else {
    // Clean interactive demo fallback mode
    alertContainer.innerHTML = `
      <div class="alert alert-success border border-warning" role="alert">
        <h6 class="fw-bold mb-1"><i class="fa-solid fa-circle-check text-success me-2"></i> Enquiry Recorded (Demo Mode)!</h6>
        <p class="small mb-2">Thank you <strong>${name}</strong>! Your enquiry for <strong>${branch.toUpperCase()}</strong> (${service || 'General Fitness'}) has been captured.</p>
        <div class="small text-muted p-2 rounded bg-dark border border-secondary mb-2">
          <em>Developer Note: Connect <code>siteConfig.formEndpoint</code> in <code>js/script.js</code> to send live API submissions to Formspree, Supabase, or Google Sheets.</em>
        </div>
        <button type="button" class="btn btn-sm btn-success rounded-pill" onclick="openWhatsApp('${branch}', 'general')">
          <i class="fa-brands fa-whatsapp me-1"></i> Send via WhatsApp Instantly
        </button>
      </div>
    `;
    e.target.reset();
  }
}


// ==========================================================================
// 4. NAVBAR SCROLL & INITIALIZATION
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize dynamic components
  renderBranchSelector();
  renderServices();
  renderEvents();
  renderGallery();
  renderTestimonials();

  // Handle sticky header scroll effect
  const navbar = document.querySelector(".navbar-ww");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Attach enquiry form listener
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", handleEnquiryFormSubmit);
  }

  // Close mobile navbar on nav link click
  const navLinks = document.querySelectorAll(".nav-link-ww");
  const navbarCollapse = document.getElementById("navbarWonderWomen");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse?.hide();
      }
    });
  });
});
