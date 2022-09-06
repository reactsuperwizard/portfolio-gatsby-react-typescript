import styled from "styled-components";
import {
  grid,
  GridProps as SSGridProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
  size,
  SizeProps,
  layout,
  LayoutProps,
} from "styled-system";

export type GridProps = SSGridProps &
  FlexboxProps &
  SpaceProps &
  SizeProps &
  LayoutProps & {};

const Grid = styled.div<GridProps>(
  {
    display: "grid",
  },
  grid,
  flexbox,
  space,
  size,
  layout
);

export { Grid };
