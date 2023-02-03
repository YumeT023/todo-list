import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Counter", () => {
  beforeEach(() => {
    render(<App />);
  });
});
