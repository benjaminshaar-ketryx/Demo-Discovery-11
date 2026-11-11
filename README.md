# Cardiac Monitor – Mobile App

Patient app for the Cardiac Monitor system. It pairs with the wearable ECG patch over
Bluetooth Low Energy, shows the current rhythm status, notifies the patient of a possible
atrial fibrillation (AF) episode, and shares a 30-day rhythm report with the clinician.

Requirements, risks, and test protocols live in Jira (project `CMAPP`) and are managed in
Ketryx. This repository is connected to the Ketryx project so that its software
dependencies (SOUP) are tracked from `package.json` / `package-lock.json`.

> Demo repository. Not a medical device.

## Software items → code

| Ketryx software item | Code |
|---|---|
| Rhythm status screen | `src/screens/RhythmStatusScreen.js`, `src/monitor/rhythmClassifier.js` |
| Patient notification service | `src/notifications/afNotifier.js` |
| BLE pairing module | `src/ble/pairing.js` |
| Secure storage and transport layer | `src/storage/secureStore.js` |
| Patch connection monitor | `src/monitor/connectionMonitor.js`, `src/monitor/batteryMonitor.js` |
| Symptom journal | `src/journal/symptomJournal.js` |
| Clinician report generator | `src/reports/clinicianReport.js` |

Each test file in `__tests__/` is named after the Ketryx test protocol it automates.

## Releases

Release tags follow `v<version>` (for example `v1.0.0`), matching Ketryx project versions.
