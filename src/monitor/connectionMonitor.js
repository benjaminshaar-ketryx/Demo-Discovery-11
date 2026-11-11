// Software item: Patch connection monitor
// Requirement: Alert the patient when the patch connection is lost
// Test: Verify lost-connection alert after 10 minutes
const LOST_AFTER_MS = 10 * 60 * 1000;

function isConnectionLost(lastPacketAtMs, now = Date.now()) {
  return now - lastPacketAtMs >= LOST_AFTER_MS;
}

module.exports = { LOST_AFTER_MS, isConnectionLost };
