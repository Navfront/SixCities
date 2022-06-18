import MainPage from '../pages/main-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page';
import FavoritePage from '../pages/favorites-page';
import PropertyPage from '../pages/property-page';
import { Endpoints } from './../../const/consts';

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
        <Route path={Endpoints.PropertyPage}>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
