// Software item: Patient notification service
// Requirement: Notify patient of possible atrial fibrillation
// Test: Verify AF notification is shown within 60 seconds
const AF_NOTIFICATION_LATENCY_MS = 60 * 1000; // must match the AF requirement's latency target

function notificationDeadline(detectedAtMs) {
  return detectedAtMs + AF_NOTIFICATION_LATENCY_MS;
}

async function notifyPossibleAf(notifee, detectedAtMs, now = Date.now()) {
  if (now > notificationDeadline(detectedAtMs)) {
    throw new Error('AF notification missed its latency target');
  }
  return notifee.displayNotification({
    title: 'Possible irregular rhythm detected',
    body: 'Your patch detected a rhythm that may be atrial fibrillation. Open the app for next steps.',
    android: { channelId: 'af-alerts', importance: 4 },
  });
}

module.exports = { AF_NOTIFICATION_LATENCY_MS, notificationDeadline, notifyPossibleAf };
