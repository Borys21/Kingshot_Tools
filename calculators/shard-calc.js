const shardRequirements = {
  0: [1, 1, 2, 2, 2, 2], // 0 stars: fragment 1-2 = 1 shard, 3-6 = 2 shards
  1: [5, 5, 5, 5, 5, 15], // 1 star: fragment 1-5 = 5 shards, 6 = 15 shards
  2: [15, 15, 15, 15, 15, 40], // 2 stars: fragment 1-5 = 15 shards, 6 = 40 shards
  3: [40, 40, 40, 40, 40, 100], // 3 stars: fragment 1-5 = 40 shards, 6 = 100 shards
  4: [100, 100, 100, 100, 100, 100], // 4 stars: all fragments = 100 shards
};

function calculateShards() {
  const currentStar = parseInt(document.getElementById('current-star').value);
  const currentShards = parseInt(document.getElementById('current-shards').value);
  const targetStar = parseInt(document.getElementById('target-star').value);
  const resultEl = document.getElementById('result');

  if (targetStar <= currentStar) {
    resultEl.textContent = "⚠️ Target star must be higher than current star.";
    return;
  }

  let total = 0;
  let breakdown = [];

  // Calculate shards needed to complete the current star level
  if (currentShards < 6) {
    for (let i = currentShards; i < 6; i++) {
      total += shardRequirements[currentStar][i];
      breakdown.push(
        `★ ${currentStar} fragment ${i + 1}: ${shardRequirements[currentStar][i]} shards`
      );
    }
  }

  // Calculate shards needed for full star upgrades
  for (let i = currentStar + 1; i <= targetStar; i++) {
    const starCost = shardRequirements[i - 1].reduce((a, b) => a + b, 0);
    total += starCost;
    breakdown.push(`★ ${i - 1} → ★ ${i}: ${starCost} shards`);
  }

  resultEl.innerHTML = `
    Total shards needed: <b>${total}</b><br><br>
    Breakdown:<br>${breakdown.join("<br>")}
  `;
}
