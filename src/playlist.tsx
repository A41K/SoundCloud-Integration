import { Form, ActionPanel, Action } from "@raycast/api";
import { exec } from "child_process";

function openTidalPlaylist(id: string) {
  const url = `https://listen.tidal.com/playlist/${id}`;
  exec(`start ${url}`); // Windows: opens default browser
}

export default function Command() {
  function handleSubmit(values: { playlistId: string }) {
    if (values.playlistId.trim()) {
      openTidalPlaylist(values.playlistId);
    }
  }

  return (
    <Form
      navigationTitle="Open TIDAL Playlist"
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Open Playlist" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="playlistId"
        title="Playlist ID"
        placeholder="Paste a TIDAL playlist ID..."
      />
    </Form>
  );
}
