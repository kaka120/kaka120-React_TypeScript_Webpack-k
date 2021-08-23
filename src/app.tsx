import React from 'react'
import IMAGE from './App.png';
import LOGO from './logo.svg'
const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={IMAGE} alt="image" width="300" height="200"/>
      <img src={LOGO} alt="image" width="300" height="200"/>
    </React.Fragment>
  )
}

export { App }