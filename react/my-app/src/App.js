import React from "react";
import Welcome from "./Welcome";

function App()
{
  return (
    <div>
      {/* Simple component example using Welcome.js */}
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  )
}

export default App;
