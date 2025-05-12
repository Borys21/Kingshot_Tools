const shardRequirements = {
    2: 50,
    3: 150,
    4: 300,
    5: 600,
    6: 1200
  };
  
  function calculateShards() {
    const current = parseInt(document.getElementById('current-star').value);
    const target = parseInt(document.getElementById('target-star').value);
    const resultEl = document.getElementById('result');
  
    if (target <= current) {
      resultEl.textContent = "⚠️ Target star must be higher than current star.";
      return;
    }
  
    let total = 0;
    let breakdown = [];
  
    for (let i = current + 1; i <= target; i++) {
      total += shardRequirements[i];
      breakdown.push(`★ ${i - 1} → ★ ${i}: ${shardRequirements[i]} shards`);
    }
  
    resultEl.innerHTML = `
      Total shards needed: <b>${total}</b><br><br>
      Breakdown:<br>${breakdown.join("<br>")}
    `;
  }
  