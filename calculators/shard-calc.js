// === Tier Shard Cost Table ===
const tierShardCosts = {
  0: [1, 1, 2, 2, 2, 2],
  1: [5, 5, 5, 5, 5, 15],
  2: [15, 15, 15, 15, 15, 40],
  3: [40, 40, 40, 40, 40, 100],
  4: [100, 100, 100, 100, 100, 100]
};

// === Main Calculation Function ===
function calculateShards() {
  const currentStar = parseInt(document.getElementById('current-star').value);
  const currentTier = parseInt(document.getElementById('current-tier').value);
  const targetStar = parseInt(document.getElementById('target-star').value);
  const ownedShards = parseInt(document.getElementById('owned-shards').value) || 0;

  const totalDisplay = document.getElementById('total-shards');
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  if (targetStar <= currentStar) {
    totalDisplay.textContent = "0";
    progressFill.style.width = "0%";
    progressText.textContent = "✕ Target Star must be higher than Current Star";
    progressText.className = "progress-bar-text";
    document.getElementById('upgrade-table').innerHTML = "";
    return;
  }

  let totalShards = 0;
  for (let star = currentStar; star < targetStar; star++) {
    const startTier = (star === currentStar) ? currentTier : 0;
    for (let tier = startTier; tier < 6; tier++) {
      totalShards += tierShardCosts[star][tier];
    }
  }

  const missing = Math.max(totalShards - ownedShards, 0);
  const percent = Math.min((ownedShards / totalShards) * 100, 100);

  totalDisplay.textContent = totalShards;
  document.getElementById('owned-shards').max = totalShards;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = missing === 0
    ? "✓ Enough shards to upgrade!"
    : `Missing: ${missing}`;
  progressText.className = "progress-bar-text";

  updateUpgradeTable(currentStar, currentTier, targetStar, ownedShards);
}

// === Upgrade Status Display ===
function updateUpgradeTable(currentStar, currentTier, targetStar, ownedShards) {
  const container = document.getElementById('upgrade-table');
  container.innerHTML = '';
  let shardCounter = 0;
  let lastAchieved = null;
  let nextUpgrade = null;

  outerLoop:
  for (let star = currentStar; star < targetStar; star++) {
    const startTier = (star === currentStar) ? currentTier : 0;
    for (let tier = startTier; tier < 6; tier++) {
      const cost = tierShardCosts[star][tier];
      shardCounter += cost;

      if (shardCounter <= ownedShards) {
        lastAchieved = { star, tier };
      } else {
        nextUpgrade = { star, tier, missing: shardCounter - ownedShards };
        break outerLoop;
      }
    }
  }

  if (lastAchieved) {
    const { star, tier } = lastAchieved;
    const row = document.createElement('div');
    row.className = 'upgrade-table-entry';
    row.innerHTML = `${getIconsFor(star, tier)}<div class="checkmark">✓</div>`;
    container.appendChild(row);
  }

  if (nextUpgrade) {
    const { star, tier, missing } = nextUpgrade;
    const row = document.createElement('div');
    row.className = 'upgrade-table-entry';
    row.innerHTML = `
      ${getIconsFor(star, tier)}
      <div class="shard-wrapper">
        <img src="/assets/icons/shard-mythic.png" />
        <div class="shard-count">${missing}</div>
      </div>`;
    container.appendChild(row);
  }
}

// === Icon Display Logic ===
function getIconsFor(star, tier) {
  if (tier === 5) {
    return `<img src="/assets/icons/star-${star + 1}.png" class="star" />`;
  } else if (star === 0 && tier < 5) {
    return `<img src="/assets/icons/tier-${tier + 1}.png" class="star" />`;
  } else {
    return `
      <img src="/assets/icons/star-${star}.png" class="star" />
      <img src="/assets/icons/tier-${tier + 1}.png" class="star" />
    `;
  }
}

// === Select UI Sync (Custom Selects) ===
function syncCustomSelect(wrapperId, selectId) {
  const wrapper = document.getElementById(wrapperId);
  const select = document.getElementById(selectId);
  const options = wrapper.querySelectorAll('div[data-value]');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const value = opt.getAttribute('data-value');
      select.value = value;
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      calculateShards();
    });
  });
}

// === Init on DOM Ready ===
document.addEventListener('readystatechange', () => {
  if (document.readyState === "complete") {
    syncCustomSelect('current-star-fake', 'current-star');
    syncCustomSelect('target-star-fake', 'target-star');
    syncCustomSelect('current-tier-fake', 'current-tier');
    document.getElementById('owned-shards').addEventListener('input', calculateShards);
    calculateShards();
  }
});