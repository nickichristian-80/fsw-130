import React from 'react';
import './App.css';
import Header from './Header'
import Button from './Button'
import ThemeContext from './themeContext'

function App() {
  return (
    <div className="App">
      <Header />
      <ThemeContext.Consumer>
        {({theme}) => (
          <Button theme = {theme} />
        )}
      </ThemeContext.Consumer>
    </div>
  )
}
export default App;