// S1_SW_02 — Command router

function runCommand(cmd) {
  switch (cmd) {
    case "start":
      return "System starting";
    case "stop":
      return "System stopping";
    case "status":
      return "System status: OK";
    default:
      return "Unknown command";
  }
}

// tests
console.log(runCommand("start"));
console.log(runCommand("status"));
console.log(runCommand("stop"));
console.log(runCommand("restart"));
