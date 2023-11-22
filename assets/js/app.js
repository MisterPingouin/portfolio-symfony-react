import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Supposons que c'est votre page d'accueil
import PresentationProject from './components/PresentationProject';
// import ErrorPage from './components/ErrorPage'; // Une page pour gérer les routes non trouvées

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/presentation/:id" component={PresentationProject} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;