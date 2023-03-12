import React from 'react'
import ReactDOM from 'react-dom/client'

function Car(){
  return <h2>hello the nusty world!</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red"/>);
