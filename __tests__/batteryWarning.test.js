// Test protocol: Verify low-battery warnings at 15% and 5%
const { crossedWarning } = require('../src/monitor/batteryMonitor');

describe('Verify low-battery warnings at 15% and 5%', () => {
  test('warns when the battery drops to 15%', () => expect(crossedWarning(16, 15)).toBe(15));
  test('warns again at 5%', () => expect(crossedWarning(6, 5)).toBe(5));
  test('no warning between thresholds', () => expect(crossedWarning(12, 10)).toBeNull());
});
