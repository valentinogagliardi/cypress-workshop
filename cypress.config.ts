import { defineConfig } from "cypress";
import { addRequestHandler } from "./mocks/server";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalInteractiveRunEvents: true,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on) {
      on("task", {
        interceptSSR({ method, path, statusCode, body }) {
          // Spin up a server with the given request handler.
          const server = addRequestHandler({
            method,
            path,
            statusCode,
            body,
          });
          server.listen(8081, () => console.log("Mock server listening"));

          return null;
        },
      });
    },
  },
});
