// Test protocol: Verify a symptom entry links to the ECG strip
const { createEntry } = require('../src/journal/symptomJournal');

describe('Verify a symptom entry links to the ECG strip', () => {
  test('entry links to the strip recorded at the same time', () => {
    const e = createEntry({ symptom: 'palpitations', reportedAtMs: 100000 }, [{ id: 'strip-7', startedAtMs: 95000 }]);
    expect(e.ecgStripId).toBe('strip-7');
  });
});
