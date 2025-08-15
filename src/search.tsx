import { Action, ActionPanel, Form, open } from "@raycast/api";
import { useState } from "react";

export default function SearchTidal() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const encoded = encodeURIComponent(query.trim());
    await open(`https://listen.tidal.com/search?q=${encoded}`);
  };

  return (
    <Form
      navigationTitle="Search Tidal"
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Search in Tidal" onSubmit={handleSearch} />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="query"
        title="Search"
        placeholder="Type song, artist, or album"
        value={query}
        onChange={setQuery}
      />
    </Form>
  );
}
