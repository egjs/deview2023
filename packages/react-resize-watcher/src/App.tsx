import React from 'react';
import './App.css';
import { useResizeWatcher, useWindowSize } from './react-resize-watcher';

function App() {
  const {
    width,
    height,
  } = useWindowSize();
  const {
    width: width2,
    height: height2,
    onResize,
  } = useResizeWatcher();

  onResize(e => {
    console.log(e);
  }, []);
  return (
    <div className="App">
      useWindowSize: {width} x {height} <br />
      useResizeWatcher: {width2} x {height2} <br />
    </div>
  );
}

export default App;
