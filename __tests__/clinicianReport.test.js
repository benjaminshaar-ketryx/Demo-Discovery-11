// Test protocol: Verify the 30-day clinician report
const { buildReport } = require('../src/reports/clinicianReport');

describe('Verify the 30-day clinician report', () => {
  test('counts only episodes from the last 30 days', () => {
    const now = new Date('2026-11-10T12:00:00Z');
    const day = 86400000;
    const r = buildReport([{ detectedAtMs: now - 2 * day }, { detectedAtMs: now - 40 * day }], [], now);
    expect(r.afEpisodes).toBe(1);
  });
});
