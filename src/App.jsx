import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import { AlbumIndex, AlbumView } from "./pages/Albums.jsx";
import Awards from "./pages/Awards.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="za-nas" element={<About />} />
        <Route path="nagradi" element={<Awards />} />
        <Route path="albumi" element={<AlbumIndex />} />
        <Route path="albumi/:slug" element={<AlbumView />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="grupi" element={<Navigate to="/za-nas#grupi" replace />} />
        <Route path="rakovoditeli" element={<Navigate to="/za-nas#rakovoditeli" replace />} />
        <Route path="tanci" element={<Navigate to="/za-nas#tanci" replace />} />
        <Route path="festivali" element={<Navigate to="/nagradi" replace />} />
      </Route>
    </Routes>
  );
}
