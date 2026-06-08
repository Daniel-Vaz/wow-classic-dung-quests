// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
let currentDungeonId = 'rfc';
let currentFilter = 'all';
let currentView = 'grid';
let searchQuery = '';
let completed = JSON.parse(localStorage.getItem('wow_completed') || '{}');
let locationFilter = null;

// ═══════════════════════════════════════
//  INIT
// ═══════════════════════════════════════
function init() {
  buildDungeonTabs();
  buildFilterBtns();
  bindControls();
  selectDungeon('rfc');
}

// ═══════════════════════════════════════
//  BUILD TABS
// ═══════════════════════════════════════
function buildDungeonTabs() {
  const nav = document.getElementById('dungeonTabs');
  DUNGEONS.forEach(d => {
    const tab = document.createElement('div');
    tab.className = 'dungeon-tab' + (d.id === currentDungeonId ? ' active' : '');
    tab.dataset.id = d.id;
    tab.innerHTML = `${d.icon} ${d.abbr}<span class="tab-level">${d.levels}</span>`;
    tab.addEventListener('click', () => selectDungeon(d.id));
    nav.appendChild(tab);
  });
}

// ═══════════════════════════════════════
//  SELECT DUNGEON
// ═══════════════════════════════════════
function selectDungeon(id) {
  currentDungeonId = id;
  locationFilter = null;
  document.querySelectorAll('.dungeon-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.id === id);
  });
  const dungeon = DUNGEONS.find(d => d.id === id);
  if (!dungeon) return;
  renderDungeonHeader(dungeon);
  renderSidebar(dungeon);
  renderQuests();
}

// ═══════════════════════════════════════
//  DUNGEON HEADER
// ═══════════════════════════════════════
function renderDungeonHeader(dungeon) {
  document.getElementById('dungeonHeaderIcon').textContent = dungeon.icon;
  document.getElementById('dungeonHeaderName').textContent = dungeon.name;
  const completedCount = dungeon.quests.filter(q => completed[dungeon.id + '::' + q.name]).length;
  document.getElementById('dungeonHeaderMeta').innerHTML = `
    <span class="dungeon-meta-item">LEVELS<strong>${dungeon.levels}</strong></span>
    <span class="dungeon-meta-item">FACTION<strong>${dungeon.faction}</strong></span>
    <span class="dungeon-meta-item">LOCATION<strong>${dungeon.location}</strong></span>
    <span class="dungeon-meta-item">QUESTS<strong>${dungeon.quests.length}</strong></span>
  `;
  const pct = dungeon.quests.length ? (completedCount / dungeon.quests.length * 100) : 0;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressFraction').textContent = `${completedCount} / ${dungeon.quests.length}`;
  renderStatsBar(dungeon);
}

// ═══════════════════════════════════════
//  STATS BAR
// ═══════════════════════════════════════
function renderStatsBar(dungeon) {
  const totalXP = dungeon.quests.reduce((s, q) => s + (q.xp || 0), 0);
  const questsWithItems = dungeon.quests.filter(q => q.items.length > 0).length;
  const questsWithRewards = dungeon.quests.filter(q => q.rewards).length;
  const completedCount = dungeon.quests.filter(q => completed[dungeon.id + '::' + q.name]).length;
  document.getElementById('statsBar').innerHTML = `
    <div class="stat-item">
      <div class="stat-num">${dungeon.quests.length}</div>
      <div class="stat-label">Total Quests</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color:#84d4a0">${totalXP.toLocaleString()}</div>
      <div class="stat-label">Total XP</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color:#c8a0d4">${questsWithItems}</div>
      <div class="stat-label">Gear Rewards</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color:var(--green-uncommon)">${questsWithRewards}</div>
      <div class="stat-label">Other Rewards</div>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item">
      <div class="stat-num" style="color:var(--gold)">${completedCount}</div>
      <div class="stat-label">Completed</div>
    </div>
  `;
}

// ═══════════════════════════════════════
//  SIDEBAR
// ═══════════════════════════════════════
function renderSidebar(dungeon) {
  // Locations
  const locs = [...new Set(dungeon.quests.map(q => q.startLoc.split(',')[0].trim()))];
  const locList = document.getElementById('locationList');
  locList.innerHTML = '';
  locs.forEach(loc => {
    const count = dungeon.quests.filter(q => q.startLoc.startsWith(loc)).length;
    const item = document.createElement('div');
    item.className = 'sidebar-item' + (locationFilter === loc ? ' active' : '');
    item.innerHTML = `<span>${loc}</span><span class="sidebar-item-count">${count}</span>`;
    item.addEventListener('click', () => {
      locationFilter = locationFilter === loc ? null : loc;
      renderSidebar(dungeon);
      renderQuests();
    });
    locList.appendChild(item);
  });

  // Prequests
  const pqs = dungeon.quests.filter(q => q.prequest);
  const pqList = document.getElementById('prequestList');
  pqList.innerHTML = '';
  if (pqs.length === 0) {
    pqList.innerHTML = '<div class="sidebar-item" style="font-style:italic;color:var(--text-dim);font-size:0.78rem">None for this dungeon</div>';
  } else {
    pqs.forEach(q => {
      const item = document.createElement('div');
      item.className = 'sidebar-item';
      item.innerHTML = `<span style="font-size:0.78rem;color:var(--text-main)">${q.name}</span>`;
      item.title = `Requires: ${q.prequest}`;
      pqList.appendChild(item);
    });
  }
}

// ═══════════════════════════════════════
//  RENDER QUESTS
// ═══════════════════════════════════════
function renderQuests() {
  const dungeon = DUNGEONS.find(d => d.id === currentDungeonId);
  if (!dungeon) return;
  const container = document.getElementById('quest-container');
  container.className = currentView === 'grid' ? 'grid-view' : 'list-view';

  let quests = dungeon.quests.filter(q => {
    const key = dungeon.id + '::' + q.name;
    const isComplete = !!completed[key];
    if (currentFilter === 'has-items') return q.items.length > 0;
    if (currentFilter === 'has-rewards') return !!q.rewards;
    if (currentFilter === 'completed') return isComplete;
    if (currentFilter === 'incomplete') return !isComplete;
    return true;
  });

  if (locationFilter) {
    quests = quests.filter(q => q.startLoc.startsWith(locationFilter));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    quests = quests.filter(quest =>
      quest.name.toLowerCase().includes(q) ||
      quest.startNpc.toLowerCase().includes(q) ||
      quest.endNpc.toLowerCase().includes(q) ||
      quest.startLoc.toLowerCase().includes(q) ||
      quest.endLoc.toLowerCase().includes(q) ||
      quest.items.some(i => i.toLowerCase().includes(q)) ||
      quest.notes.toLowerCase().includes(q)
    );
  }

  document.getElementById('visibleCount').textContent = quests.length;
  container.innerHTML = '';

  if (quests.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📜</div>
        <div class="empty-state-text">NO QUESTS FOUND</div>
        <div style="margin-top:8px;font-size:0.78rem;color:var(--text-dim)">Adjust your search or filters</div>
      </div>`;
    return;
  }

  quests.forEach(quest => {
    const key = dungeon.id + '::' + quest.name;
    const isComplete = !!completed[key];
    const card = document.createElement('div');
    card.className = 'quest-card' + (isComplete ? ' completed' : '');

    const itemsHtml = quest.items.length
      ? `<div class="quest-row"><span class="quest-label">Items</span><span class="quest-value items">${quest.items.join('<br>')}</span></div>`
      : '';
    const rewardHtml = quest.rewards
      ? `<div class="quest-row"><span class="quest-label">Reward</span><span class="quest-value reward">${quest.rewards}</span></div>`
      : '';
    const prequestHtml = quest.prequest
      ? `<div class="quest-row"><span class="quest-label">Req.</span><span class="quest-value prequest">${quest.prequest}</span></div>`
      : '';
    const notesHtml = quest.notes
      ? `<div class="quest-row"><span class="quest-label">Note</span><span class="quest-value note">${quest.notes}</span></div>`
      : '';

    card.innerHTML = `
      <div class="quest-card-header">
        <div class="quest-checkbox">${isComplete ? '✓' : ''}</div>
        <div class="quest-name">${quest.name}</div>
        ${quest.levels ? `<div class="quest-level-badge">Lv ${quest.levels}</div>` : ''}
      </div>
      <div class="quest-card-body">
        <div class="quest-row">
          <span class="quest-label">Start</span>
          <span class="quest-value">${quest.startNpc} <span class="location">— ${quest.startLoc}</span></span>
        </div>
        ${quest.endNpc !== quest.startNpc ? `
        <div class="quest-row">
          <span class="quest-label">Turn in</span>
          <span class="quest-value">${quest.endNpc} <span class="location">— ${quest.endLoc}</span></span>
        </div>` : ''}
        ${prequestHtml}
        ${itemsHtml}
        ${rewardHtml}
        ${notesHtml}
      </div>
      <div class="quest-card-footer">
        ${quest.xp ? `<div class="xp-pill">⭐ ${quest.xp.toLocaleString()} XP</div>` : ''}
        ${quest.rewards ? `<div class="reward-pill">🎁 ${quest.rewards}</div>` : ''}
        ${quest.questLink ? `<a href="${quest.questLink}" target="_blank" rel="noopener noreferrer" class="wowhead-link-btn" title="View on Wowhead">🔗 Wowhead</a>` : ''}
        <button class="complete-btn" data-key="${key}">${isComplete ? '↩ Undo' : '✓ Complete'}</button>
      </div>
    `;

    // Toggle expand in list view
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('complete-btn')) return;
      if (currentView === 'list') card.classList.toggle('expanded');
    });

    // Complete button
    const btn = card.querySelector('.complete-btn');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      completed[key] = !completed[key];
      if (!completed[key]) delete completed[key];
      localStorage.setItem('wow_completed', JSON.stringify(completed));
      renderDungeonHeader(dungeon);
      renderQuests();
    });

    container.appendChild(card);
  });
}

// ═══════════════════════════════════════
//  CONTROLS
// ═══════════════════════════════════════
function buildFilterBtns() {}

function bindControls() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderQuests();
  });

  document.getElementById('filterGroup').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderQuests();
  });

  document.getElementById('gridViewBtn').addEventListener('click', () => {
    currentView = 'grid';
    document.getElementById('gridViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    renderQuests();
  });

  document.getElementById('listViewBtn').addEventListener('click', () => {
    currentView = 'list';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('gridViewBtn').classList.remove('active');
    renderQuests();
  });
}

init();
