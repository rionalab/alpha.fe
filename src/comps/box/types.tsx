import { ETheme } from 'utils/types.global'

export interface IProps {
   className?: string
   id?: string
   children: JSX.Element | JSX.Element[]
   theme?: ETheme
}
