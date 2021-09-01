import FormPage from '@/views/formPage'
import ReduxPage from '@/views/reduxPage';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/form" component={FormPage}/>
        <Route path="/redux" component={ReduxPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
