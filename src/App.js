import React,{Suspense,lazy} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Home = lazy(()=> import('./components/home'))


const App = ()=>{
  return(
      <Router>
        <Suspense fallback={<p>Cargando...</p>}>
            <Routes>
                <Route path="/" name='Home' element={<Home/>}/>
            </Routes>
        </Suspense>
      </Router>
  )
}

export default App;
