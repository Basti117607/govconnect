/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ===================================================================
// MOCK DATA
// ===================================================================
const users = [
  {
    id: 1,
    name: 'Maik Meier',
    department: 'Bundeswehr',
    role: 'Experte für Verwaltungstransformation',
    avatar: 'MM',
    bio: 'Mit 20 Jahren Erfahrung in der Verwaltungstransformation bei der Bundeswehr suche ich nach neuen Herausforderungen, um mein Wissen einzubringen und innovative Projekte mitzugestalten. Ich bin besonders an Projekten interessiert, die auf eine moderne und digitale Verwaltung abzielen.',
    skills: ['Verwaltungsprozesse', 'Prozessoptimierung', 'Transformation', 'Projektmanagement', 'Change Management', 'IT-Strategie'],
    interests: ['Staatsmodernisierung', 'Digitalisierung', 'Behördenaufbau', 'Interministerielle Zusammenarbeit', 'Effizienzsteigerung'],
    availability: 'Verfügbar für ca. 10 Stunden pro Woche'
  },
];

const projects = [
  {
    id: 101,
    title: 'Aufbau: Recruiting-Prozess für das Bundesministerium für Digitalisierung (BMDS)',
    department: 'Aufbaustab BMDS (Initiative des BMI)',
    description: 'Wir gründen das neue Bundesministerium für Digitalisierung und Staatsmodernisierung (BMDS) und benötigen dringend Unterstützung! Gesucht werden Expert:innen für die schnelle Konzeption und Implementierung eines innovativen, digitalen und effizienten Recruiting-Prozesses.',
    requiredSkills: ['Recruiting', 'Verwaltungserfahrung', 'Prozessoptimierung', 'Digitalisierung', 'Projektmanagement'],
    effort: 'Ca. 10 Stunden/Woche',
    duration: '2 Monate',
    contactPerson: 'Frau Huber',
    contactEmail: 'frau.huber@bmi.bund.de'
  },
    {
    id: 102,
    title: "Weiterentwicklung der 'GovConnect' Prototypen-Plattform",
    department: 'Referat für digitale Innovation',
    description: 'Sei Teil des Teams, das GovConnect weiterentwickelt! Wir suchen motivierte Kolleg:innen, die uns helfen, die Plattform basierend auf Nutzerfeedback zu verbessern, neue Features zu konzipieren und die UI/UX zu optimieren.',
    requiredSkills: ['UI/UX Design', 'JavaScript', 'TypeScript', 'User-Feedback-Analyse', 'Agile Entwicklung'],
    effort: 'ca. 5-10 Stunden/Woche',
    duration: 'laufend',
    contactPerson: 'Jacqueline Klemm',
    contactEmail: 'jacqueline.klemm@bmi.bund.de'
  },
  {
    id: 103,
    title: 'Pilotprojekt: KI-gestützte Dokumentenklassifizierung',
    department: 'Referat P2 - IT-Strategie und -Architektur',
    description: 'Erforschung und Erprobung von KI-Lösungen zur automatisierten Klassifizierung großer Dokumentenmengen. Wir suchen neugierige Techniker mit Interesse an Maschinellem Lernen.',
    requiredSkills: ['Datenanalyse', 'Python', 'Machine Learning (Grundlagen)', 'KI-Ethik', 'Projektmanagement (agil)'],
    effort: 'Ca. 8 Stunden/Woche',
    duration: '4-5 Monate',
    contactPerson: 'Dr. Klaus Meier',
    contactEmail: 'klaus.meier@bmi.bund.de'
  },
  {
    id: 104,
    title: 'Barrierefreie Web-Anwendungen nach BITV 2.0',
    department: 'Beauftragte für Menschen mit Behinderungen',
    description: 'Unterstützung bei der Überprüfung und Anpassung unserer internen Web-Tools, um die Konformität mit der Barrierefreie-Informationstechnik-Verordnung sicherzustellen.',
    requiredSkills: ['HTML', 'CSS', 'JavaScript', 'Accessibility (WCAG)', 'Screenreader-Testing'],
    effort: 'ca. 5 Stunden/Woche',
    duration: 'laufend',
    contactPerson: 'Sabine Huber',
    contactEmail: 'sabine.huber@bmi.bund.de'
  },
   {
    id: 105,
    title: 'Aufbau eines internen Wissens-Wikis',
    department: 'Referat KM1 - Wissensmanagement',
    description: 'Wir planen den Aufbau einer zentralen Wissensdatenbank auf Wiki-Basis. Gesucht werden Mitstreiter für Konzeption, Strukturierung und Content-Pflege.',
    requiredSkills: ['Confluence/Wiki-Systeme', 'Strukturierte Dokumentation', 'Redaktion', 'Wissensmanagement'],
    effort: '3-4 Stunden/Woche',
    duration: '6 Monate',
    contactPerson: 'Thomas Klein',
    contactEmail: 'thomas.klein@bmi.bund.de'
  },
    {
    id: 106,
    title: 'Digitalisierung: Workflow-Optimierung im Referat Z1',
    department: 'Referat Z1 - Organisation und Prozesse',
    description: 'Wir suchen Unterstützung bei der Analyse und Optimierung interner Verwaltungsabläufe zur Vorbereitung auf die E-Akte. Fokus auf Effizienzsteigerung und Nutzerfreundlichkeit.',
    requiredSkills: ['Prozessanalyse', 'Change Management', 'MS Visio', 'Kommunikation', 'Workflow-Design'],
    effort: 'Ca. 4-6 Stunden/Woche',
    duration: '3 Monate',
    contactPerson: 'Anna Beispiel',
    contactEmail: 'anna.beispiel@bmi.bund.de'
  },
    {
    id: 107,
    title: 'Gender-Mainstreaming in der internen Kommunikation',
    department: 'Gleichstellungsbeauftragte / Referat G1',
    description: 'Wir überarbeiten unsere internen Kommunikationsrichtlinien, um eine gendersensible Sprache und inklusive Bildsprache sicherzustellen. Kreative Köpfe gesucht!',
    requiredSkills: ['Redaktion', 'Kommunikation', 'Interkulturelle Kompetenz', 'Diversity & Inclusion', 'Layout'],
    effort: 'Flexibel, ca. 2-3 Stunden/Woche',
    duration: '2 Monate',
    contactPerson: 'Dr. Lena Schmidt',
    contactEmail: 'lena.schmidt@bmi.bund.de'
  }
];


// ===================================================================
// APPLICATION STATE
// ===================================================================
let currentUser = users[0];
let projectsToSwipe = [...projects];
let interestedProjects = []; // Projects user swiped right on
let dislikedProjects = []; // Projects user swiped left on
let swipedProjects = []; // All projects user swiped on

// ===================================================================
// DOM ELEMENTS
// ===================================================================
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
const dashboardView = document.getElementById('dashboard-view');
const swipeView = document.getElementById('swipe-view');
const profileView = document.getElementById('profile-view');
const matchesView = document.getElementById('matches-view');
const reconsiderView = document.getElementById('reconsider-view');
const modalContainer = document.getElementById('modal-container');
const projectDetailModalContainer = document.getElementById('project-detail-modal-container');
const projectDetailModalContent = document.getElementById('project-detail-modal-content');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const dropZone = document.getElementById('drop-zone');
const fileUploadInput = document.getElementById('file-upload');
const fileUploadList = document.getElementById('file-upload-list');

// ===================================================================
// RENDER FUNCTIONS
// ===================================================================

/**
 * Renders a list of skills or interests as styled pills.
 * @param {string[]} items - Array of strings (skills or interests).
 * @returns {string} - HTML string of pill elements.
 */
const renderPills = (items) => {
    if (!items || items.length === 0) return '<p class="text-gray-500">Keine Angaben.</p>';
    return items.map(item => `<span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-1 rounded-full">${item}</span>`).join('');
};

/**
 * Renders the dashboard view.
 */
const renderDashboard = () => {
    const remainingProjects = projectsToSwipe.length;
    dashboardView.innerHTML = `
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Willkommen zurück, ${currentUser.name}!</h1>
            <p class="mt-1 text-lg text-gray-600">Was möchten Sie heute tun?</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div data-view-target="swipe-view" class="dashboard-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">Neue Projektvorschläge</h3>
                <p class="text-4xl font-bold text-blue-600 mt-2">${remainingProjects}</p>
                <p class="text-gray-500 mt-1">Projekte warten auf Ihr Feedback.</p>
            </div>
            <div data-view-target="matches-view" class="dashboard-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">Offene Interessen</h3>
                <p class="text-4xl font-bold text-green-600 mt-2">${interestedProjects.length}</p>
                <p class="text-gray-500 mt-1">Projekte, die Sie interessieren.</p>
            </div>
            <div data-view-target="matches-view" class="dashboard-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">Neue Matches</h3>
                <p class="text-4xl font-bold text-yellow-500 mt-2">${interestedProjects.length}</p>
                <p class="text-gray-500 mt-1">Gegenseitiges Interesse! (Simuliert)</p>
            </div>
             <div data-view-target="reconsider-view" class="dashboard-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                <h3 class="text-xl font-semibold text-gray-800">Verworfene Projekte</h3>
                <p class="text-4xl font-bold text-red-600 mt-2">${dislikedProjects.length}</p>
                <p class="text-gray-500 mt-1">Abgelehnte Projekte erneut ansehen.</p>
            </div>
        </div>
    `;
    // Add event listeners to the new cards
    document.querySelectorAll('.dashboard-card').forEach(card => {
        const targetView = card.getAttribute('data-view-target');
        if (targetView) {
            card.addEventListener('click', () => switchView(targetView));
        }
    });
};

/**
 * Renders the user's profile view.
 */
const renderProfile = () => {
    profileView.innerHTML = `
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="p-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="flex-shrink-0 h-24 w-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mb-4 md:mb-0 md:mr-8">
                        ${currentUser.avatar}
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold text-gray-900">${currentUser.name}</h2>
                        <p class="text-xl text-gray-600">${currentUser.role}</p>
                        <p class="text-md text-gray-500">${currentUser.department}</p>
                    </div>
                </div>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Über mich</h3>
                    <p class="text-gray-700 leading-relaxed">${currentUser.bio}</p>
                </div>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Verfügbarkeit</h3>
                    <p class="text-gray-700">${currentUser.availability}</p>
                </div>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Skills</h3>
                    <div class="flex flex-wrap">${renderPills(currentUser.skills)}</div>
                </div>
                <div class="mt-8">
                    <h3 class="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">Interessen</h3>
                    <div class="flex flex-wrap">${renderPills(currentUser.interests)}</div>
                </div>
            </div>
        </div>
    `;
};


/**
 * Renders the stack of project cards for the swipe view.
 */
const renderProjectCards = () => {
    swipeView.innerHTML = ''; // Clear previous content

    const projectsToShow = projectsToSwipe.slice(0, 3);

    if (projectsToShow.length === 0) {
        swipeView.innerHTML = `
            <div class="text-center p-10 bg-white rounded-lg shadow-md">
                <h2 class="text-2xl font-bold text-gray-800">Alles durchgeschaut!</h2>
                <p class="text-gray-600 mt-2">Sie haben alle verfügbaren Projekte bewertet. Schauen Sie später wieder vorbei!</p>
                <button id="reset-swipes-btn" class="mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Nochmal von vorne
                </button>
            </div>
        `;
        document.getElementById('reset-swipes-btn').addEventListener('click', () => {
             projectsToSwipe = [...projects];
             swipedProjects = [];
             interestedProjects = [];
             dislikedProjects = [];
             switchView('swipe-view');
        });
        return;
    }

    const cardStackHTML = `
        <div id="card-stack" class="relative w-full h-[550px] max-w-sm flex-grow">
            ${projectsToShow.map((project, index) => `
                <div class="project-card absolute w-full h-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col transition-all duration-300 ease-in-out" style="transform: translateY(${index * 10}px) scale(${1 - (index * 0.05)}); z-index: ${projectsToShow.length - index};">
                    <div class="flex-grow overflow-y-auto">
                        <h2 class="text-2xl font-bold text-gray-800 mb-1">${project.title}</h2>
                        <p class="text-sm font-medium text-gray-500 mb-4">${project.department}</p>
                        <p class="text-gray-700 mb-4">${project.description}</p>
                        <h3 class="font-semibold text-gray-800 mb-2">Benötigte Skills:</h3>
                        <div class="flex flex-wrap gap-2 mb-4">${renderPills(project.requiredSkills)}</div>
                    </div>
                    <div class="flex-shrink-0 pt-4 border-t mt-auto">
                         <div class="flex justify-between text-sm text-gray-600">
                            <span><strong>Aufwand:</strong> ${project.effort}</span>
                            <span><strong>Dauer:</strong> ${project.duration}</span>
                         </div>
                    </div>
                </div>
            `).join('')}
        </div>`;

    const controlsHTML = `
        <div id="swipe-controls" class="flex justify-center items-center gap-6 mt-6 w-full">
            <button id="dislike-btn" class="swipe-btn bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg text-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button id="like-btn" class="swipe-btn bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg text-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>
            </button>
        </div>
    `;

    swipeView.innerHTML = cardStackHTML + controlsHTML;

    document.getElementById('like-btn').addEventListener('click', () => handleSwipe(true));
    document.getElementById('dislike-btn').addEventListener('click', () => handleSwipe(false));
};

/**
 * Renders the matches view.
 */
const renderMatches = () => {
    matchesView.innerHTML = `<h2 class="text-3xl font-bold text-gray-900 mb-6">Matches (Interesse bekundet)</h2>`;
    if (interestedProjects.length === 0) {
        matchesView.innerHTML += `
            <div class="text-center p-10 bg-white rounded-lg shadow-md">
                <p class="text-gray-600">Sie haben bisher bei keinem Projekt Interesse bekundet.</p>
                <p class="text-gray-500 mt-2">Gehen Sie zu "Projekte finden", um loszulegen!</p>
            </div>
        `;
        return;
    }

    const matchesList = document.createElement('div');
    matchesList.className = 'space-y-4';
    interestedProjects.forEach(project => {
        const matchItem = document.createElement('div');
        matchItem.className = 'bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4';
        matchItem.innerHTML = `
            <div>
                <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
                <p class="text-gray-600">Ansprechpartner: ${project.contactPerson}</p>
            </div>
            <div class="flex-shrink-0 flex items-center flex-wrap gap-2 mt-4 sm:mt-0">
                 <button data-project-id="${project.id}" class="view-details-btn bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors">
                    Details ansehen
                </button>
                <a href="mailto:${project.contactEmail}?subject=Interesse am Projekt: ${encodeURIComponent(project.title)}" class="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                    Kontakt aufnehmen
                </a>
                <button data-project-id="${project.id}" class="remove-from-matches-btn bg-red-100 text-red-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-200 transition-colors">
                    Entfernen
                </button>
            </div>
        `;
        matchesList.appendChild(matchItem);
    });
    matchesView.appendChild(matchesList);
};

/**
 * Renders the reconsider view with disliked projects.
 */
const renderReconsider = () => {
    reconsiderView.innerHTML = `<h2 class="text-3xl font-bold text-gray-900 mb-6">Verworfene Projekte</h2>`;
    if (dislikedProjects.length === 0) {
        reconsiderView.innerHTML += `
            <div class="text-center p-10 bg-white rounded-lg shadow-md">
                <p class="text-gray-600">Sie haben bisher keine Projekte abgelehnt.</p>
                <p class="text-gray-500 mt-2">Hier erscheinen Projekte, bei denen Sie auf "Kein Interesse" klicken.</p>
            </div>
        `;
        return;
    }

    const reconsiderList = document.createElement('div');
    reconsiderList.className = 'space-y-4';
    dislikedProjects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4';
        item.innerHTML = `
            <div>
                <h3 class="text-xl font-semibold text-gray-800">${project.title}</h3>
                <p class="text-gray-600">${project.department}</p>
            </div>
            <div class="flex-shrink-0 flex flex-wrap gap-2 mt-4 sm:mt-0">
                <button data-project-id="${project.id}" class="reconsider-btn bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                    Erneut prüfen
                </button>
                <button data-project-id="${project.id}" class="like-from-reconsider-btn bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                    Doch Interesse
                </button>
            </div>
        `;
        reconsiderList.appendChild(item);
    });
    reconsiderView.appendChild(reconsiderList);
};


// ===================================================================
// LOGIC & EVENT HANDLERS
// ===================================================================

/**
 * Shows the project detail modal with information about a specific project.
 * @param {number} projectId The ID of the project to show.
 */
const showProjectDetailsModal = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (!project || !projectDetailModalContent || !projectDetailModalContainer) return;

    projectDetailModalContent.innerHTML = `
        <button id="close-detail-modal-btn" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div class="space-y-4">
            <div>
                <h2 class="text-2xl font-bold text-gray-800">${project.title}</h2>
                <p class="text-sm font-medium text-gray-500">${project.department}</p>
            </div>
            <div class="border-t pt-4">
                 <h3 class="font-semibold text-gray-800 mb-2">Beschreibung</h3>
                 <p class="text-gray-700">${project.description}</p>
            </div>
             <div>
                <h3 class="font-semibold text-gray-800 mb-2">Benötigte Skills</h3>
                <div class="flex flex-wrap gap-2">${renderPills(project.requiredSkills)}</div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div><strong>Aufwand:</strong> ${project.effort}</div>
                    <div><strong>Dauer:</strong> ${project.duration}</div>
                    <div class="col-span-full"><strong>Ansprechpartner:</strong> ${project.contactPerson}</div>
                 </div>
            </div>
        </div>
    `;

    projectDetailModalContainer.classList.remove('hidden');

    document.getElementById('close-detail-modal-btn').addEventListener('click', () => {
        projectDetailModalContainer.classList.add('hidden');
    });
};

/**
 * Switches the visible view.
 * @param {string} viewId - The ID of the view to show.
 */
const switchView = (viewId) => {
    views.forEach(view => {
        view.classList.add('hidden');
    });
    const viewElement = document.getElementById(viewId);
    if (viewElement) {
        viewElement.classList.remove('hidden');
    }

    navLinks.forEach(link => {
        if (link.dataset.view === viewId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Render content for the new view
    switch(viewId) {
        case 'dashboard-view': renderDashboard(); break;
        case 'swipe-view': renderProjectCards(); break;
        case 'profile-view': renderProfile(); break;
        case 'matches-view': renderMatches(); break;
        case 'reconsider-view': renderReconsider(); break;
    }
    
    // Close mobile menu on navigation
    mobileMenu.classList.add('hidden');
};

/**
 * Handles the logic for a swipe action.
 * @param {boolean} liked - True if the user liked the project, false otherwise.
 */
const handleSwipe = (liked) => {
    const topCard = document.querySelector('.project-card:first-of-type');
    const currentProject = projectsToSwipe[0];
    if (!topCard || !currentProject) return;

    // Prevent multiple clicks
    const swipeButtons = document.querySelectorAll('.swipe-btn');
    swipeButtons.forEach(btn => btn.disabled = true);

    const swipeClass = liked ? 'swipe-right' : 'swipe-left';
    topCard.classList.add(swipeClass);

    topCard.addEventListener('transitionend', () => {
        // This logic runs after the card has flown off-screen
        swipedProjects.push(currentProject);
        if (liked) {
            interestedProjects.push(currentProject);
        } else {
            dislikedProjects.push(currentProject);
        }
        projectsToSwipe.shift(); // Remove the swiped project from the queue
        
        renderProjectCards(); // Re-render the card stack
    }, { once: true }); // Ensure this event listener only runs once per swipe
};

/**
 * Moves a disliked project back to the swipe queue.
 * @param {number} projectId The ID of the project to reconsider.
 */
const handleReconsiderProject = (projectId) => {
    const projectIndex = dislikedProjects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return;

    const [projectToReconsider] = dislikedProjects.splice(projectIndex, 1);
    
    // Also remove from general swiped projects list so dashboard count is correct and it can be swiped again
    const swipedIndex = swipedProjects.findIndex(p => p.id === projectId);
    if(swipedIndex > -1) {
        swipedProjects.splice(swipedIndex, 1);
    }
    
    projectsToSwipe.unshift(projectToReconsider); // Add to the front of the swipe queue

    renderReconsider(); // Re-render the current view
    alert(`Das Projekt "${projectToReconsider.title}" wurde zur "Projekte finden"-Liste hinzugefügt.`);
};

/**
 * Moves a disliked project directly to the interested list.
 * @param {number} projectId The ID of the project to like.
 */
/**
 * Moves a project from the interested list back to the swipe queue.
 * @param {number} projectId The ID of the project to remove from matches.
 */
const handleRemoveFromMatches = (projectId) => {
    const projectIndex = interestedProjects.findIndex(p => p.id === projectId);
    if (projectIndex > -1) {
        const [project] = interestedProjects.splice(projectIndex, 1);
        projectsToSwipe.unshift(project); // Add to the beginning of the swipe queue

        // Re-render views
        renderMatches();
        renderProjectCards();

        // Optional: Show a confirmation
        // alert(`Das Projekt "${project.title}" wurde in die "Projekte finden"-Liste verschoben.`);
    }
};

const handleLikeProjectFromReconsider = (projectId) => {
    const projectIndex = dislikedProjects.findIndex(p => p.id === projectId);
    if (projectIndex === -1) return;

    const [projectToLike] = dislikedProjects.splice(projectIndex, 1);
    interestedProjects.push(projectToLike);

    renderReconsider(); // Re-render the current view
    alert(`Sie haben Interesse für "${projectToLike.title}" bekundet.`);
};

/**
 * Toggles the visibility of the "Create Project" modal.
 * @param {boolean} show - True to show the modal, false to hide it.
 */
const toggleModal = (show) => {
    if (show) {
        modalContainer.classList.remove('hidden');
    } else {
        modalContainer.classList.add('hidden');
    }
};

/**
 * Resets the create project form and file list.
 */
const resetCreateProjectForm = () => {
    const form = document.getElementById('create-project-form');
    if (form) {
        form.reset();
    }
    if (fileUploadList) {
        fileUploadList.innerHTML = '';
    }
}


// ===================================================================
// INITIALIZATION
// ===================================================================

/**
 * Initializes the application, sets up event listeners.
 */
const init = () => {
    // Navigation event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = e.currentTarget.dataset.view;
            if (viewId) {
                switchView(viewId);
            }
        });
    });
    
    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Event delegation for various views
    document.body.addEventListener('click', (e) => {
        const target = e.target;

        // Reconsider view buttons
        const reconsiderBtn = target.closest('.reconsider-btn');
        if (reconsiderBtn) {
            const projectId = parseInt(reconsiderBtn.dataset.projectId, 10);
            handleReconsiderProject(projectId);
            return;
        }

        const likeFromReconsiderBtn = target.closest('.like-from-reconsider-btn');
        if (likeFromReconsiderBtn) {
            const projectId = parseInt(likeFromReconsiderBtn.dataset.projectId, 10);
            handleLikeProjectFromReconsider(projectId);
            return;
        }
        
        // Matches view "view details" button
        const viewDetailsBtn = target.closest('.view-details-btn');
        if (viewDetailsBtn) {
            const projectId = parseInt(viewDetailsBtn.dataset.projectId, 10);
            showProjectDetailsModal(projectId);
            return;
        }

        // Matches view "remove" button
        const removeFromMatchesBtn = target.closest('.remove-from-matches-btn');
        if (removeFromMatchesBtn) {
            const projectId = parseInt(removeFromMatchesBtn.dataset.projectId, 10);
            handleRemoveFromMatches(projectId);
            return;
        }
    });


    // Modal event listeners
    document.getElementById('create-project-btn').addEventListener('click', () => toggleModal(true));
    document.getElementById('create-project-btn-mobile').addEventListener('click', () => toggleModal(true));
    document.getElementById('close-modal-btn').addEventListener('click', () => {
        toggleModal(false);
        resetCreateProjectForm();
    });
    document.getElementById('cancel-modal-btn').addEventListener('click', () => {
        toggleModal(false);
        resetCreateProjectForm();
    });
    modalContainer.addEventListener('click', (e) => {
        // Close modal if clicking on the background overlay
        if (e.target === modalContainer) {
            toggleModal(false);
            resetCreateProjectForm();
        }
    });

    // Project Detail Modal close listener
    projectDetailModalContainer.addEventListener('click', (e) => {
        if (e.target === projectDetailModalContainer) {
            projectDetailModalContainer.classList.add('hidden');
        }
    });

    // Handle fake form submission
    document.getElementById('create-project-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Projekt wurde eingereicht! (MVP-Funktionalität)');
        toggleModal(false);
        resetCreateProjectForm();
    });

    // File Upload Logic
    if(dropZone && fileUploadInput && fileUploadList) {
        const handleFiles = (files) => {
            fileUploadList.innerHTML = ''; // Clear previous list
            if (files.length > 0) {
                const file = files[0];
                fileUploadList.innerHTML = `<div class="mt-2 p-2 bg-gray-100 rounded-md text-sm text-gray-800 flex items-center justify-between"><span>${file.name}</span> <span class="text-gray-500 text-xs">${(file.size / 1024).toFixed(2)} KB</span></div>`;
            }
        }

        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-blue-500', 'bg-blue-50');
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-blue-500', 'bg-blue-50');
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-blue-500', 'bg-blue-50');
            const files = e.dataTransfer?.files;
            if (files && files.length > 0) {
                fileUploadInput.files = files;
                handleFiles(files);
            }
        });
        
        fileUploadInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files) {
                handleFiles(files);
            }
        });
    }

    // Set initial view
    switchView('dashboard-view');
};

// Start the app once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
