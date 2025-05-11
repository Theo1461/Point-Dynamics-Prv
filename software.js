const softwareVersion = "212";
//Base//
let savedPoints = 0
let rolledPoints = 0
let sidePoints = 0
let rollCount = 0
let fireUp = false
let waterUp = false
let breezeUp = false
//2.10//

//2.10.0.01//
let obsidianRolled = false
let earthRolled = false
//2.10.0.03//
let settingsOpen = false
//2.10.0.4//
let background = 0
let ach1000 = false
let multiplier = 1
let bgRounds = 0
//2.10.0.5//
let cactusUp = false
let goldUp = false
//2.10.0.6//
let tube = 0
let unlocked1 = false
//2.10.0.7//
let seeds = 0
let seedUp = false
//2.10.0-RC1//
let devTools = false
//2.10.3.14//
let mudUp = false
let lightRain = false
let heavyRain = false
//2.11.0.1.22 BETA//
const INT32_MAX = 2147483647;
const INT32_MIN = -2147483647;

function enforce32bitLimit() {
  savedPoints = Math.min(Math.max(savedPoints, INT32_MIN), INT32_MAX);
  rolledPoints = Math.min(Math.max(rolledPoints, INT32_MIN), INT32_MAX);
  sidePoints = Math.min(Math.max(sidePoints, INT32_MIN), INT32_MAX);
  rollCount = Math.min(Math.max(rollCount, INT32_MIN), INT32_MAX);
  background = Math.min(Math.max(background, INT32_MIN), INT32_MAX);
  tube = Math.min(Math.max(tube, INT32_MIN), INT32_MAX);
  seeds = Math.min(Math.max(seeds, INT32_MIN), INT32_MAX);
  bgRounds = Math.min(Math.max(bgRounds, INT32_MIN), INT32_MAX);
  multiplier = Math.min(Math.max(multiplier, INT32_MIN), INT32_MAX);
}
setInterval(() => {
  enforce32bitLimit();
  updatePowerUp()
}, 100);
//2.11.0.2.23 BETA//
let ach10000 = false
let ach20000 = false
let ach50000 = false
//2.11.0.3.24 BETA//
let nextCost = 500
let costIncreaseFactor = 1.5
let cheats = false
let comms = false
let autoclicker = false
//2.10.6.10 Prv
let rustUp = false
let rustRounds = 0
let rust = 0
let rustyPoints = 0
let loadingtextblk = false
//2.10.6.11 Prv
let instant10 = false