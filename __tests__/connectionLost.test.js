// Test protocol: Verify lost-connection alert after 10 minutes
const { isConnectionLost } = require('../src/monitor/connectionMonitor');

describe('Verify lost-connection alert after 10 minutes', () => {
  test('not lost at 9 minutes', () => expect(isConnectionLost(0, 9 * 60 * 1000)).toBe(false));
  test('lost at 10 minutes', () => expect(isConnectionLost(0, 10 * 60 * 1000)).toBe(true));
});
