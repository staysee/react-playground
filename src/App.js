import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate'
import Counter from './state/Counter'
import Tabs from './state/Tabs'
import Accordian from './state-drills/Accordian'

import './App.css';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

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

class App extends React.Component {
  static defaultProp = {
    step: 1
  }
  render() {
    return (
      <div className="App">
        <div>
        <h1>Accordian</h1>
          <Accordian sections={sectionsProp}/>
        </div>

        <div className="TabsAssignment">
        <h1>Tabs</h1>
          <Tabs tabs={tabsProp} />
        </div>

        <div className="DateAssigment">
        <h1>Date</h1>
          <TheDate />
        </div>

        <div className="CounterAssignment">
          <h1>Counter</h1>
          <Counter count={123} step={2} />
        </div>

        <h1>Split</h1>
        <div className="SplitAssignment">
          <Split className='left' flexBasis='2'>
            This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
            {/*make another tooltip directly inside the App */}
            <Tooltip message = 'one more tooltip message'>
              Necessitatibus?
            </Tooltip>
          </Split>

          <Split className='right'>
            This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
          </Split>
        </div>
        
      </div>
    )
  }
}

export default App;