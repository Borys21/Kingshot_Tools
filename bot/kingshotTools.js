// bot/kingshotTools.js

const tierShardCosts = {
  0: [1, 1, 2, 2, 2, 2],
  1: [5, 5, 5, 5, 5, 15],
  2: [15, 15, 15, 15, 15, 40],
  3: [40, 40, 40, 40, 40, 100],
  4: [100, 100, 100, 100, 100, 100]
};

function calculateNeededShards(currentStar, currentTier, targetStar, ownedShards) {
  if (targetStar <= currentStar) {
    return { error: "Target Star must be higher than Current Star" };
  }

  let totalShards = 0;
  for (let star = currentStar; star < targetStar; star++) {
    const startTier = (star === currentStar) ? currentTier : 0;
    for (let tier = startTier; tier < 6; tier++) {
      totalShards += tierShardCosts[star][tier];
    }
  }

  const missingShards = Math.max(totalShards - ownedShards, 0);
  const percentOwned = Math.min((ownedShards / totalShards) * 100, 100);

  return {
    totalShards,
    missingShards,
    percentOwned,
    error: null
  };
}

module.exports = { calculateNeededShards };