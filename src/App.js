import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';

//Pages
import Login from './components/pages/login/login';
import NewAccount from './components/pages/new-account/new-account';
import Projects from './components/pages/projects-main';

//Main Styles
import './scss/app.scss';

//Context
import ProjectsProvider from './components/context/projects/ProjectContext'
import TasksProvider from './components/context/tasks/TasksContext';
import AlertsProvider from './components/context/alerts/AlertsContext'
import AuthProvider from './components/context/authentication/AuthContext';

function App() {

  return (
    <Router>
      <ProjectsProvider>
        <TasksProvider>
          <AlertsProvider>
            <AuthProvider>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/new-account' component={NewAccount}/>
                <Route exact path='/projects' component={Projects}/>
              </Switch>
            </AuthProvider>
          </AlertsProvider>
        </TasksProvider>
      </ProjectsProvider>
    </Router>
  );
}

export default App;
