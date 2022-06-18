import MainPage from '../pages/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import FavoritePage from '../pages/favorites-page';
import PropertyPage from '../pages/property-page';
import { AUTHORIZE, Endpoints } from './../../const/consts';
import Nothing from '../pages/nothing-page';
import PrivateRoute from '../private-route';


type Place = {
  id: string,
  name: string,
  type: string,
  priceValue: number,
  priceText: string,
  mark: string,
  imageURL: string,
  isBookmarked: boolean,
  rating: number,
  link: string,
}

type AppProps = {
  places: Place[];
};

function App({ places }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={Endpoints.PropertyPage} exact>
          <PropertyPage />
        </Route>
        <PrivateRoute authorizationStatus={AUTHORIZE.NOTAUTH} render={()=><FavoritePage />} path={Endpoints.FavoritesPage} exact >
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
