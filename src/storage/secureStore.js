// Software item: Secure storage and transport layer
// Requirement: Protect patient data at rest and in transit
// Test: Verify data is encrypted at rest and in transit
const EncryptedStorage = require('react-native-encrypted-storage');
const axios = require('axios');

const API_BASE = 'https://api.cardiac-monitor.example';

function assertTls(url) {
  if (!url.startsWith('https://')) throw new Error('Patient data may only be sent over TLS');
  return url;
}

const save = (key, value) => EncryptedStorage.setItem(key, JSON.stringify(value));
const load = async (key) => JSON.parse((await EncryptedStorage.getItem(key)) || 'null');
const client = axios.create({ baseURL: assertTls(API_BASE), timeout: 10000 });

module.exports = { assertTls, save, load, client };
