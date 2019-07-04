import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header currentUser={this.currentUser} />

        <Switch>
          <Route path="/" exact component={() => <Home currentUser={this.currentUser}/>} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
};

export default connect(
  mapStateToProps,
  {}
)(App);
