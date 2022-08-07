import { IProps } from './types'

function Paragraph(props: IProps) {
   const { className = '', theme, children = '...' } = props

   return <p className={`paragraph ${className} ${theme}`}>{children}</p>
}

export default Paragraph
