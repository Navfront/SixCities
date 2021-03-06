import FavoritePage from '../pages/favorites-page';
import LoginPage from '../pages/login-page';
import MainPage from '../pages/main-page';
import Nothing from '../pages/nothing-page';
import PrivateRoute from '../private-route';
import OfferPage from '../pages/offer-page';
import { AUTHORIZE, Endpoints } from './../../const/consts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Place } from '../../types/types';

type AppProps = {
  places: Place[];
};

function App({ places }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Endpoints.OfferPage} exact>
          <OfferPage />
        </Route>
        <PrivateRoute authorizationStatus={AUTHORIZE.AUTH} render={()=><FavoritePage places={places} />} path={Endpoints.FavoritesPage} exact >
        </PrivateRoute>
        <Route path={Endpoints.LoginPage} exact>
          <LoginPage />
        </Route>
        <Route path={Endpoints.MainPage} exact>
          <MainPage places={places} />
        </Route>
        <Route path='/'>
          <Nothing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
