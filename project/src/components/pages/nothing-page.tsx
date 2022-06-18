import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from './../../const/consts';

function Nothing(): JSX.Element {
  return (
    <Fragment>
      <p>Nothing here 404</p>
      <Link to={Endpoints.MainPage}>
      Back to main page
      </Link>
    </Fragment>
  );
}


export default Nothing;
