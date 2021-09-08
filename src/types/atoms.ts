import {ButtonHTMLAttributes} from 'react'

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string,
  mod: string
}