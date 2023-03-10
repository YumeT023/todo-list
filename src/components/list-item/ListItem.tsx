import React, { useCallback } from "react";
import { Item } from "../item";
import { TodoItem } from "../../models/Todo.model";
import "./ListItem.css";
import { joinClassname } from "../../utils/join-classname";

export type ListItemProps = {
  items: Array<TodoItem>;
  whoseComplete?: boolean;
  handleCheck(idx: number): void;
} & Record<string, any>;

export const ListItem = ({
  items,
  handleCheck,
  className,
  whoseComplete = true,
  ...rest
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

  return (
    <div
      className={joinClassname("container__list", className)}
      data-testid={`list-${whoseComplete ? "done" : "unfinished"}`}
      {...rest}
    >
      {renderItems()}
    </div>
  );
};
