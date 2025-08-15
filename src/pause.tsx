import { showToast, Toast, open } from "@raycast/api";
import { useEffect } from "react";

export default function Command() {
  useEffect(() => {
    async function pauseSong() {
      try {
        await open("tidal://pause");
        await showToast(Toast.Style.Success, "Success", "Pausing song on Tidal");
      } catch (error) {
        await showToast(Toast.Style.Failure, "Failed", error instanceof Error ? error.message : "Could not pause song");
      }
    }
    pauseSong();
  }, []);

  return null;
}