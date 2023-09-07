/**
 * @format
 */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import App from "../App.tsx";

// Note: test renderer must be required after react-native.
jest.setTimeout(15000);

describe("when rendering", () => {
  it("renders correctly", () => {
    renderer.create(<App />);
  });
});
