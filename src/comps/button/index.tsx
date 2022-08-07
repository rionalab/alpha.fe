import { IProps } from './types'

function Button(props: IProps) {
   const {
      label,
      onClick,
      className,
      id,
      size = 'md',
      theme = 'primary',
   } = props

   return (
      <button
         onClick={onClick}
         className={`${className} theme-${theme} ${size}`}
         id={id}
      >
         {label}
      </button>
   )
}

export default Button
