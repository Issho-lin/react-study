import FormPage from '@/views/formPage'
import ReduxPage from '@/views/reduxPage';
import ReactReduxPage from '@/views/reactReduxPage';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from './store/myReactRedux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path="/form" component={FormPage}/>
          <Route path="/redux" component={ReduxPage}/>
          <Route path="/reactRedux" component={ReactReduxPage}/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
