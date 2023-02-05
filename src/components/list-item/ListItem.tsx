import React, { useCallback } from "react";
import { Item } from "../item";
import { TodoItem } from "../../models/Todo.model";
import "./ListItem.css";

export type ListItemProps = {
  items: Array<TodoItem>;
  whoseComplete: boolean;
  handleCheck(idx: number): void;
};

export const ListItem = ({
  items,
  whoseComplete,
  handleCheck,
}: ListItemProps) => {
  const renderItems = useCallback(() => {
    return items.map(
      (item) =>
        item.isComplete === whoseComplete && (
          <Item
            key={item.idx}
            item={item}
            onChange={() => handleCheck(item.idx)}
          />
        )
    );
  }, [items]);

  return <div className="container__list">{renderItems()}</div>;
};
