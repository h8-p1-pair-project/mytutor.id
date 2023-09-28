import { Routes, Route } from "react-router-dom"
import { Home } from "@pages/home";
import { Auth } from "@pages/auth"
import Layout from "@/Layout.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="access-auth" element={<Auth />} />
        </Route>
      </Routes>
  );
}

export default App;
