import { Action, ActionPanel, Detail } from "@raycast/api";
import { tidalPlayPause, tidalNextTrack, tidalPreviousTrack } from "./utils";

export default function TidalControls() {
  return (
    <Detail
      markdown="## 🎵 Tidal Controls Use these actions to control playback."
      actions={
        <ActionPanel>
          <Action title="Play / Pause" onAction={tidalPlayPause} />
          <Action title="Next Track" onAction={tidalNextTrack} />
          <Action title="Previous Track" onAction={tidalPreviousTrack} />
        </ActionPanel>
      }
    />
  );
}
