import React, { useEffect } from "react";

export default function TikTokFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@scout2015/video/6718335390845095173"
        data-video-id="6718335390845095173"
        style={{ maxWidth: 605, minWidth: 325 }}
      >
        <section>
          <a href="https://www.tiktok.com/@scout2015" target="_blank" rel="noopener noreferrer">
            @scout2015
          </a>
        </section>
      </blockquote>

      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@nba/video/7253158671976373547"
        data-video-id="7253158671976373547"
        style={{ maxWidth: 605, minWidth: 325 }}
      >
        <section>
          <a href="https://www.tiktok.com/@nba" target="_blank" rel="noopener noreferrer">
            @nba
          </a>
        </section>
      </blockquote>
    </div>
  );
}
