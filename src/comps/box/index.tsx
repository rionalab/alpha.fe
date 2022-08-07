import { IProps } from './types'

function index(props: IProps) {
   const { children, id, className } = props

   return (
      <div id={id} className={`box ${className}`}>
         {children}
      </div>
   )
}

export default index
