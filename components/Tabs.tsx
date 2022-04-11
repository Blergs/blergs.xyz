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
  borderBottom: "none",
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
}

const Tabs = ({ tabs = [], defaultTabId, title }: TabsProps) => (
  <StyledTabs defaultValue={defaultTabId}>
    <TabsListContainer>
      <TabsList aria-label={title}>
        {tabs.map((tab) => (
          <TabsTrigger value={tab.id} key={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </TabsListContainer>
    {tabs.map((tab) => (
      <TabsContent value={tab.id} key={tab.id}>
        {tab.content}
      </TabsContent>
    ))}
  </StyledTabs>
);

export default Tabs;
