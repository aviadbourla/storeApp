import React from 'react';
import SiteRouter from './routres/SiteRouter'
import { Provider } from 'react-redux'
import reducer from './Redux/reducer'
import { createStore } from 'redux'

function App() {
  const store = createStore(reducer);
  return (
    <div >
      <Provider store={store}>  <SiteRouter />   </Provider>
    </div>
  );
}
export default App;
