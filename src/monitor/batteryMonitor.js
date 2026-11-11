// Software item: Patch connection monitor
// Requirement: Warn the patient when the patch battery is low
// Test: Verify low-battery warnings at 15% and 5%
const WARNING_LEVELS = [15, 5];

// Returns the warning level crossed between two readings, or null.
function crossedWarning(previousPct, currentPct) {
  for (const level of WARNING_LEVELS.slice().sort((a, b) => a - b)) {
    if (previousPct > level && currentPct <= level) return level;
  }
  return null;
}

module.exports = { WARNING_LEVELS, crossedWarning };
