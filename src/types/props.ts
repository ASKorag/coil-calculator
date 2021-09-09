import React from 'react'
import {ButtonHTMLAttributes, HTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes} from 'react'
import {TWiresBase} from './wires'
import {TCoil, TSupply, TTemp, TWire} from './states'
import {TAction, TCoilAction, TSupplyAction, TTempAction, TToggleAction, TWireAction} from './actions'

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string,
  mod: string
  href?: string
}

export type TOptionProps = OptionHTMLAttributes<HTMLOptionElement> & {
  text?: string,
}

export type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  text: string,
  mod: string,
  options: TOptionProps[],
  handler: (event: React.ChangeEvent<HTMLSelectElement>) => void
}


export type TCalcPageProps = HTMLAttributes<HTMLDivElement> & {
  wires: TWiresBase,
  states: {
    wire: TWire,
    coil: TCoil,
    supply: TSupply,
    temp: TTemp
  },
  dispatchers: {
    setWire: React.Dispatch<TWireAction>
    setCoil: React.Dispatch<TCoilAction>
    setSupply: React.Dispatch<TSupplyAction>
    setTemp: React.Dispatch<TTempAction>
  }
}