import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from "./components/header/Header"
import { Venues } from "./components/venues/Venues"
import { LandingPage } from './components/landingpage/LandingPage';

export const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/venues" component={Venues}/>
                    <Route path="/" component={LandingPage}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}
