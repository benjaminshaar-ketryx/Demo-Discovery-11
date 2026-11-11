// Test protocol: Verify AF notification is shown within 60 seconds
const { classify } = require('../src/monitor/rhythmClassifier');
const { AF_NOTIFICATION_LATENCY_MS, notificationDeadline, notifyPossibleAf } = require('../src/notifications/afNotifier');

describe('Verify AF notification is shown within 60 seconds', () => {
  test('irregular R-R intervals classify as possible AF', () => {
    const rr = Array.from({ length: 40 }, (_, i) => (i % 2 ? 550 : 950));
    expect(classify(rr)).toBe('POSSIBLE_AF');
  });
  test('regular R-R intervals classify as normal rhythm', () => {
    expect(classify(Array(40).fill(800))).toBe('NORMAL_RHYTHM');
  });
  test('latency target is 60 seconds', () => {
    expect(AF_NOTIFICATION_LATENCY_MS).toBe(60000);
    expect(notificationDeadline(0)).toBe(60000);
  });
  test('notification is displayed inside the latency window', async () => {
    const notifee = { displayNotification: jest.fn().mockResolvedValue('id-1') };
    await notifyPossibleAf(notifee, 1000, 30000);
    expect(notifee.displayNotification).toHaveBeenCalledTimes(1);
  });
});
