import FormPage from '@/views/formPage'
import ReduxPage from '@/views/reduxPage';
import ReactReduxPage from '@/views/reactReduxPage';
import ReactReduxHookPage from '@/views/reactReduxHookPage'
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Provider } from './store/myReactRedux'
// import { Provider } from './store/miniReactRedux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/form"> FormPage </Link> | 
            <Link to="/redux"> ReduxPage </Link> | 
            <Link to="/reactRedux"> ReactReduxPage </Link> | 
            <Link to="/reactReduxHook"> ReactReduxHookPage </Link>
          </div>
          <Route path="/form" component={FormPage}/>
          <Route path="/redux" component={ReduxPage}/>
          <Route path="/reactRedux" component={ReactReduxPage}/>
          <Route path="/reactReduxHook" component={ReactReduxHookPage}/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
