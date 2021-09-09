import React, {useEffect} from 'react'
import './CalcPage.sass'
import {Select} from 'components/atoms/Select/Select'
import {TCalcPageProps} from 'types/props'
import {TIndexesActionTypes, TWireActionTypes} from '../../types/actions'
import {TWire} from '../../types/states'

export const CalcPage: React.FC<TCalcPageProps> = ({wires, states, dispatchers}) => {
  const wiresNomDiam = wires.map(wire => ({value: wire.nomDiam}))
  const {wire, coil, temp, supply, indexes} = states
  const {setWire, setCoil, setSupply, setTemp, setIndexes} = dispatchers

  function handlerSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const name = event.target.name
    const index = event.target.selectedIndex

    if (name === 'diam') {
      setIndexes({type: TIndexesActionTypes.CHANGE_WIRE_INDEX, value: index})

    }
    if (name === 'isol') {
      setIndexes({type: TIndexesActionTypes.CHANGE_ISOLATION_INDEX, value: index})
    }
  }

  useEffect(() => {
    type a = 'type1' | 'type2' | 'type3'
    const b = `type${indexes.isolationIndex + 1}` as a

    const newWire: TWire = {
      nomDiam: wires[indexes.wireIndex].nomDiam,
      maxDiam: wires[indexes.wireIndex].maxDiam[b],
      weight1km: wires[indexes.wireIndex].weight1km,
      resist1m: {
        minResist: wires[indexes.wireIndex].resist1m.minResist,
        nomResist: wires[indexes.wireIndex].resist1m.nomResist,
        maxResist: wires[indexes.wireIndex].resist1m.maxResist
      }
    }
    setWire({type: TWireActionTypes.CHANGE_WIRE, value: newWire})
  },[indexes]
  )
  useEffect(() => {
    type a = 'type1' | 'type2' | 'type3'
    const b = `type${indexes.isolationIndex + 1}` as a
    const newMaxDiam = wires[indexes.wireIndex].maxDiam[b]
    setWire({type: TWireActionTypes.CHANGE_ISOLATION, value: newMaxDiam})
  }, [indexes])

    return (
      <div className="calc-page page">
        <div>
          <span>{`Nom. diam => ${wire.nomDiam}`}</span><br/>
          <span>{`Max. diam => ${wire.maxDiam}`}</span><br/>
          <span>{`Weight 1km => ${wire.weight1km}`}</span><br/>
          <span>{`Min. resist 1m => ${wire.resist1m.minResist}`}</span><br/>
          <span>{`Nom. resist 1m => ${wire.resist1m.nomResist}`}</span><br/>
          <span>{`Max. resist 1m => ${wire.resist1m.maxResist}`}</span><br/>
          <hr/>

          <Select text="Nom. diameter" mod="diam" name="diam" options={wiresNomDiam} handler={handlerSelect}
                  value={wire.nomDiam}/>
          <Select text="Isolation type" mod="isol" name="isol" options={[{value: 1}, {value: 2}, {value: 3}]}
                  handler={handlerSelect} value={indexes.isolationIndex + 1}/>

        </div>
      </div>
    )
  }