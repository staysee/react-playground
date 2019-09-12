import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs'

// import renderer from 'react-test-renderer'

describe('Tabs Component', () => {

	const tabsProp = [
		{ name: 'First tab',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
		{ name: 'Second tab',
			content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
		{ name: 'Third tab',
			content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
	];

	it('renders without errors', () => {
			const div = document.createElement('div');
			ReactDOM.render(<Tabs />, div);
			ReactDOM.unmountComponentAtNode(div);
	})

	it('renders the first tab by default', () => {
		// const tree = renderer.create(<Tabs tabs={tabsProp} />)
		// expect(tree).toMatchSnapshot()
		const wrapper = shallow(<Tabs tabs={tabsProp} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders empty given no tabs', () => {
		const wrapper = shallow(<Tabs />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	//test for clicking one of the buttons
	it('closes the first tab and opens any clicked tab', () => {
		const wrapper = shallow(<Tabs tabs={tabsProp} />)
		console.log('>>> WRAPPER <<<')
		console.log(wrapper.debug())
		console.log('>>> FIND(BUTTON) <<<')
		console.log(wrapper.find('button').debug())
		
		console.log(wrapper.find('button').at(1).debug())
		wrapper.find('button').at(1).simulate('click')
		expect(toJson(wrapper)).toMatchSnapshot()
	})
})