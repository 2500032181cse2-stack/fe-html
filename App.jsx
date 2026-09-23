 import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Java Application</h1>
      <p>Welcome to my React App</p>

      <button onClick={() => alert("Hello from Java App!")}>
        Click Me
      </button>

      <h2>Student Details</h2>
      <p>Name: Arshad</p>
      <p>Roll No: 25EC2206</p>
    </div>
  );
}

export default App;