import React, {InputHTMLAttributes} from 'react'
import {ButtonHTMLAttributes, HTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes} from 'react'
import {TWiresBase} from './wires'
import {TCoil, TSupply, TTemp, TWire} from './states'
import {TCoilAction, TSupplyAction, TTempAction, TWireAction} from './actions'

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
    temp: TTemp,
  },
  dispatchers: {
    setWire: React.Dispatch<TWireAction>
    setCoil: React.Dispatch<TCoilAction>
    setSupply: React.Dispatch<TSupplyAction>
    setTemp: React.Dispatch<TTempAction>
  }
}

export type TFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string,
  mod: string,
  handler: (event: React.FocusEvent<HTMLInputElement>) => void
}

export type TGroupProps = HTMLAttributes<HTMLDivElement> & {
  text: string
  mod: string
}

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string,
  mod: string,
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}