import FormPage from '@/views/formPage'
import ReduxPage from '@/views/reduxPage';
import ReactReduxPage from '@/views/reactReduxPage';
import ReactReduxHookPage from '@/views/reactReduxHookPage'
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
// import { Provider } from 'react-redux'
import { Provider } from './store/myReactRedux'
// import { Provider } from './store/miniReactRedux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter basename="react-study">
          <div>
            <Link to="/"> FormPage </Link> | 
            <Link to="/redux"> ReduxPage </Link> | 
            <Link to="/reactRedux"> ReactReduxPage </Link> | 
            <Link to="/reactReduxHook/10086"> ReactReduxHookPage </Link> | 
            <Link to="/routerRedirect"> RouterRedirect </Link>
          </div>
          <Switch>
            <Route path="/" exact component={FormPage}/>
            <Route path="/redux" component={ReduxPage}/>
            <Route path="/reactRedux" component={ReactReduxPage}/>
            <Route path="/reactReduxHook/:id" children={(props) => <ReactReduxHookPage {...props}/>}/>
            <Route path="/routerRedirect" render={() => {
              let a = Math.floor(Math.random() * 10) > 5
              if (a) {
                return <Redirect to="/"/>
              }
              return <ReactReduxPage/>
            }}/>
            <Redirect from="/user" to="/redux"/>
            <Route render={() => 404}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
