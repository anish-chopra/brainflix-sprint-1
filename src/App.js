import './App.scss';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SubSection1 from './components/SubSection1';
import {Routes, Route} from 'react-router-dom';
import Main_travel_section from './components/Main_travel_section';
import Sub_travel_section from './components/Sub_travel_section';
import Main_chemonix_section from './components/Main_chemonix_section';
import Sub_chemonix_section from './components/Sub_chemonix_section';
import Main_health_section from './components/Main_health_section';
import Sub_health_section from './components/Sub_health_section';
import Main_airline_section from './components/Main_airline_section';
import Sub_airline_section from './components/Sub_airline_section';
import Sub_romantic_section from './components/Sub_romantic_section';
import Main_romantic_section from './components/Main_romantic_section';
import Main_accommodation_section from './components/Main_accommodation_section';
import Sub_accommodation_section from './components/Sub_accommodation_section';
import Main_crusing_section from './components/Main_crusing_section';
import Sub_crusing_section from './components/Sub_crusing_section';
import Sub_train_section from './components/Sub_train_section';
import Main_train_section from './components/Main_train_section';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header/><MainSection></MainSection><SubSection1></SubSection1></>}></Route>
        <Route path='travelPro' element={<><Header/> <Main_travel_section></Main_travel_section> <Sub_travel_section></Sub_travel_section></>}></Route>
        <Route path='Chamonix' element={<><Header/> <Main_chemonix_section></Main_chemonix_section> <Sub_chemonix_section></Sub_chemonix_section></>}></Route>
        <Route path='travelHealth' element={<><Header/> <Main_health_section></Main_health_section> <Sub_health_section></Sub_health_section></>}></Route>
        <Route path='Airline' element={<><Header/> <Main_airline_section></Main_airline_section> <Sub_airline_section></Sub_airline_section></>}></Route>
        <Route path='Romantic' element={<><Header/> <Main_romantic_section></Main_romantic_section> <Sub_romantic_section></Sub_romantic_section></>}></Route>
        <Route path='Accommodations' element={<><Header/> <Main_accommodation_section></Main_accommodation_section> <Sub_accommodation_section></Sub_accommodation_section></>}></Route>
        <Route path='Cruising' element={<><Header/> <Main_crusing_section></Main_crusing_section> <Sub_crusing_section></Sub_crusing_section></>}></Route>
        <Route path='Train' element={<><Header/> <Main_train_section></Main_train_section> <Sub_train_section></Sub_train_section></>}></Route>
      </Routes> 
    </div>
  );
}

export default App;
