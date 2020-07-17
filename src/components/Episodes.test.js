import React from 'react';
import App from '../App';
import { mockData as data } from "../mockData";
import {getShow as mockGetShow, getShow} from "../api/getShow";

import Episodes from "./Episodes";
import {render} from "@testing-library/react";

jest.mock('../api/getShow');

test('episodes render', () => {
    mockGetShow.mockResolvedValueOnce(mockData);
    const { getByRole } = render(<App />);


});

const mockData = data;

