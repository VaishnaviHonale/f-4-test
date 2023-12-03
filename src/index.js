// // 
// import React from 'react';
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import App from './App';
// import rootReducer from './redux/reducers/historyReducer';

// const store = createStore(rootReducer, applyMiddleware(thunk));
// const root = document.getElementById('root');
// const rootInstance = createRoot(root);

// rootInstance.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './redux/reducers/historyReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
