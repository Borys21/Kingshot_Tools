function updateUpgradeTable(currentStar, currentTier, targetStar, ownedShards) {
  const container = document.getElementById('upgrade-table');
  container.innerHTML = '';
  let cumulativeShards = 0;

  for (let star = currentStar + 1; star <= targetStar; star++) {
    let shardsForThisStar = 0;

    if (star === currentStar + 1) {
      for (let tier = currentTier + 1; tier < 6; tier++) {
        shardsForThisStar += tierShardCosts[currentStar]?.[tier] ?? 0;
      }
    } else {
      for (let tier = 0; tier < 6; tier++) {
        shardsForThisStar += tierShardCosts[star - 1]?.[tier] ?? 0;
      }
    }

    cumulativeShards += shardsForThisStar;
    const missing = Math.max(cumulativeShards - ownedShards, 0);
    const icon = `/assets/icons/star-${star}.png`;

    const row = document.createElement('div');
    row.className = 'upgrade-table-entry';
    row.innerHTML = `
      <img src="${icon}" class="star" />
      <div class="shard-wrapper">
        <img src="/assets/icons/shard.png" />
        <div class="shard-count">${missing}</div>
      </div>
    `;
    container.appendChild(row);
  }
}