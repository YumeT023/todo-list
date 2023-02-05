import { create } from "react-test-renderer";
import { TextInput } from "../components";
import { fireEvent, render, screen } from "@testing-library/react";
import { TestUtils } from "./utils/TestUtils";
import { fireInputEvent } from "@testing-library/user-event/dist/keyboard/shared";

describe("", () => {
  describe("rendering", () => {
    test("renders the component", () => {
      const renderer = create(<TextInput />);
      expect(renderer).toBeTruthy();
    });

    test("[snapshot] renders the component", () => {
      const renderer = create(<TextInput />);
      const json = renderer.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("User input", () => {
    const testValue = "test value";

    test("reacts to the change", () => {
      render(<TextInput />);

      const textInput = screen.getByTestId("text-input") as HTMLInputElement;

      TestUtils.writeOnInput(testValue, textInput);

      expect(textInput).toBeTruthy();
      expect(textInput.value).toBe(testValue);
    });

    test("[snapshot] reacts to the change", () => {
      const app = create(<TextInput value={testValue} />);
      const json = app.toJSON();

      expect(json).toMatchSnapshot();
    });
  });
});
