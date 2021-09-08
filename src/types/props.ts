import {ButtonHTMLAttributes, HTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes} from 'react'
import {TWiresBase} from './wires'

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
  options: TOptionProps[]
}

export type TCalcPageProps = HTMLAttributes<HTMLDivElement> & {
  wires: TWiresBase
}