import { create } from "react-test-renderer";
import { Container } from "../components";

describe("Container", () => {
  describe("render", () => {
    test("rendered correctly", () => {
      const container = create(<Container />);
      expect(container).toBeTruthy();
    });

    test("[snapshot] rendered correctly", () => {
      const container = create(<Container />);
      const toJson = container.toJSON();
      expect(toJson).toMatchSnapshot();
    });
  });

  describe("render with props", () => {
    const margin = "4rem";
    const padding = "6rem";

    test("rendered with the given props", () => {
      const app = create(<Container m={margin} p={padding} />);
      const main = app.root;

      expect(main.props.p).toEqual(padding);
      expect(main.props.m).toEqual(margin);
    });

    test("[snapshot] rendered with the given props", () => {
      const toJson = create(<Container m={margin} p={padding} />).toJSON();
      expect(toJson).toMatchSnapshot();
    });
  });

  describe("render with additional style", () => {
    const containerStyle = {
      backgroundColor: "black",
      color: "white",
    };

    test("renders with the given props", () => {
      const app = create(<Container style={containerStyle} />);
      const container = app.root;

      const actualStyle = container.props.style;
      expect(actualStyle).toEqual(containerStyle);
    });

    test("[snapshot] renders with the given props", () => {
      const app = create(<Container style={containerStyle} />);

      const json = app.toJSON();

      expect(json).toMatchSnapshot();
    });
  });
});
