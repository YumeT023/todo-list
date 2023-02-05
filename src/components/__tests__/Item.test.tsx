import { create } from "react-test-renderer";
import { Item } from "../components";
import { TodoItem } from "../models/Todo.model";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Item", () => {
  const item: TodoItem = {
    idx: 1,
    isComplete: false,
    content: "__mock item status",
  };

  describe("Rendering", () => {
    it("renders correctly", () => {
      const domItem = render(<Item item={item} />);

      expect(domItem).toBeTruthy();
      expect(domItem.baseElement.textContent).toEqual(item.content);
    });

    it("[snapshot] renders correctly", () => {
      const domItem = create(<Item item={item} />);
      const json = domItem.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Status", () => {
    it("renders with its status and react to checkbox event", () => {
      const onChangeMock = jest.fn();

      render(<Item item={item} onChange={onChangeMock} />);

      const renderedItem = screen.getByTestId("item--unfinished");

      expect(renderedItem).toBeTruthy();
      expect(renderedItem.textContent).toEqual(item.content);

      const checkbox = screen.getByRole("checkbox");

      fireEvent.click(checkbox);

      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
