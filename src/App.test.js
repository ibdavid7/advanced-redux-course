import React from "react";
import ReactDom from 'react-dom';
import App from "./App";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<App/>, div);

    expect(div.innerHTML).toContain('Hi There!');

    ReactDom.unmountComponentAtNode(div);
});