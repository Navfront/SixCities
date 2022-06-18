import React from 'react';
import { Link } from 'react-router-dom';
import { Endpoints } from './../../const/consts';

function Nothing(): JSX.Element {
  return (
    <React.Fragment>
      <p>Nothing here 404</p>
      <Link to={Endpoints.MainPage}>
      Back to main page
      </Link>
    </React.Fragment>
  );
}


export default Nothing;
