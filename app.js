// Timeline data
const timelineData = [
  {
    "date": "460-377 BC",
    "title": "Hippocrates: Father of Medicine",
    "description": "Greek physician who first approached disease from a rational rather than supernatural perspective. Wrote 'On Airs, Waters and Places' connecting environmental factors to disease patterns.",
    "person": "Hippocrates",
    "category": "Ancient Medicine",
    "significance": "Foundation of medical observation",
    "wikipedia": "https://en.wikipedia.org/wiki/Hippocrates",
    "color": "#8B4513",
    "period": "ancient"
  },
  {
    "date": "1546",
    "title": "Girolamo Fracastoro: Contagion Theory",
    "description": "Italian physician who proposed that diseases are caused by rapidly multiplying seeds transmitted by direct contact, air, or contaminated objects.",
    "person": "Girolamo Fracastoro",
    "category": "Disease Theory",
    "significance": "Early germ theory",
    "wikipedia": "https://en.wikipedia.org/wiki/Girolamo_Fracastoro",
    "color": "#2E8B57",
    "period": "early-modern"
  },
  {
    "date": "1662",
    "title": "John Graunt: Bills of Mortality",
    "description": "English statistician who analyzed mortality data in London, creating the first life tables and establishing statistical methods for studying disease patterns.",
    "person": "John Graunt",
    "category": "Vital Statistics",
    "significance": "Birth of epidemiological statistics",
    "wikipedia": "https://en.wikipedia.org/wiki/John_Graunt",
    "color": "#4682B4",
    "period": "early-modern"
  },
  {
    "date": "1747",
    "title": "James Lind: First Clinical Trial",
    "description": "Scottish naval surgeon who conducted the first controlled clinical trial, proving that citrus fruits prevented and cured scurvy among sailors.",
    "person": "James Lind",
    "category": "Clinical Research",
    "significance": "Evidence-based medicine",
    "wikipedia": "https://en.wikipedia.org/wiki/James_Lind",
    "color": "#DAA520",
    "period": "early-modern"
  },
  {
    "date": "1796",
    "title": "Edward Jenner: First Vaccination",
    "description": "English physician who developed the first vaccine by using cowpox to protect against smallpox, laying the foundation for immunology and vaccination.",
    "person": "Edward Jenner",
    "category": "Vaccination",
    "significance": "Birth of immunization",
    "wikipedia": "https://en.wikipedia.org/wiki/Edward_Jenner",
    "video": "https://www.youtube.com/watch?v=JSmrCryATV0",
    "color": "#DC143C",
    "period": "early-modern"
  },
  {
    "date": "1798",
    "title": "Marine Hospital Service Established",
    "description": "First U.S. federal public health agency created to provide healthcare to merchant seamen, later becoming the U.S. Public Health Service.",
    "person": "John Adams",
    "category": "Public Health Policy",
    "significance": "Federal public health infrastructure",
    "wikipedia": "https://en.wikipedia.org/wiki/Marine_Hospital_Service",
    "color": "#B22222",
    "period": "early-modern"
  },
  {
    "date": "1840s",
    "title": "Ignaz Semmelweis: Hand Washing",
    "description": "Hungarian physician who discovered that hand washing with chlorinated lime dramatically reduced childbed fever deaths in maternity wards.",
    "person": "Ignaz Semmelweis",
    "category": "Infection Control",
    "significance": "Hospital hygiene",
    "wikipedia": "https://en.wikipedia.org/wiki/Ignaz_Semmelweis",
    "color": "#20B2AA",
    "period": "19th-century"
  },
  {
    "date": "1854",
    "title": "John Snow: Cholera Investigation",
    "description": "English physician who used epidemiological mapping to trace cholera outbreak to contaminated water from Broad Street pump, establishing waterborne disease transmission.",
    "person": "John Snow",
    "category": "Disease Investigation",
    "significance": "Birth of modern epidemiology",
    "wikipedia": "https://en.wikipedia.org/wiki/John_Snow",
    "video": "https://www.youtube.com/watch?v=lNjrAXGRda4",
    "color": "#4169E1",
    "period": "19th-century"
  },
  {
    "date": "1860s",
    "title": "Florence Nightingale: Sanitation Revolution",
    "description": "British nurse who revolutionized hospital sanitation during the Crimean War, reducing mortality rates from 42% to 2% through hygiene practices.",
    "person": "Florence Nightingale",
    "category": "Hospital Reform",
    "significance": "Evidence-based nursing",
    "wikipedia": "https://en.wikipedia.org/wiki/Florence_Nightingale",
    "color": "#FF69B4",
    "period": "19th-century"
  },
  {
    "date": "1876",
    "title": "Robert Koch: Germ Theory",
    "description": "German physician who proved that specific bacteria cause specific diseases, establishing Koch's postulates for proving causation.",
    "person": "Robert Koch",
    "category": "Microbiology",
    "significance": "Scientific proof of germ theory",
    "wikipedia": "https://en.wikipedia.org/wiki/Robert_Koch",
    "color": "#32CD32",
    "period": "19th-century"
  },
  {
    "date": "1918-1920",
    "title": "Spanish Flu Pandemic",
    "description": "Global H1N1 influenza pandemic that infected one-third of the world's population and killed 50-100 million people, demonstrating the need for global health surveillance.",
    "person": "Global Event",
    "category": "Pandemic",
    "significance": "Modern pandemic response",
    "wikipedia": "https://en.wikipedia.org/wiki/Spanish_flu",
    "color": "#8B0000",
    "period": "modern"
  },
  {
    "date": "1928",
    "title": "Alexander Fleming: Penicillin Discovery",
    "description": "Scottish bacteriologist who accidentally discovered penicillin when mold contaminated his bacterial cultures, launching the antibiotic era.",
    "person": "Alexander Fleming",
    "category": "Antimicrobials",
    "significance": "Antibiotic revolution",
    "wikipedia": "https://en.wikipedia.org/wiki/Alexander_Fleming",
    "color": "#FF8C00",
    "period": "modern"
  },
  {
    "date": "1932-1972",
    "title": "Tuskegee Syphilis Study",
    "description": "Unethical study by U.S. Public Health Service that withheld treatment from African American men with syphilis, leading to major reforms in research ethics.",
    "person": "U.S. Public Health Service",
    "category": "Medical Ethics",
    "significance": "Research ethics reform",
    "wikipedia": "https://en.wikipedia.org/wiki/Tuskegee_Syphilis_Study",
    "color": "#800080",
    "period": "modern"
  },
  {
    "date": "1955",
    "title": "Jonas Salk: Polio Vaccine Success",
    "description": "American physician announced successful trials of inactivated polio vaccine, reducing polio cases by 90% and leading to near-global eradication.",
    "person": "Jonas Salk",
    "category": "Vaccination",
    "significance": "Disease eradication",
    "wikipedia": "https://en.wikipedia.org/wiki/Jonas_Salk",
    "color": "#00CED1",
    "period": "modern"
  },
  {
    "date": "1960",
    "title": "Frances Oldham Kelsey: Thalidomide Prevention",
    "description": "FDA reviewer who refused to approve thalidomide in the U.S., preventing birth defects and leading to stronger drug safety regulations.",
    "person": "Frances Oldham Kelsey",
    "category": "Drug Safety",
    "significance": "Pharmaceutical regulation",
    "wikipedia": "https://en.wikipedia.org/wiki/Frances_Oldham_Kelsey",
    "color": "#9932CC",
    "period": "modern"
  },
  {
    "date": "1981",
    "title": "HIV/AIDS Epidemic Begins",
    "description": "First cases of AIDS reported by CDC in gay men in Los Angeles and New York, launching global response to HIV/AIDS pandemic.",
    "person": "CDC",
    "category": "Emerging Disease",
    "significance": "Modern infectious disease response",
    "wikipedia": "https://en.wikipedia.org/wiki/Timeline_of_HIV/AIDS",
    "color": "#FF1493",
    "period": "modern"
  },
  {
    "date": "1990",
    "title": "Ryan White CARE Act",
    "description": "Federal legislation providing comprehensive HIV/AIDS care and treatment services, named after teenager Ryan White who fought AIDS discrimination.",
    "person": "Ryan White",
    "category": "Health Policy",
    "significance": "Comprehensive disease care",
    "wikipedia": "https://en.wikipedia.org/wiki/Ryan_White_CARE_Act",
    "color": "#CD5C5C",
    "period": "modern"
  },
  {
    "date": "1990-2003",
    "title": "Human Genome Project",
    "description": "International scientific effort to map the complete human genome, opening new frontiers in personalized medicine and genetic epidemiology.",
    "person": "International Consortium",
    "category": "Genomics",
    "significance": "Precision medicine",
    "wikipedia": "https://en.wikipedia.org/wiki/Human_Genome_Project",
    "color": "#4B0082",
    "period": "modern"
  },
  {
    "date": "1997",
    "title": "Children's Health Insurance Program (CHIP)",
    "description": "Federal-state program providing health coverage to children in families with modest incomes, expanding access to pediatric healthcare.",
    "person": "Ted Kennedy & Orrin Hatch",
    "category": "Health Insurance",
    "significance": "Universal child health coverage",
    "wikipedia": "https://en.wikipedia.org/wiki/Children%27s_Health_Insurance_Program",
    "color": "#228B22",
    "period": "modern"
  }
];

// Additional educational videos
const educationalVideos = {
  'epidemiology-intro': 'https://www.youtube.com/watch?v=9iMK1431dJU',
  'history-epidemiology': 'https://www.youtube.com/watch?v=LcLI6b3x-wc'
};

// Global variables
let filteredData = [...timelineData];
let observer;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeTimeline();
  setupEventListeners();
  setupIntersectionObserver();
  addEducationalVideos();
});

function initializeTimeline() {
  renderTimeline(filteredData);
}

function renderTimeline(data) {
  const timeline = document.getElementById('timeline');
  
  if (data.length === 0) {
    timeline.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No events found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    `;
    return;
  }

  timeline.innerHTML = data.map((event, index) => {
    const isLeft = index % 2 === 0;
    const videoHTML = event.video ? `
      <button class="event-link video-link" onclick="openVideoModal('${event.video}', '${event.title.replace(/'/g, "\\'")}')" type="button">
        <i class="fab fa-youtube"></i>
        Watch Video
      </button>
    ` : '';

    return `
      <div class="timeline-event ${isLeft ? 'left' : 'right'}" data-period="${event.period}" data-category="${event.category}">
        <div class="timeline-marker" style="border-color: ${event.color}"></div>
        <div class="event-card" style="border-left: 4px solid ${event.color}">
          <div class="event-header">
            <span class="event-date">${event.date}</span>
            <span class="event-category">${event.category}</span>
          </div>
          <h3 class="event-title">${event.title}</h3>
          <p class="event-person">${event.person}</p>
          <p class="event-description">${event.description}</p>
          <div class="event-actions">
            <a href="${event.wikipedia}" target="_blank" rel="noopener noreferrer" class="event-link">
              <i class="fab fa-wikipedia-w"></i>
              Wikipedia
            </a>
            ${videoHTML}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Trigger animation after a short delay
  setTimeout(() => {
    document.querySelectorAll('.timeline-event').forEach(event => {
      event.classList.add('visible');
    });
  }, 100);
}

function setupEventListeners() {
  // Search functionality with debouncing
  const searchInput = document.getElementById('searchInput');
  const debouncedSearch = debounce(applyFilters, 300);
  searchInput.addEventListener('input', debouncedSearch);

  // Filter functionality
  const periodFilter = document.getElementById('periodFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  periodFilter.addEventListener('change', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);

  // Clear filters
  const clearFiltersBtn = document.getElementById('clearFilters');
  clearFiltersBtn.addEventListener('click', clearFilters);

  // Timeline navigation
  document.querySelectorAll('.timeline-nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const period = this.dataset.period;
      scrollToPeriod(period);
    });
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide back to top button based on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Modal functionality
  const modal = document.getElementById('videoModal');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeVideoModal();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      e.preventDefault();
      closeVideoModal();
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeVideoModal();
    }
  });

  // Populate category filter options
  populateCategoryFilter();
}

function setupIntersectionObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);
}

function applyFilters() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
  const periodFilter = document.getElementById('periodFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;

  filteredData = timelineData.filter(event => {
    const matchesSearch = !searchTerm || 
      event.title.toLowerCase().includes(searchTerm) ||
      event.person.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.category.toLowerCase().includes(searchTerm);

    const matchesPeriod = periodFilter === 'all' || event.period === periodFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;

    return matchesSearch && matchesPeriod && matchesCategory;
  });

  renderTimeline(filteredData);
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('periodFilter').value = 'all';
  document.getElementById('categoryFilter').value = 'all';
  filteredData = [...timelineData];
  renderTimeline(filteredData);
}

function populateCategoryFilter() {
  const categories = [...new Set(timelineData.map(event => event.category))].sort();
  const categoryFilter = document.getElementById('categoryFilter');
  
  if (!categoryFilter) return;
  
  // Clear existing options except "All Categories"
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function scrollToPeriod(period) {
  const periodEvents = document.querySelectorAll(`[data-period="${period}"]`);
  if (periodEvents.length > 0) {
    const firstEvent = periodEvents[0];
    const offset = 100; // Account for sticky navigation
    const elementPosition = firstEvent.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

function openVideoModal(videoUrl, title) {
  const modal = document.getElementById('videoModal');
  const modalTitle = document.querySelector('.modal-title');
  const videoContainer = document.getElementById('videoContainer');
  
  if (!modal || !modalTitle || !videoContainer) {
    console.error('Modal elements not found');
    return;
  }
  
  // Extract video ID from YouTube URL
  const videoId = extractYouTubeId(videoUrl);
  
  if (!videoId) {
    console.error('Invalid YouTube URL:', videoUrl);
    // Fallback to opening in new tab
    window.open(videoUrl, '_blank');
    return;
  }

  modalTitle.textContent = title;
  videoContainer.innerHTML = `
    <iframe 
      src="https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0" 
      frameborder="0" 
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </iframe>
  `;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const videoContainer = document.getElementById('videoContainer');
  
  if (!modal || !videoContainer) return;
  
  modal.classList.add('hidden');
  videoContainer.innerHTML = '';
  document.body.style.overflow = 'auto';
}

function extractYouTubeId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// Add educational videos to featured events
function addEducationalVideos() {
  const header = document.querySelector('.header');
  if (header && header.querySelector('.container')) {
    const videoLink = document.createElement('div');
    videoLink.className = 'header-video';
    videoLink.style.marginTop = '16px';
    videoLink.innerHTML = `
      <button onclick="openVideoModal('${educationalVideos['epidemiology-intro']}', 'Introduction to Epidemiology')" 
         class="btn btn--secondary" type="button">
        <i class="fab fa-youtube"></i>
        Watch: Introduction to Epidemiology
      </button>
    `;
    header.querySelector('.container').appendChild(videoLink);
  }
}

// Performance optimization: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Prevent default behavior for buttons and fix event handling
document.addEventListener('click', function(e) {
  // Handle video modal buttons
  if (e.target.closest('.video-link')) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  // Handle navigation buttons
  if (e.target.closest('.timeline-nav-btn')) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Ensure external links open in new tabs
  if (e.target.matches('a[href^="http"]') || e.target.closest('a[href^="http"]')) {
    const link = e.target.matches('a') ? e.target : e.target.closest('a');
    if (link && !link.target) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  }
});

// Initialize all functionality when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTimeline);
} else {
  initializeTimeline();
}