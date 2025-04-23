import { TIconPack } from "../../../public/assets/Icons/index";
import React from "react";
import Button from "../Buttons/button";

type IAction = {
  icon?: TIconPack;
  label: string;
  onClick: () => void;
  color?: "primary" | "danger" | "warning" | "secondary" | undefined;
};

interface IActionButtonProps {
  actions: IAction[];
}

const ActionButton: React.FC<IActionButtonProps> = ({ actions }) => {
  return (
    <div className="flex items-center gap-3">
      {actions.map((action) => (
        <Button
          className="capitalize"
          intent="solid"
          key={action.label}
          leftIcon={action?.icon}
          onClick={() => action.onClick()}
          size="xs"
          type="button"
          variant={action.color || "primary"}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default ActionButton;
