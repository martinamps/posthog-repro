import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";
import posthog from "posthog-js";

function PosthogInit() {
  useEffect(() => {
    posthog.init('phc_RpO1rh8u4ZgIDxSelv4kQDvyiyyty6iUiLpbs3sTOyb', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
    });
  }, []);

  return null;
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
        <RemixBrowser />
        <PosthogInit/>
    </StrictMode>
  );
});
