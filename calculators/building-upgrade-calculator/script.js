// === DOM elements ===
const buildingSelect = document.getElementById("building-select");
const levelFrom = document.getElementById("level-from");
const levelTo = document.getElementById("level-to");
const iconElement = document.getElementById("building-icon");

const reqList = document.getElementById("req-list");
const breadCost = document.getElementById("req-bread");
const woodCost = document.getElementById("req-wood");
const stoneCost = document.getElementById("req-stone");
const ironCost = document.getElementById("req-iron");
const tgoldCost = document.getElementById("req-tgold");
const buildTime = document.getElementById("base-time");
const effectsList = document.getElementById("perk-list");

const csValue = document.getElementById("cs-value");
const boosterCA = document.getElementById("booster-ca");
const boosterRS = document.getElementById("booster-rs");
const boosterAT = document.getElementById("booster-at");
const boosterDT = document.getElementById("booster-dt");
const boosterGW = document.getElementById("booster-gw");
const boosterCM = document.getElementById("booster-cm");

// === Format numbers with commas ===
function formatNumber(value) {
  return value.toLocaleString("en-US");
}

// === Convert time array [d,h,m,s] to total seconds ===
function timeArrayToSeconds([d, h, m, s]) {
  return (d * 86400) + (h * 3600) + (m * 60) + s;
}

// === Format seconds to readable string ===
function formatTime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const parts = [];
  if (d > 0) parts.push(`${d}d`);
  if (h > 0 || d > 0) parts.push(`${h}h`);
  if (m > 0 || h > 0 || d > 0) parts.push(`${m}m`);
  parts.push(`${s}s`);

  return parts.join(" ");
}

// === Capitalize helper ===
function capitalize(text) {
  return text
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// === Capitalize helper ===
function capitalize(text) {
  // Converts text like "town_center" to "Town Center"
  return text
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// === Populate building dropdown ===
function populateBuildingDropdown() {
  for (const key in buildingsData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = buildingsData[key].name;
    buildingSelect.appendChild(option);
  }
}

// === Populate From/To dropdowns ===
function populateLevelDropdowns() {
  const selectedBuilding = buildingSelect.value || Object.keys(buildingsData)[0];
  const data = buildingsData[selectedBuilding];
  const levels = data.levels;
  const levelNumbers = Object.keys(levels).map(Number).sort((a, b) => a - b);
  const minLevel = Math.min(...levelNumbers);
  const maxLevel = Math.max(...levelNumbers);

  levelFrom.innerHTML = "";
  levelTo.innerHTML = "";

  // From: od minLevel do maxLevel-1
  for (let i = minLevel; i < maxLevel; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    levelFrom.appendChild(opt);
  }

  // To: od minLevel+1 do maxLevel
  for (let i = minLevel + 1; i <= maxLevel; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    levelTo.appendChild(opt);
  }

  // Ustaw domyślne wartości
  levelFrom.value = minLevel;
  levelTo.value = minLevel + 1;
}

// === Auto-set To = From + 1 on change ===
levelFrom.addEventListener("change", () => {
  const from = parseInt(levelFrom.value);
  const next = from + 1;

  const validToOption = [...levelTo.options].find(opt => parseInt(opt.value) === next);
  if (validToOption) {
    levelTo.value = next;
  }

  updateRangeDisplay();
});

// === Main Update Function ===
function updateRangeDisplay() {
  const selectedBuilding = buildingSelect.value;
  const fromLevel = parseInt(levelFrom.value);
  const toLevel = parseInt(levelTo.value);

  if (!selectedBuilding || isNaN(fromLevel) || isNaN(toLevel)) return;
  if (toLevel < fromLevel) return;

  const data = buildingsData[selectedBuilding];

  let totalBread = 0;
  let totalWood = 0;
  let totalStone = 0;
  let totalIron = 0;
  let totalTgold = 0;
  let totalTime = 0;
  let allEffects = [];
  const allRequirements = {};

  for (let lvl = fromLevel + 1; lvl <= toLevel; lvl++) {
    const levelData = data.levels[lvl];
    if (!levelData) continue;

    const rsPercent = parseFloat(boosterRS.value) || 0;
    const costMultiplier = 1 - (rsPercent / 100);

    totalBread += Math.ceil((levelData.costs?.bread ?? 0) * costMultiplier);
    totalWood += Math.ceil((levelData.costs?.wood ?? 0) * costMultiplier);
    totalStone += Math.ceil((levelData.costs?.stone ?? 0) * costMultiplier);
    totalIron += Math.ceil((levelData.costs?.iron ?? 0) * costMultiplier);
    totalTgold += Math.ceil((levelData.costs?.tgold ?? 0) * costMultiplier);

    totalTime += timeArrayToSeconds(levelData.time ?? [0, 0, 0, 0]);

    if (Array.isArray(levelData.effects)) {
      allEffects.push(...levelData.effects);
    }

    if (levelData.requirements) {
      for (const key in levelData.requirements) {
        const val = levelData.requirements[key];
        if (!allRequirements[key] || val > allRequirements[key]) {
          allRequirements[key] = val;
        }
      }
    }
  }

  // === Boosters ===
  const baseCS = parseFloat(csValue.value.replace('%', '')) || 0;
  const ca = parseFloat(boosterCA.value) || 0;
  const rs = parseFloat(boosterRS.value) || 0;
  const at = parseFloat(boosterAT.value) || 0;
  const dt = boosterDT.checked ? 20 : 0;
  const gw = boosterGW.checked ? 10 : 0;
  const cm = boosterCM.checked ? 10 : 0;

  let totalBoost = baseCS + ca + rs + at + dt + gw + cm;
  const finalTime = Math.floor(totalTime / (1 + totalBoost / 100));

  // === Update DOM ===
  breadCost.textContent = formatNumber(totalBread);
  woodCost.textContent = formatNumber(totalWood);
  stoneCost.textContent = formatNumber(totalStone);
  ironCost.textContent = formatNumber(totalIron);
  tgoldCost.textContent = formatNumber(totalTgold);
  buildTime.textContent = `${formatTime(totalTime)} → ${formatTime(finalTime)}`;

  // Requirements
  reqList.innerHTML = "";
  for (const key in allRequirements) {
    const div = document.createElement("div");
    div.className = "resource";
    div.innerHTML = `<span>${capitalize(key)}: lvl ${allRequirements[key]}</span>`;
    reqList.appendChild(div);
  }

  // === Perks ===
effectsList.innerHTML = "";
const effectMap = new Map();

for (let lvl = fromLevel + 1; lvl <= toLevel; lvl++) {
  const levelData = data.levels[lvl];
  if (!levelData || !Array.isArray(levelData.effects)) continue;

  levelData.effects.forEach(effect => {
    const match = effect.match(/^(\+?[\d,.%]+)\s+(.*)$/);
    if (match) {
      const label = match[2].trim();
      // Always override to keep the latest effect
      effectMap.set(label, effect);
    } else {
      // Non-numeric effect (e.g. unlocks), use whole text as key
      effectMap.set(effect, effect);
    }
  });
}

for (const value of effectMap.values()) {
  const div = document.createElement("div");
  div.className = "perk";

  const match = value.match(/^(\+?[\d,]+)(\s.+)$/); // tylko liczby całkowite
  if (match) {
    const formatted = formatNumber(parseInt(match[1].replace(/,/g, '')));
    div.textContent = `${match[1].includes(",") ? match[1] : formatted}${match[2]}`;
  } else {
    div.textContent = value;
  }

  effectsList.appendChild(div);
}

  iconElement.src = `icons/${data.icon}`;
  iconElement.alt = data.name;
}

// === Event Listeners ===
buildingSelect.addEventListener("change", () => {
  populateLevelDropdowns();
  updateRangeDisplay();
});
// === Auto-set To = From + 1 on change ===
levelFrom.addEventListener("change", () => {
  const from = parseInt(levelFrom.value);
  const next = from + 1;

  // Ustaw tylko jeśli To >= From + 1 oraz istnieje taka opcja
  if ([...levelTo.options].some(opt => parseInt(opt.value) === next)) {
    levelTo.value = next;
  }

  updateRangeDisplay();
});
// === Auto-correct From if To < From ===
levelTo.addEventListener("change", () => {
  const from = parseInt(levelFrom.value);
  const to = parseInt(levelTo.value);

  // Jeśli To < From, to ustaw From na To - 1, jeśli istnieje taka opcja
  if (to < from) {
    const prev = to - 1;
    const validFromOption = [...levelFrom.options].find(opt => parseInt(opt.value) === prev);
    if (validFromOption) {
      levelFrom.value = prev;
    }
  }

  updateRangeDisplay();
});
csValue.addEventListener("input", updateRangeDisplay);
boosterCA.addEventListener("change", updateRangeDisplay);
boosterRS.addEventListener("change", updateRangeDisplay);
boosterAT.addEventListener("change", updateRangeDisplay);
boosterDT.addEventListener("change", updateRangeDisplay);
boosterGW.addEventListener("change", updateRangeDisplay);
boosterCM.addEventListener("change", updateRangeDisplay);

// === Init after both DOM and buildingsData ===
function tryInitCalculator() {
  if (document.readyState === "complete" && typeof buildingsData !== "undefined") {
    populateBuildingDropdown();
    populateLevelDropdowns();
    updateRangeDisplay();
  } else {
    setTimeout(tryInitCalculator, 50); // retry co 50ms
  }
}

tryInitCalculator();

// === CS Button Hold (mobile-safe) ===
function setupCSButton(id, direction) {
  const btn = document.getElementById(id);
  const input = document.getElementById("cs-value");
  let interval;
  let delay = 400;
  let stepCount = 0;
  let isHeld = false;

  const changeValue = () => {
    let val = parseFloat(input.value.replace('%', '')) || 0;
    val += direction * 0.1;
    val = Math.min(100, Math.max(0, val));
    input.value = val.toFixed(1);
    updateRangeDisplay();
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

setupCSButton("cs-decrease", -1);
setupCSButton("cs-increase", +1);