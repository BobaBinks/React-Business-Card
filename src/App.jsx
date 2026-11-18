import Info from "../components/Info"
import About from "../components/About"
import Interest from "../components/Interest"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

function App() {


  return (
    <>
      <Info />
      <About />
      <Interest />
      <h1>Hi</h1>
    </>
  )
}

export default App
