import './App.css';
import { Routes, Route } from 'react-router-dom'
import Main from './Main/MainContainer.jsx'
import Header from './Header/HeaderContainer.jsx'
import CreateAd from './Profile/CreateAd/CreateAdContainer';
import StrayFeed from './Feed/Stray/FeedStrayContainer'
import HouseFeed from './Feed/House/FeedHouseContainer'

function App() {
    return (<>
		<Header/>
		<Routes>
			<Route path='/' element={<Main/>} />
			<Route path='/profile/createAd/' element={<CreateAd/>}/>
			<Route path='/feed/stray/' element={<StrayFeed/>}/>
			<Route path='/feed/house/' element={<HouseFeed/>}/>
		</Routes> </>)
}

export default App;
