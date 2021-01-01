import './App.css';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Notif from './component/Notif'
import SectionHero from './component/SectionHero'
import Highlight from './component/Highlight'
import {  StateProvider } from './state/state'
import Footer from './component/Footer';
// import { CSSTransition } from 'react-transition-group'
// import { useContext } from 'react';
function App() {

  return (
		<>
			<StateProvider>
				<Notif />
				<SectionHero />
        <Highlight/>
        <Footer/>
			</StateProvider>
		</>
  );
}

export default App;
