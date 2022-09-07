import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import './app.css'
import Footer from './components/footer/Footer'
import Agency from './components/agency/Agency'
import Spec from './components/specialization/Spec'
import Feature from './components/features/Feature'
import Blog from './components/blog/Blog'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Agency />
      <Spec />
      <Feature />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
