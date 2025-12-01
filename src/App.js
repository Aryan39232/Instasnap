import React, { useState } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage';
import HomePage from './components/HomePage';

function App() {
  const [is_loading, set_is_loading] = useState(true);

  const handleLoadingComplete = () => {
    set_is_loading(false);
  };

  return (
    <div className="app">
      {is_loading ? (
        <LoadingPage onComplete={handleLoadingComplete} />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
