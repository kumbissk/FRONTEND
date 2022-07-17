import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import AuthForm from "./pages/AuthForm";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ChercherLivreur from "./pages/ChercherLivreur";
import ContacterLivreur from "./pages/ContacterLivreur";
import EspaceClient from "./pages/EspaceClient";
import EspaceLivreur from "./pages/EspaceLivreur";
import SuivreColis from "./pages/SuivreColis";


function App() {
  return (
    <Routes>
       <Route path="/" element={<Accueil />} />
       <Route path="/auth" element={<AuthForm />} />
       <Route path="/login" element={<Login />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/cherchelivreur" element={<ChercherLivreur />} />
       <Route path="/contactlivreur" element={<ContacterLivreur />} />
       <Route path="/espaceclient" element={<EspaceClient />} />
       <Route path="/espacelivreur" element={<EspaceLivreur />} />
       <Route path="/suivrecolis" element={<SuivreColis />} />
    </Routes>
  );
}

export default App;
