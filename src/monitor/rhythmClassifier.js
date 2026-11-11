// Software item: Rhythm status screen (classification input)
// Requirement: Notify patient of possible atrial fibrillation
// Classifies a window of R-R intervals (ms). AF shows as an irregularly irregular rhythm,
// so we flag a possible AF episode when R-R variability stays above a threshold.
const IRREGULARITY_THRESHOLD = 0.12; // coefficient of variation of R-R intervals
const MIN_BEATS = 30;

function classify(rrIntervalsMs) {
  if (!Array.isArray(rrIntervalsMs) || rrIntervalsMs.length < MIN_BEATS) return 'INSUFFICIENT_DATA';
  const mean = rrIntervalsMs.reduce((s, x) => s + x, 0) / rrIntervalsMs.length;
  const sd = Math.sqrt(rrIntervalsMs.reduce((s, x) => s + (x - mean) ** 2, 0) / rrIntervalsMs.length);
  return sd / mean > IRREGULARITY_THRESHOLD ? 'POSSIBLE_AF' : 'NORMAL_RHYTHM';
}

module.exports = { classify, IRREGULARITY_THRESHOLD, MIN_BEATS };
