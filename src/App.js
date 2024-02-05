import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/public/HomePage";
import ProgrammeDetailPage from "./pages/public/ProgrammeDetailPage";
import ProgrammePage from '../src/pages/public/ProgrammePage'
import FestivalPage from '../src/pages/public/FestivalPage'
import ConnexionPage from '../src/pages/admin/ConnexionPage'
import LegalPage from '../src/pages/public/LegalPage'
import DashboardPage from '../src/pages/admin/DashboardPage'
import ArchivePage from '../src/pages/public/ArchivePage'
import ContactPage from '../src/pages/public/ContactPage'
import ReservationPage from '../src/pages/public/ReservationPage'
import InfoPratiquePage from "./pages/public/InfoPratiquePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/programme" element={<ProgrammePage />} />
        <Route path="/programme/:id" element={<ProgrammeDetailPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/infos" element={<InfoPratiquePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/legal' element={<LegalPage />} />

        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
