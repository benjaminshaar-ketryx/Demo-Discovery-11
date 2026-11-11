// Software item: Rhythm status screen
// Requirement: Display current heart rhythm status
// Test: Verify rhythm status appears within 5 seconds
const React = require('react');
const { Text, View } = require('react-native');

const STATUS_RENDER_BUDGET_MS = 5000;

const LABELS = {
  NORMAL_RHYTHM: 'Normal rhythm',
  POSSIBLE_AF: 'Possible irregular rhythm',
  INSUFFICIENT_DATA: 'Collecting data…',
};

function RhythmStatusScreen({ status }) {
  return React.createElement(View, null, React.createElement(Text, null, LABELS[status] || LABELS.INSUFFICIENT_DATA));
}

module.exports = { RhythmStatusScreen, STATUS_RENDER_BUDGET_MS, LABELS };
