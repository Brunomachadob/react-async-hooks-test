import React from "react";
import { render, cleanup, wait } from 'react-testing-library'

import "../../setupTests";

import App from "../../App"

afterEach(cleanup)

describe("Testing App component", () => {
  it("should work", async () => {
    jest.useFakeTimers()

    const { container } = render(
      <App />
    )
  
    expect(container.firstChild.textContent).toEqual("1");

    await wait(() => {
      expect(container.firstChild.textContent).toEqual("2");
    });
  });
});
