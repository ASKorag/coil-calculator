import {useReducer} from 'react'
import {Route} from 'react-router-dom'
import './App.sass'
import {MainPage} from 'pages/MainPage/MainPage'
import {CalcPage} from 'pages/CalcPage/CalcPage'

import {TY_027} from 'wires/TY_027'
import {initCoilState, initIndexesState, initSupplyState, initTempState, initWireState} from 'stores/init'
import {wireReducer, coilReducer, supplyReducer, tempReducer, indexesReducer} from 'stores/reducers'

export const App = () => {
  const [wire, setWire] = useReducer(wireReducer, initWireState)
  const [coil, setCoil] = useReducer(coilReducer, initCoilState)
  const [supply, setSupply] = useReducer(supplyReducer, initSupplyState)
  const [temp, setTemp] = useReducer(tempReducer, initTempState)
  const [indexes, setIndexes] = useReducer(indexesReducer, initIndexesState)
  return (
    <>
      <Route path="/" component={MainPage} exact/>
      <Route path="/calc" render={() =>
        <CalcPage wires={TY_027} states={{wire, coil, supply, temp, indexes}} dispatchers={{
          setWire,
          setCoil,
          setSupply,
          setTemp, setIndexes
        }}/>}/>
    </>
  )
}