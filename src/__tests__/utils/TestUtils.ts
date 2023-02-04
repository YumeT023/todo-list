import { fireEvent } from "@testing-library/react";

export class TestUtils {
  static writeOnInput(label: string, _input: HTMLInputElement) {
    fireEvent.change(_input, { target: { value: label } });
    expect(_input.value).toBe(label); // ensure ...

    return {
      submit: () => fireEvent.submit(_input),
    };
  }
}
