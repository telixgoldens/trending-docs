import React from "react";
import "../styles/DocContent.css";

export default function Installation() {
  return (
    <div className="doc-page">
      <h2>Installation & Doc SDK Setup</h2>
      <p>
        To integrate Trending Markets Docs into your project, follow these steps.
      </p>

      <h3>1. Install via npm</h3>
      <pre>
        {`npm install @trendingmarkets/docs-sdk`}
      </pre>

      <h3>2. Import and Configure</h3>
      <pre>
        {`import { DocsProvider } from '@trendingmarkets/docs-sdk';
        
function App() {
  return (
    <DocsProvider theme="light">
      <YourComponents />
    </DocsProvider>
  );
}`}
      </pre>

      <h3>3. Usage</h3>
      <p>
        You can now create docs pages as React components and they will inherit the SDK’s theme, navigation, and styling.
      </p>

      <div className="image-placeholder">[Insert Installation Diagram]</div>
    </div>
  );
}
