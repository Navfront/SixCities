import MainPage from '../pages/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import FavoritePage from '../pages/favorites-page';
import PropertyPage from '../pages/property-page';
import { Endpoints } from './../../const/consts';
import Nothing from '../pages/nothing-page';

type Place = {
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
        <Route path={Endpoints.FavoritesPage} exact>
          <FavoritePage />
        </Route>
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
