import { List, ActionPanel, Action, open } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [query, setQuery] = useState("");

  function searchInTidal(q: string) {
    if (!q.trim()) return;
    // Use web search as fallback
    open(`https://listen.tidal.com/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <List
      searchBarPlaceholder="Type a song and press enter..."
      onSearchTextChange={setQuery}
      throttle
    >
      <List.Item
        key="search"
        title={`Search for "${query}" in Tidal (web)`}
        actions={
          <ActionPanel>
            <Action
              title="Search in Browser"
              onAction={() => searchInTidal(query)}
            />
          </ActionPanel>
        }
      />
    </List>
  );
}
