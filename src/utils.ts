import { exec } from "child_process";

export function openUrl(url: string) {
  exec(`start ${url}`);
}

export function extractId(input: string, type: "playlist" | "album" | "artist"): string {
  // Accepts either raw ID or full TIDAL URL
  const regex = new RegExp(`${type}/([^/?#]+)`);
  const match = input.match(regex);
  return match ? match[1] : input.trim();
}
