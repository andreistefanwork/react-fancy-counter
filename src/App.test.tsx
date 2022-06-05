import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';

test('renders app component', () => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>
    );

    const reverseButton = screen.getByText(/reverse/i);
    const stopButton = screen.getByText(/stop/i);

    expect(reverseButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
});
