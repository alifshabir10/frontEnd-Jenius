
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/home/index'
import { AddContact } from './pages/home/addContact'
import { EditContact } from './pages/home/editContact'

function App() {
  return (
    <div className="mx-5 container mx-auto">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddContact} />
          <Route path="/edit" component={EditContact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
