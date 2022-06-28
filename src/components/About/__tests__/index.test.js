import React from 'react';
// imports in the test react testing library
import { render, cleanup } from '@testing-library/react';
// imports the extend-expect function from jest-dom
import '@testing-library/jest-dom/extend-expect';
// imports the About component from the src/components/About/index.js file
import About from '..';
// sets it to cleanup after each test
afterEach(cleanup);

// use describe to declare what is being tested
describe('About component', () => {
    // First Test
    // it denotes the test
    it('renders', () => {
        // renders the About component
        render(<About />);
    });


})



