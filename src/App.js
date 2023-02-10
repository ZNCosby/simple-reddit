import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Searchbar } from './features/searchbar/Searchbar';
import { Subreddits } from './features/subreddits/subreddits';
import { Posts } from './features/posts/Posts';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <header className="App-content">
        <Posts />
        <Subreddits />
      </header>
    </div>
  );
}

export default App;
