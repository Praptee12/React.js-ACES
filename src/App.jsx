import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import CardDetails from './pages/CardDetails'
import LearningUseState from './components/LearningUseState'
import SinglePage from './components/SinglePages'
import Createblog from './components/Createblog'
function App() {
  return (
  <BrowserRouter>
  <Routes>
   <Route path='/about' element={<About/>}/>
   <Route path='/' element={<Home/>}/>
      <Route path='/card-details' element={<CardDetails/>}/>
      <Route path='/Learning-usestate' element={<LearningUseState/>}/>
      <Route path='/single/:id' element={<SinglePage/>}/>
       <Route path='/create' element={<Createblog/>}/>
      

  </Routes></BrowserRouter>
   
  )
}

export default App
