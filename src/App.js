import React from 'react';

import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import Tabs from './state/Tabs'

import './App.css';

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

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabs={tabsProp} />
      </div>
    )
  }
}


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

// class App extends React.Component {
//   static defaultProp = {
//     step: 1
//   }
//   render() {
//     return (
//       <main className='App'>
//         <TheDate />
//         <Counter count={123} step={2} />
//       </main>
//     )

//   }
// }


export default App;