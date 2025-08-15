import { showToast, Toast, open } from "@raycast/api";
import { useEffect } from "react";

export default function Command() {
  useEffect(() => {
    async function pauseSong() {
      try {
        await open("https://soundcloud.com", {
          script: `
            const pauseButton = document.querySelector('.playButton.playing');
            if (pauseButton) {
              pauseButton.click();
              return 'Pausing song';
            } else {
              throw new Error('Pause button not found or song not playing');
            }
          `,
        });
        await showToast(Toast.Style.Success, "Success", "Pausing song on SoundCloud");
      } catch (error) {
        await showToast(Toast.Style.Failure, "Failed", error instanceof Error ? error.message : "Could not pause song");
      }
    }
    pauseSong();
  }, []);

  return null;
}