const app = document.getElementById('app');
const profileTemplate = document.getElementById('profile-screen-template');
const dashboardTemplate = document.getElementById('dashboard-template');
const modal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');

const profileOrder = ['adam', 'gurpreet', 'sebastian', 'team'];
let activeProfileKey = null;
let transitionTimer = null;


const heroBanners = {
  adam: 'assets/adam-banner.png',
  gurpreet: 'assets/gurpreet-banner.png',
  sebastian: 'assets/sebastian-banner.png',
  team: 'assets/team-banner.png'
};

const profileImages = {
  adam: 'assets/adam-profile.jpg',
  gurpreet: 'assets/gurpreet-profile.jpg',
  sebastian: 'assets/sebastian-profile.jpg',
  team: 'assets/team-profile.png'
};

function getProfileDisplayName(key) {
  if (key === 'team') return 'Team Profile';
  return swotData[key].name;
}

function getProfileSwitchName(key) {
  if (key === 'team') return 'Team';
  return swotData[key].name;
}

function getTileImage(profileKey, categoryKey, index, item) {
  return getFinancialTileImage(profileKey, categoryKey, index, item);
}

function showProfiles() {
  activeProfileKey = null;
  history.replaceState({}, '', window.location.pathname);
  app.innerHTML = '';
  app.appendChild(profileTemplate.content.cloneNode(true));
  const grid = document.getElementById('profileGrid');

  profileOrder.forEach(key => {
    const profile = swotData[key];
    const btn = document.createElement('button');
    btn.className = 'profile-card';
    btn.type = 'button';
    btn.setAttribute('aria-label', `Open ${getProfileDisplayName(key)} SWOT`);
    btn.innerHTML = `
      <div class="profile-avatar profile-photo-wrap">
        <img src="${profileImages[key]}" alt="${getProfileDisplayName(key)} picture" class="profile-photo">
      </div>
      <div class="profile-name">${getProfileDisplayName(key)}</div>
    `;
    btn.addEventListener('click', () => launchProfile(key));
    grid.appendChild(btn);
  });

  document.querySelector('.brand-button').addEventListener('click', showProfiles);
}

function launchProfile(key) {
  if (transitionTimer) clearTimeout(transitionTimer);
  const existing = document.querySelector('.swotflix-transition');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'swotflix-transition';
  overlay.innerHTML = `
    <div class="transition-bars" aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
    <div class="transition-word" aria-label="SWOTFLIX">SWOTFLIX</div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('play'));

  transitionTimer = setTimeout(() => {
    showDashboard(key);
    overlay.classList.add('exit');
    setTimeout(() => overlay.remove(), 520);
  }, 1250);
}

function renderProfileSwitcher(activeKey) {
  const switcher = document.createElement('div');
  switcher.className = 'profile-switcher';
  switcher.setAttribute('aria-label', 'Switch SWOT profile');

  profileOrder.forEach(key => {
    const p = swotData[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `switch-profile ${key === activeKey ? 'active' : ''}`;
    btn.setAttribute('aria-label', `Switch to ${getProfileDisplayName(key)}`);
    btn.innerHTML = `
      <span class="switch-avatar switch-photo-wrap"><img src="${profileImages[key]}" alt="" class="switch-photo"></span>
      <span class="switch-name">${getProfileSwitchName(key)}</span>
    `;
    btn.addEventListener('click', () => {
      if (key !== activeKey) launchProfile(key);
    });
    switcher.appendChild(btn);
  });
  return switcher;
}

function showDashboard(key) {
  activeProfileKey = key;
  const profile = swotData[key];
  history.replaceState({}, '', `#${key}`);
  app.innerHTML = '';
  app.appendChild(dashboardTemplate.content.cloneNode(true));

  const bar = document.querySelector('.dashboard-bar');
  bar.insertBefore(renderProfileSwitcher(key), bar.querySelector('.nav-actions'));

  const hero = document.getElementById('hero');
  hero.classList.add(profile.heroClass);
  hero.style.backgroundImage = `url("${heroBanners[key]}")`;
  document.getElementById('heroName').textContent = key === 'team' ? 'The Team' : profile.name;
  document.getElementById('heroTagline').textContent = profile.tagline;
  document.getElementById('heroMeta').innerHTML = profile.meta.map(item => `<span>${item}</span>`).join('');

  const mini = document.getElementById('miniAvatar');
  mini.innerHTML = `<img src="${profileImages[key]}" alt="${getProfileDisplayName(key)}">`;
  mini.classList.add('mini-photo-wrap');

  const rows = document.getElementById('rows');
  Object.entries(categoryConfig).forEach(([categoryKey, config]) => {
    const row = document.createElement('section');
    row.className = 'swot-row';
    row.id = `row-${categoryKey}`;
    row.innerHTML = `
      <div class="row-heading">
        <h2>${config.label} <em>(${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)})</em></h2>
        <span>${config.description}</span>
      </div>
      <div class="card-track"></div>
    `;

    const track = row.querySelector('.card-track');
    profile.categories[categoryKey].forEach((item, index) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `swot-card ${config.accent}`;
      card.dataset.index = String(index + 1).padStart(2, '0');
      const explanation = profile.explanations?.[categoryKey]?.[index] || `${item} shapes how this profile performs in this part of the story.`;
      const bg = getTileImage(key, categoryKey, index, item);
      card.style.setProperty('--tile-image', `url("${bg}")`);
      card.innerHTML = `
        <div class="card-shade"></div>
        <div class="card-title">${item}</div>
        <div class="card-explanation">${explanation}</div>
        <div class="card-progress"><span></span></div>
      `;
      card.addEventListener('click', () => openDetail(profile, key, categoryKey, item, explanation, index));
      track.appendChild(card);
    });
    rows.appendChild(row);
  });

  document.getElementById('homeButton').addEventListener('click', showProfiles);
  document.getElementById('browseButton').addEventListener('click', showProfiles);
  document.getElementById('playStrengths').addEventListener('click', () => {
    document.getElementById('row-strengths').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  document.getElementById('aboutButton').addEventListener('click', () => openAbout(profile, key));
}

function openDetail(profile, profileKey, categoryKey, text, explanation, index) {
  const config = categoryConfig[categoryKey];
  document.getElementById('modalVisual').className = `modal-visual ${config.accent}`;
  document.getElementById('modalVisual').style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,.72), rgba(0,0,0,.12)), url("${getTileImage(profileKey, categoryKey, index, text)}")`;
  document.getElementById('modalKicker').textContent = `${config.label} • Episode ${index + 1}`;
  document.getElementById('modalTitle').textContent = text;
  document.getElementById('modalText').textContent = explanation;
  document.getElementById('modalMeta').textContent = `${keyToModalName(profileKey)} • SWOT category: ${categoryKey}`;
  modal.showModal();
}

function keyToModalName(profileKey) {
  return profileKey === 'team' ? 'Team Profile' : swotData[profileKey].name;
}

function openAbout(profile, profileKey) {
  document.getElementById('modalVisual').className = `modal-visual ${profile.heroClass}`;
  document.getElementById('modalVisual').style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,.68), rgba(0,0,0,.18)), url("${profileImages[profileKey]}")`;
  document.getElementById('modalKicker').textContent = 'Profile overview';
  document.getElementById('modalTitle').textContent = profile.subtitle;
  document.getElementById('modalText').textContent = profile.tagline;
  document.getElementById('modalMeta').textContent = profile.meta.join(' • ');
  modal.showModal();
}

modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  const box = modal.getBoundingClientRect();
  const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
  if (!inside) modal.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) modal.close();
});

const hash = window.location.hash.replace('#', '');
if (hash && swotData[hash]) showDashboard(hash);
else showProfiles();
