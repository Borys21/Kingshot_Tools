// === DOM Elements ===
const researchSelect = document.getElementById("research-select");
const levelFromSelect = document.getElementById("level-from");
const levelToSelect = document.getElementById("level-to");
const iconImg = document.getElementById("research-icon");
const romanOutput = document.getElementById("roman-output");

const reqBread = document.getElementById("req-bread");
const reqWood = document.getElementById("req-wood");
const reqStone = document.getElementById("req-stone");
const reqIron = document.getElementById("req-iron");
const reqGold = document.getElementById("req-gold");
const reqList = document.getElementById("req-list");
const perkList = document.getElementById("perk-list");
const baseTimeDisplay = document.getElementById("base-time");

const csInput = document.getElementById("cs-value");
const csMinus = document.getElementById("cs-decrease");
const csPlus = document.getElementById("cs-increase");

const boosterCA = document.getElementById("booster-ca");
const boosterRS = document.getElementById("booster-rs");
const boosterAT = document.getElementById("booster-at");
const boosterDT = document.getElementById("booster-dt");
const boosterGW = document.getElementById("booster-gw");
const boosterCM = document.getElementById("booster-cm");

let currentResearchData = growthResearchData; // domyślnie Growth

// === Roman Numeral Converter ===
function toRoman(num) {
  const romans = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];
  let result = "";
  for (const [sym, val] of romans) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }
  return result;
}

// === Utility Functions ===
function capitalize(text) {
  return text
    .replace(/_/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

function formatTime([d, h, m, s]) {
  const parts = [];
  if (d) parts.push(`${d}d`);
  if (h) parts.push(`${h}h`);
  if (m) parts.push(`${m}m`);
  if (s) parts.push(`${s}s`);
  return parts.length > 0 ? parts.join(" ") : "0s";
}

function timeToSeconds([d, h, m, s]) {
  return d * 86400 + h * 3600 + m * 60 + s;
}

function secondsToTime(seconds) {
  const d = Math.floor(seconds / 86400);
  seconds %= 86400;
  const h = Math.floor(seconds / 3600);
  seconds %= 3600;
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return [d, h, m, s];
}

// === Booster Multipliers ===
function getBoostMultiplier() {
  let bonus =
    parseFloat(csInput.value || 0) +
    parseFloat(boosterCA.value || 0) +
    parseFloat(boosterAT.value || 0);

  if (boosterDT.checked) bonus += 20;
  if (boosterGW.checked) bonus += 10;
  if (boosterCM.checked) bonus += 10;

  return 1 / (1 + bonus / 100);
}

function getResourceMultiplier() {
  return 1 - parseFloat(boosterRS.value || 0) / 100;
}

// === Populate Dropdowns ===
function populateResearchList() {
  researchSelect.innerHTML = "";
  for (const key in currentResearchData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = currentResearchData[key].name;
    researchSelect.appendChild(option);
  }
  // Automatycznie wybierz pierwszy research i przelicz
  if (researchSelect.options.length > 0) {
    researchSelect.value = researchSelect.options[0].value;
    researchSelect.dispatchEvent(new Event("change"));
  }
}

function populateLevels(levels) {
  levelFromSelect.innerHTML = "";
  levelToSelect.innerHTML = "";

  const allLevels = Object.keys(levels).map(Number).sort((a, b) => a - b);
  const toLevels = allLevels.filter(n => n !== 0);

  allLevels.forEach((lvl) => {
    const optFrom = document.createElement("option");
    optFrom.value = lvl;
    optFrom.textContent = lvl;
    levelFromSelect.appendChild(optFrom);
  });

  toLevels.forEach((lvl) => {
    const optTo = document.createElement("option");
    optTo.value = lvl;
    optTo.textContent = lvl;
    levelToSelect.appendChild(optTo);
  });

  levelFromSelect.value = 0;
  levelToSelect.value = 1;
}

// === Main Calculation ===
function calculate() {
  const selectedKey = researchSelect.value;
  const data = currentResearchData[selectedKey];
  const levels = data.levels;

  const from = parseInt(levelFromSelect.value);
  const to = parseInt(levelToSelect.value);

  const fromLvl = levels[from]?.lvl ?? 1;
  const toLvl = levels[to]?.lvl ?? 1;
  romanOutput.textContent = fromLvl === toLvl ? toRoman(fromLvl) : `${toRoman(fromLvl)} > ${toRoman(toLvl)}`;

  let totalSeconds = 0;
  let totalBread = 0;
  let totalWood = 0;
  let totalStone = 0;
  let totalIron = 0;
  let totalGold = 0;
  let allEffects = [];

  for (let lvl = from + 1; lvl <= to; lvl++) {
    const entry = levels[lvl];
    if (!entry) continue;

    totalSeconds += timeToSeconds(entry.time);
    totalBread += entry.costs.bread || 0;
    totalWood += entry.costs.wood || 0;
    totalStone += entry.costs.stone || 0;
    totalIron += entry.costs.iron || 0;
    totalGold += entry.costs.gold || 0;
    if (Array.isArray(entry.effects)) allEffects.push(...entry.effects);
  }

  const timeMult = getBoostMultiplier();
  const resMult = getResourceMultiplier();
  const reducedTime = secondsToTime(totalSeconds * timeMult);

  reqBread.textContent = formatNumber(Math.round(totalBread * resMult));
  reqWood.textContent = formatNumber(Math.round(totalWood * resMult));
  reqStone.textContent = formatNumber(Math.round(totalStone * resMult));
  reqIron.textContent = formatNumber(Math.round(totalIron * resMult));
  reqGold.textContent = formatNumber(Math.round(totalGold * resMult));
  baseTimeDisplay.textContent = `${formatTime(secondsToTime(totalSeconds))} → ${formatTime(reducedTime)}`;

  perkList.innerHTML = "";
  const sumMap = new Map();

  for (const effect of allEffects) {
    const match = effect.match(/^([+\-]?\d+(?:\.\d+)?%?)\s+(.*)$/);
    if (match) {
      const value = parseFloat(match[1].replace('%', ''));
      const unit = match[1].includes('%') ? '%' : '';
      const label = match[2].trim();
      const hadPlus = match[1].trim().startsWith("+");
      const existing = sumMap.get(label) || { value: 0, unit, positive: hadPlus };
      sumMap.set(label, {
        value: existing.value + value,
        unit,
        positive: existing.positive || hadPlus
      });
    } else {
      sumMap.set(effect, { value: null });
    }
  }

  for (const [label, { value, unit, positive }] of sumMap.entries()) {
    const div = document.createElement("div");
    div.className = "perk";
    if (value !== null) {
      const rounded = unit === "%" ? value.toFixed(1) : Math.round(value);
      const prefix = value >= 0 && positive ? "+" : "";
      div.textContent = `${prefix}${formatNumber(rounded)}${unit} ${label}`;
    } else {
      div.textContent = label;
    }
    perkList.appendChild(div);
  }

  reqList.innerHTML = "";
  const allRequirements = {};

  for (let lvl = from + 1; lvl <= to; lvl++) {
    const entry = levels[lvl];
    if (!entry || !entry.requirements) continue;
    for (const key in entry.requirements) {
      const val = entry.requirements[key];
      if (!allRequirements[key] || val > allRequirements[key]) {
        allRequirements[key] = val;
      }
    }
  }

  for (const key in allRequirements) {
    const div = document.createElement("div");
    div.className = "resource";
    div.textContent = `${capitalize(key)}: lvl ${allRequirements[key]}`;
    reqList.appendChild(div);
  }
}

// === Event Listeners ===
researchSelect.addEventListener("change", () => {
  const selected = researchSelect.value;
  const data = currentResearchData[selected]; // <-- poprawka!
  iconImg.src = `icons/${data.icon}`;
  iconImg.alt = data.name;
  populateLevels(data.levels);
  calculate();
});

levelFromSelect.addEventListener("change", () => {
  const from = parseInt(levelFromSelect.value);
  const to = parseInt(levelToSelect.value);
  // Jeśli To <= From, ustaw To na From + 1 (jeśli taka opcja istnieje)
  if (to <= from) {
    const next = from + 1;
    if ([...levelToSelect.options].some(opt => parseInt(opt.value) === next)) {
      levelToSelect.value = next;
    }
  }
  calculate();
});

levelToSelect.addEventListener("change", () => {
  const from = parseInt(levelFromSelect.value);
  const to = parseInt(levelToSelect.value);
  // Jeśli From >= To, ustaw From na To - 1 (jeśli taka opcja istnieje)
  if (from >= to) {
    const prev = to - 1;
    const validFromOption = [...levelFromSelect.options].find(opt => parseInt(opt.value) === prev);
    if (validFromOption) levelFromSelect.value = prev;
  }
  calculate();
});

csMinus.addEventListener("click", () => {
  csInput.value = Math.max(0, parseFloat(csInput.value) - 1);
  calculate();
});

csPlus.addEventListener("click", () => {
  csInput.value = parseFloat(csInput.value) + 1;
  calculate();
});

csInput.addEventListener("input", calculate);
[
  boosterCA,
  boosterRS,
  boosterAT,
  boosterDT,
  boosterGW,
  boosterCM
].forEach(el => el.addEventListener("change", calculate));

function setActiveCategory(btnId) {
  ['btn-growth', 'btn-economy', 'btn-battle'].forEach(id => {
    document.getElementById(id).classList.toggle('active', id === btnId);
  });
}

function populateResearchList() {
  researchSelect.innerHTML = "";
  for (const key in currentResearchData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = currentResearchData[key].name;
    researchSelect.appendChild(option);
  }
  // Automatycznie wybierz pierwszy research i przelicz
  if (researchSelect.options.length > 0) {
    researchSelect.value = researchSelect.options[0].value;
    researchSelect.dispatchEvent(new Event("change"));
  }
}

// Obsługa kliknięć przycisków kategorii
document.getElementById('btn-growth').addEventListener('click', () => {
  currentResearchData = growthResearchData;
  populateResearchList();
  setActiveCategory('btn-growth');
});
document.getElementById('btn-economy').addEventListener('click', () => {
  currentResearchData = economyResearchData;
  populateResearchList();
  setActiveCategory('btn-economy');
});
document.getElementById('btn-battle').addEventListener('click', () => {
  currentResearchData = battleResearchData;
  populateResearchList();
  setActiveCategory('btn-battle');
});

// Na start ustaw Growth jako aktywne
setActiveCategory('btn-growth');
populateResearchList();