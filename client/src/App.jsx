import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './components/Blog'
import Home from './components/Home'
import Login from './components/Login'
import Create from './components/Create'
// import Login from './components/login'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login isLogIn={true} />}/>
            <Route path='/signup' element={<Login/>}/>
            <Route path='/read/:id' element={<Blog />}/>
            <Route path='/create' element={<Create />}/>
        </Routes>
    )
}

export default App
