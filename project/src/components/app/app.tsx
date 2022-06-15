import MainPage from '../pages/main-page';

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
  return <MainPage places={places} />;
}

export default App;
