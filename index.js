import 'flexboxgrid';
 import 'babel-polyfill'
// import React from 'react'
// import { render } from 'react-dom'
// import { browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import Root from './containers/Root'
// import configureStore from './store/configureStore'
//
// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)
//
// render(
//   <Root store={store} history={history} />,
//   document.getElementById('root')
// )

 import React from 'react';
 import ReactDOM from 'react-dom';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import MyAwesomeReactComponent from './src/components/MyAwesomeReactComponent';

 const App = () => (
     <MuiThemeProvider>
       <MyAwesomeReactComponent />
     </MuiThemeProvider>
 );

 ReactDOM.render(
     <App />,
     document.getElementById('root')
 );