import React from 'react';
// imports in the test react testing library
import { render, cleanup } from '@testing-library/react';
// imports the extend-expect function from jest-dom
import '@testing-library/jest-dom/extend-expect';
// imports the About component from the src/components/About/index.js file
import About from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

// sets it to cleanup after each test
afterEach(cleanup);

// use describe to declare what is being tested
describe('About component', () => {
    // First Test
    // it denotes the test
    it('renders', () => {
        // renders the About component
        render(<About />);
        render(<Nav 
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // renders the About component
        const { asFragment } = render(<About />);
        // matches the snapshot of the DOM node structure
        expect(asFragment()).toMatchSnapshot();
    })
})