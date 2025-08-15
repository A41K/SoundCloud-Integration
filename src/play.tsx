import { showToast, Toast, open } from "@raycast/api";
import { useEffect } from "react";

export default function Command() {
  useEffect(() => {
    async function playSong() {
      try {
        await open("https://soundcloud.com");
        await showToast(Toast.Style.Success, "Success", "Playing song on SoundCloud");
      } catch (error) {
        await showToast(Toast.Style.Failure, "Failed", error instanceof Error ? error.message : "Could not play song");
      }
    }
    playSong();
  }, []);

  return null;
}