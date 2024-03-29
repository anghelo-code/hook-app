import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'

export const MainPage = () => {
    return (
      <>
            
        {/* <h2>Main Page</h2> */}
        <Navbar/>
        <hr/>

        <Routes>
            <Route path="/"  element={ <HomePage />} />
            <Route path="about"  element={ <AboutPage />} />
            <Route path="login"  element={ <LoginPage />} />
            <Route path="/*"  element={ <Navigate  to="/about" /> }/>
        </Routes>
      </>
    )
}