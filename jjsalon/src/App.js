
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Content } from './View/Main';
import { PriceList } from "./PriceList/PriceList"
import { Me } from './Me/Me';
import { Pictures } from './GaleryContent/GaleryContent';
import { Contact } from './Contact/Contact';
import { Mikrodermabrazja } from './BeautyTreatments/Treatments/Mikrodermabrazja';
import { PeelingKawitacyjny } from './BeautyTreatments/Treatments/PeelingKawitacyjny';
import { RetixC } from './BeautyTreatments/Treatments/RetixC';
import { SensiskinGardenPurles } from './BeautyTreatments/Treatments/SensiskinGardenPurles';
import { PQAGE } from './BeautyTreatments/Treatments/PQ AGE';

function App() {

  return (
<>
<BrowserRouter>
<Header/>
<Routes>
      <Route exact path="/" element={<Content/>}/>
      <Route path="cennik" element={<PriceList/>}></Route>
      <Route path="omnie" element={<Me/>}></Route>
      <Route path="galeria" element={<Pictures/>}></Route>
      <Route path="kontakt" element={<Contact/>}></Route>
      <Route path="mikrodermabrazja" element={<Mikrodermabrazja/>}></Route>
      <Route path="peelingkawitacyjny" element={<PeelingKawitacyjny/>}></Route>
      <Route path="retixc" element={<RetixC/>}></Route>
      <Route path="sensiskingardenpurles" element={<SensiskinGardenPurles/>}></Route>
      <Route path="PQAGE" element={<PQAGE/>}></Route>
</Routes>
      <Footer/>
      </BrowserRouter>
</>
  );
}

export default App;
