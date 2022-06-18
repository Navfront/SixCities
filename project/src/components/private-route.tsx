import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AUTHORIZE } from '../const/consts';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authorizationStatus:  boolean
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render, authorizationStatus } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AUTHORIZE.AUTH
          ? render()
          : <Redirect to="/login" />
      )}
    />
  );
}


export default PrivateRoute;
