import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes
} from 'react'
import {TWiresBase} from './wires'
import {TFinalData, TSourceData} from './states'
import {TFinalDataAction, TSourceDataAction, TSourceDataActionTypes} from './actions'

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
    sourceData: TSourceData,
    finalData: TFinalData
  },
  dispatchers: {
    setSourceData: React.Dispatch<TSourceDataAction>,
    setFinalData: React.Dispatch<TFinalDataAction>
  }
}

export type TFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string,
  id: string,
  action: TSourceDataActionTypes,
  handler: (event: React.FocusEvent<HTMLInputElement>) => void
}

export type TGroupProps = HTMLAttributes<HTMLDivElement> & {
  mod: string
}

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  text: string,
  id: string,
  action: TSourceDataActionTypes,
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}