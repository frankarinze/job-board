import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import Topbar from  "./components/Topbar"

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div >
      <Topbar/>
        <Content  toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
    </Router>
  );
};

export default App;
