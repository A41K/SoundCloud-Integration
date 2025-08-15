import { execSync } from "child_process";

export function runAppleScript(script: string) {
  execSync(`osascript -e '${script.replace(/'/g, "'\\''")}'`);
}

export function tidalPlayPause() {
  runAppleScript(`
    tell application "System Events"
      tell process "TIDAL"
        keystroke space
      end tell
    end tell
  `);
}

export function tidalNextTrack() {
  runAppleScript(`
    tell application "System Events"
      key code 124 using {command down} -- Command + Right Arrow
    end tell
  `);
}

export function tidalPreviousTrack() {
  runAppleScript(`
    tell application "System Events"
      key code 123 using {command down} -- Command + Left Arrow
    end tell
  `);
}
