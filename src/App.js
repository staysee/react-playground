import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from './state/Counter'

//make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officilis
  </Tooltip>
)

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//       This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/*make another tooltip directly inside the App */}
//         <Tooltip message = 'one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>

//       <Split className='right'>
//       This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   );
// }

class App extends React.Component {
  static defaultProp = {
    step: 1
  }
  render() {
    return (
      <main className='App'>
        <TheDate />
        <Counter count={123} step={2} />
      </main>
    )

  }
}

export default App;