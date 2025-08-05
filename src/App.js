import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import Community from './pages/Community';
import NotFound from './pages/404Page';
import Blog from './pages/Blog';


function App() {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/'element={<Homepage/>}/>
            <Route path='/features' element={<Features/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='*'element={<NotFound/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;
