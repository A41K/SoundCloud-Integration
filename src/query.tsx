import { exec } from "child_process";

// Check if TIDAL is currently running
function isTidalRunning(): Promise<boolean> {
  return new Promise((resolve) => {
    exec('tasklist /FI "IMAGENAME eq TIDAL.exe"', (err, stdout) => {
      if (err) {
        resolve(false);
        return;
      }
      resolve(stdout.toLowerCase().includes("tidal.exe"));
    });
  });
}

// Try to search in the TIDAL desktop app (via URL scheme)
function searchInTidal(query: string) {
  const encoded = encodeURIComponent(query);
  exec(`start tidal://search/${encoded}`);
}

// Fallback → search in the TIDAL web player
function searchInTidalWeb(query: string) {
  const encoded = encodeURIComponent(query);
  exec(`start https://listen.tidal.com/search/${encoded}`);
}

// Main handler
async function handleSearch(prompt: string) {
  if (await isTidalRunning()) {
    console.log("TIDAL app is running → searching inside app");
    searchInTidal(prompt);
  } else {
    console.log("TIDAL app not found → opening in browser");
    searchInTidalWeb(prompt);
  }
}

// Example usage
handleSearch("Radiohead");
