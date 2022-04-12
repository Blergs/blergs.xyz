import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { styled } from "../theme/stitches.config";

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  borderRadius: 10,
  padding: "12px 46px",
  fontSize: 20,
  lineHeight: 1,
  gap: 5,
  backgroundColor: "transparent",
  fontFamily: "$header",
  color: "$black",
  "&:hover": { backgroundColor: "$yellow" },
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "$white",
  borderRadius: 20,
  border: "4px solid $black",
  //   padding: "2px 16px 16px 16px",
  padding: 0,
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 12,
});

const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  color: "$black",
  fontFamily: "$header",
  fontSize: 20,
  lineHeight: 1,
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  padding: "12px 46px",
  position: "relative",
  userSelect: "none",

  "&:focus": {
    backgroundColor: "$yellow",
  },
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: "$red",
  cursor: "default",
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

const SelectTrigger = StyledTrigger;
const SelectValue = SelectPrimitive.Value;
const SelectContent = StyledContent;
const SelectViewport = StyledViewport;
const SelectGroup = SelectPrimitive.Group;
const SelectItem = StyledItem;
const SelectItemText = SelectPrimitive.ItemText;
const SelectScrollUpButton = StyledScrollUpButton;
const SelectScrollDownButton = StyledScrollDownButton;

interface Option {
  value: string;
  label: string | React.ReactNode;
  id: string;
}

interface SelectProps {
  options: Array<Option>;
  defaultValue: string;
  label: string;
  onValueChange: (value: string) => void;
}

export const Select = ({
  options,
  defaultValue,
  label,
  onValueChange,
}: SelectProps) => (
  <SelectPrimitive.Root
    defaultValue={defaultValue}
    onValueChange={onValueChange}
  >
    <SelectTrigger aria-label={label}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>👆</SelectScrollUpButton>
      <SelectViewport>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.id} value={option.value}>
              <SelectItemText>{option.label}</SelectItemText>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectViewport>
      <SelectScrollDownButton>👇</SelectScrollDownButton>
    </SelectContent>
  </SelectPrimitive.Root>
);

export default Select;
