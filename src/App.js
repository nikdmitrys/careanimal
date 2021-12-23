import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './Main/MainContainer.jsx'
import Header from './Header/HeaderContainer.jsx'
import CreateAd from './Profile/CreateAd/CreateAdContainer';

function App() {
    return (<>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>} />
			<Route path='/profile/createAd' element={<CreateAd/>}/>
		</Routes> </>)
}

export default App;
