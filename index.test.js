const validate_input = require('./validate_input');
const get_next_version = require('./get_next_version');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws invalid version, number', async () => {
  await expect(validate_input(0)).rejects.toThrow('previous_version is not a string');
});

test('increments build: handles releases', async () => { 
  const result = get_next_version("v.3.10.200-r");
  expect(result).toBe("v.3.10.201");
});

test('increments build: handles patches', async () => {
  const result = get_next_version("v.3.10.1.200");
  expect(result).toBe("v.3.10.1.201");
});

test('increments build: regular feature build', async () => {
   const result = get_next_version("v.4.18.100");
   expect(result).toBe("v.4.18.101");
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_PREVIOUSVERSION'] = 'v.4.3.100'; 
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
