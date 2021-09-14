import {useReducer} from 'react'
import {Route} from 'react-router-dom'
import './App.sass'
import 'normalize.css'
import {MainPage} from 'pages/MainPage/MainPage'
import {CalcPage} from 'pages/CalcPage/CalcPage'

import {TY_027} from 'wires/TY_027'
import {initSourceData, initFinalData} from 'stores/init'
import {
  sourceDataReducer,
  finalDataReducer
} from 'stores/reducers'

export const App = () => {
  const [sourceData, setSourceData] = useReducer(sourceDataReducer, initSourceData)
  const [finalData, setFinalData] = useReducer(finalDataReducer, initFinalData)
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      <Route path="/calc" render={() =>
        <CalcPage wires={TY_027} states={{sourceData, finalData}} dispatchers={{
          setSourceData, setFinalData
        }}/>}/>
    </>
  )
}