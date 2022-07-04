import React, { lazy } from 'react';
import { Route, withRouter } from 'react-router-dom';

const Error = lazy(() => import(/* webpackChunkName: "Error"*/ '@pages/user/error'));

interface IProps {
  history: {
    replace(url: string): void;
  };
  routes?(url: string): void;
  path?: string;
  exact?: boolean;
  strict?: boolean;
  component?: any;
}

interface IState {
  isAuthenticated: boolean;
}
// IProps, IState
class PrivateRoute extends React.Component<any, IState> {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: true };
  }

  componentDidMount() {
    // let isAuthenticated = localStorage.token ? true : false;
    // this.setState({ isAuthenticated });
    // if (!isAuthenticated) {
    //     const { history } = this.props;
    //     setTimeout(() => {
    //         history.replace('/user/login');
    //     }, 1000);
    // }
  }

  render() {
    let { component: Component, path = '/', exact = false, strict = false } = this.props;
    return this.state.isAuthenticated ? (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) => <Component {...props} routes={this.props.routes} />}
      />
    ) : (
      <Error />
    );
  }
}

export default withRouter(PrivateRoute);
