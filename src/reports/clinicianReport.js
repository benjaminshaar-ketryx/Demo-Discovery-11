// Software item: Clinician report generator
// Requirement: Share a rhythm report with the clinician
// Test: Verify the 30-day clinician report
const { subDays } = require('date-fns');

const REPORT_DAYS = 30;

function buildReport(episodes, symptoms, now = new Date()) {
  const from = subDays(now, REPORT_DAYS).getTime();
  const inRange = (t) => t >= from && t <= now.getTime();
  return {
    periodDays: REPORT_DAYS,
    afEpisodes: episodes.filter((e) => inRange(e.detectedAtMs)).length,
    symptoms: symptoms.filter((s) => inRange(s.reportedAtMs)),
  };
}

module.exports = { REPORT_DAYS, buildReport };
