
import './App.css';

import Header from "./Components/Header";

import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Error from './Components/Error'
import Regi from './Components/Regi';
import Details from './Components/Details';
import SignIn from './Components/SignIn';
import { Suspense, lazy } from 'react';
const HomeLoad = lazy(() => import('./Components/Home'))

function App() {
    return (<>
        <Header />
      

        <Routes>

            <Route path='/' element={<Regi />} />
            <Route path='/sign' element={<SignIn />} />
            <Route path='/home' element={<Suspense fallback={<h1>Please Waiting data loading..........!</h1>}><HomeLoad></HomeLoad></Suspense>} />
            <Route path='/details' element={<Details />} />

            <Route path='*' element={<Error />} />
            <Route />
        </Routes>
        <Footer/>

    </>)


}

export default App;
