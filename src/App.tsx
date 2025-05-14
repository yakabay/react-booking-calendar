import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ClientPage } from "./pages/ClientPage";
import { PractitionerPage } from "./pages/PractitionerPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/client" replace />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="practitioner" element={<PractitionerPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
