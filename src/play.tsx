import { open } from "@raycast/api";
import { useEffect } from "react";

export default function Command() {
  useEffect(() => {

    open("tidal://play");
  }, []);

  return null;
}