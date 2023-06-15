import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://649d39ff923f4bb095a5cb89ef6f200d@o4505365337473024.ingest.sentry.io/4505365375680512",
  integrations: [new Integrations.BrowserTracing(),new Sentry.Replay()],
  tracesSampleRate: 1.0,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
