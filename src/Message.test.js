import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    
    it('renders the UI as expected', () => {
        //render the component and create a human readable JSON file
        const tree = renderer
        .create(<Messages name='Messages' unread={4}  />)
        .toJSON();
        //compare the rendered componenet to a saved version of the component
        expect(tree).toMatchSnapshot();
    })
    
    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
        .create(<Messages name="Messages" unread={0} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
})