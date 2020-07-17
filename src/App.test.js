import React from 'react';
import App from './App';
import { mockData as data } from "./mockData";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { getShow as mockGetShow } from './api/getShow';

jest.mock('./api/getShow');

test('App Renders',async () => {
    mockGetShow.mockResolvedValueOnce(mockData);
    const { getByRole } = render(<App />);

    const title = getByRole('heading');
});

const mockData = data;

