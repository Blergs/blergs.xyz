import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "../theme/stitches.config";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: `100%`,
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  borderBottom: `none`,
  width: "100%",
  zIndex: 2,
  "@bp2": {
    width: "486px",
  },
});

const BORDER_RADIUS = 12;

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "$header",
  backgroundColor: "$white",
  width: "100%",
  height: 48,
  flex: 1,
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  color: "$black",
  userSelect: "none",
  outline: "none",
  border: "8px solid $black",
  "&:first-child": { borderTopLeftRadius: BORDER_RADIUS, borderRight: 0 },
  "&:last-child": { borderTopRightRadius: BORDER_RADIUS },
  '&[data-state="active"]': {
    background: `$yellow`,
  },
  "&:focus": { position: "relative" },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  backgroundColor: "$white",
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  outline: "none",
});

const TabsListContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const Placeholder = styled("div", {
  height: 56,
});

const TabsList = StyledList;
const TabsTrigger = StyledTrigger;
const TabsContent = StyledContent;

interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId: string;
  title: string;
  showTabs: boolean;
  value: string;
  onValueChange: (value: string) => void;
}

const Tabs = ({
  tabs = [],
  defaultTabId,
  title,
  showTabs,
  onValueChange,
  value,
}: TabsProps) => (
  <StyledTabs
    defaultValue={defaultTabId}
    value={value}
    onValueChange={onValueChange}
  >
    {showTabs ? (
      <TabsListContainer>
        <TabsList aria-label={title}>
          {tabs.map((tab) => (
            <TabsTrigger value={tab.id} key={tab.id}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </TabsListContainer>
    ) : (
      <Placeholder />
    )}
    {tabs.map((tab) => (
      <TabsContent value={tab.id} key={tab.id}>
        {tab.content}
      </TabsContent>
    ))}
  </StyledTabs>
);

export default Tabs;
