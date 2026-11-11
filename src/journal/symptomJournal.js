// Software item: Symptom journal
// Requirement: Log patient-reported symptoms
// Test: Verify a symptom entry links to the ECG strip
const { z } = require('zod');

const SymptomEntry = z.object({
  symptom: z.enum(['palpitations', 'dizziness', 'shortness-of-breath', 'chest-discomfort', 'fatigue', 'other']),
  note: z.string().max(500).optional(),
  reportedAtMs: z.number().int(),
});

const STRIP_WINDOW_MS = 30 * 1000;

function createEntry(input, ecgStrips) {
  const entry = SymptomEntry.parse(input);
  const strip = ecgStrips.find((s) => Math.abs(s.startedAtMs - entry.reportedAtMs) <= STRIP_WINDOW_MS);
  return { ...entry, ecgStripId: strip ? strip.id : null };
}

module.exports = { createEntry, STRIP_WINDOW_MS };
