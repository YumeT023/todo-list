import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { TestUtils } from "./utils/TestUtils";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should renders the app", () => {
    const title = screen.getByText(/Todolist/i);
    expect(title).toBeInTheDocument();
  });

  it("should allow to add new todo", () => {
    const testValue = "test value todo";
    const input = screen.getByPlaceholderText(
      /enter a todo/
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();

    TestUtils.writeOnInput(testValue, input).submit();

    // it should be empty-ed after submitting the todo
    expect(input.value).toEqual("");

    // one item has been added in todo
    const unfinishedItems = screen.getAllByTestId("item--unfinished");
    expect(unfinishedItems).toHaveLength(1);

    // no item
    const finishedItems = screen.queryAllByTestId("item--done");
    expect(finishedItems).toHaveLength(0);
  });

  it("should allow to move a todo from 'unfinished' to 'done'", () => {
    const input = screen.getByPlaceholderText(
      /enter a todo/
    ) as HTMLInputElement;

    TestUtils.writeOnInput("first todo", input).submit();
    TestUtils.writeOnInput("second todo", input).submit();

    const unfinishedItems = screen.getAllByTestId("item--unfinished");
    expect(unfinishedItems).toHaveLength(2);

    const [todo_1] = unfinishedItems;

    expect(todo_1).toBeTruthy();
    const checkbox = todo_1.querySelector("[name=item-status]");

    expect(checkbox).toBeTruthy();

    //TODO: check a checkbox
    expect([]).toHaveLength(1);
  });
});
