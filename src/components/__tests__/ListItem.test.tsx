import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { ListItem } from "../list-item";
import { itemsMock } from "./mocks/items-mock";

describe("ListItem", () => {
  describe("rendering", () => {
    test("rendered correctly", () => {
      const listItem = render(<ListItem items={[]} handleCheck={() => null} />);

      expect(listItem.baseElement).toBeInTheDocument();
    });

    test("[snapshot] rendered correctly", () => {
      const listItem = create(<ListItem items={[]} handleCheck={() => null} />);

      const json = listItem.toJSON();
      expect(json).toMatchSnapshot();
    });
  });

  describe("Items mapping", () => {
    it("map items according to `whoseComplete` props", () => {
      render(
        <ListItem
          items={itemsMock}
          handleCheck={() => null}
          whoseComplete={false}
        />
      );

      const listItemUnfinished = screen.getByTestId("list-unfinished");
      const unfinishedItemLength = itemsMock.filter(
        (item) => !item.isComplete
      ).length;

      expect(listItemUnfinished.children).toHaveLength(unfinishedItemLength);
    });

    it("[snapshot] map items according to `whoseComplete` props", () => {
      const renderer = create(
        <ListItem
          items={itemsMock}
          handleCheck={() => null}
          whoseComplete={false}
        />
      );

      const json = renderer.toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
