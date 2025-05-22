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
  const currentStar = parseInt(document.querySelector('#current-star-fake .selected')?.dataset.value || 0);
  const currentTier = parseInt(document.querySelector('#current-tier-fake .selected')?.dataset.value || 0);
  const targetStar = parseInt(document.querySelector('#target-star-fake .selected')?.dataset.value || 1);
  const ownedShards = parseInt(document.getElementById('owned-shards')?.value || 0);

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
  sendHeight();
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
        <img src="icons/shard-mythic.png" />
        <div class="shard-count">${missing}</div>
      </div>`;
    container.appendChild(row);
  }
}

// === Icon Display ===
function getIconsFor(star, tier) {
  if (tier === 5) {
    return `<img src="icons/star-${star + 1}.png" class="star" />`;
  } else if (star === 0 && tier < 5) {
    return `<img src="icons/tier-${tier + 1}.png" class="star" />`;
  } else {
    return `
      <img src="icons/star-${star}.png" class="star" />
      <img src="icons/tier-${tier + 1}.png" class="star" />
    `;
  }
}

// === Handle Custom Select Logic ===
function syncCustomSelect(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  const options = wrapper?.querySelectorAll('div[data-value]');
  if (!wrapper || !options) return;

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      calculateShards();
    });
  });
}

// === SHARD Button Hold (fixed for mobile) ===
function setupShardButton(id, direction) {
  const btn = document.getElementById(id);
  const input = document.getElementById("owned-shards");
  let interval;
  let delay = 400;
  let stepCount = 0;
  let isHeld = false;

  const changeValue = () => {
    let val = parseInt(input.value) || 0;
    val += direction;
    val = Math.max(0, val);
    const max = parseInt(input.max || "9999");
    val = Math.min(val, max);
    input.value = val;
    calculateShards();
  };

  const startHold = (e) => {
    e.preventDefault(); // zapobiega podwójnym eventom na mobilkach
    if (isHeld) return;
    isHeld = true;
    changeValue();
    stepCount = 0;
    delay = 400;

    interval = setInterval(() => {
      stepCount++;
      if (delay > 50) delay -= 100;
      clearInterval(interval);
      interval = setInterval(changeValue, delay);
    }, delay);
  };

  const stopHold = () => {
    clearInterval(interval);
    isHeld = false;
  };

  btn.addEventListener("pointerdown", startHold);
  btn.addEventListener("pointerup", stopHold);
  btn.addEventListener("pointerleave", stopHold);
  btn.addEventListener("pointercancel", stopHold);
}

// === Send Frame Height to Parent ===
function sendHeight() {
  const height = document.body.scrollHeight;
  window.parent.postMessage({ type: 'resize-frame', height }, '*');
}

// === Send initial height on load ===
document.addEventListener("DOMContentLoaded", () => {
  sendHeight();
});

// === Init on load ===
document.addEventListener("DOMContentLoaded", () => {
  syncCustomSelect("current-star-fake");
  syncCustomSelect("current-tier-fake");
  syncCustomSelect("target-star-fake");
  setupShardButton("shard-decrease", -1);
  setupShardButton("shard-increase", +1);
  calculateShards();
  sendHeight();
});
