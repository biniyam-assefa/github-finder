import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbarr from './components/layout/Navbarr'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
     <div className='flex flex-col justify-between h-screen'>
      <Navbarr />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
      <Footer />
     </div>

    </Router>
  );
}

export default App;