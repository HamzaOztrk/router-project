import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";



function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<People/>}/>  
        <Route path="/:id" element={<PersonDetail/>}/>  

      </Routes>   
    
      <Footer/>

      
    </>
  )
}

export default App;
