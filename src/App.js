
import './App.css';
import {  Switch, Route, Redirect } from 'react-router';
import Header from './Header';
import Right from './Right';
import Content from './Content';

function App() {
  return (
    <>
      <Header />
      <Right />
      <Switch>
        <Route exact path="/" component={Content} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} /> */}
        <Redirect to="/" />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
