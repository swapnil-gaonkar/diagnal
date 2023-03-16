import React from 'react';
import MovieHeader from './components/MovieHeader';
import MovieDashboard from './components/MovieDashboard';
import { Provider } from 'react-redux';
import store from './components/store/store'

function App() {
  return (
    <Provider store={store}>
        <MovieHeader />
        <MovieDashboard />
    </Provider>  
  );
}

export default App;
