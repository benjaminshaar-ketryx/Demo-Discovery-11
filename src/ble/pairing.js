// Software item: BLE pairing module
// Requirement: Pair with the wearable patch over Bluetooth Low Energy
// Test: Verify pairing completes in 3 steps or fewer
const PAIRING_STEPS = ['scan', 'confirm-patch-code', 'bond'];

async function pair(bleManager, patchCode) {
  const device = await bleManager.startDeviceScan(null, { allowDuplicates: false });
  if (device.name !== `CMPATCH-${patchCode}`) throw new Error('Patch code does not match');
  await device.connect();
  return device.discoverAllServicesAndCharacteristics();
}

module.exports = { PAIRING_STEPS, pair };
