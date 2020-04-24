import React from "react";
import { render, waitFor } from '@testing-library/react';

import App from './App'

test("renders show poster", async () => {
  const { queryAllByAltText } = render(<App />);

  await waitFor(()=> {
    expect(queryAllByAltText(/stranger things/i)).toHaveLength(1);
  });
})