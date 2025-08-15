import { Form, ActionPanel, Action } from "@raycast/api";
import { exec } from "child_process";

function searchInTidalWeb(query: string) {
  const encoded = encodeURIComponent(query);
  // On Windows, `start` will open the URL in the default browser
  exec(`start https://listen.tidal.com/search?q=${encoded}`);
}

export default function Command() {
  function handleSubmit(values: { query: string }) {
    if (values.query.trim()) {
      searchInTidalWeb(values.query);
    }
  }

  return (
    <Form
      navigationTitle="Search TIDAL"
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Search on TIDAL Web" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="query"
        title="Search"
        placeholder="Type a song, artist, or album..."
      />
    </Form>
  );
}
