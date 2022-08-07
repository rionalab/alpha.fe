import Button from 'comps/button'
import Box from 'comps/box'
import { ETheme } from 'utils/types.global'
import Paragraph from 'comps/paragraph'

function App() {
   return (
      <Box className="shadow">
         <Paragraph theme={ETheme.SECONDARY}>
            As a front-end developer with commercial experience with Vue.js,
            I’ve got something to say about the disadvantages of this framework.
            — 💡 Disclaimer: Please mind that these are just my personal
            opinions and point
         </Paragraph>

         <Button theme={ETheme.PRIMARY} label="Buttonx" />
      </Box>
   )
}

export default App
