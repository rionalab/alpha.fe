import { ESize, ETheme } from 'utils/types.global'

export interface IProps {
   label?: string
   icon?: string
   className?: string
   id?: string
   size?: ESize
   theme?: ETheme
   onClick?: () => void
}
