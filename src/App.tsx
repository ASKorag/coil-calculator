import {useState} from 'react'
import {Route} from 'react-router-dom'
import './App.sass'
import {MainPage} from 'pages/MainPage/MainPage'
import {CalcPage} from 'pages/CalcPage/CalcPage'

import {TY_027} from 'wires/TY_027'

export const App = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      {/*<Route path="/calc" component={CalcPage} />*/}
      <Route path="/calc" render={() => <CalcPage wires={TY_027} />}/>
    </>
  )
}