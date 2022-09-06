import React from "react";
import styled from "styled-components";
import {
  space,
  layout,
  position,
  flexbox,
  background,
  border,
  shadow,
  color,
  textAlign,
  borderRadius,
  overflow,
  lineHeight,
  SpaceProps,
  LayoutProps,
  PositionProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
  ShadowProps,
  ColorProps,
  TextAlignProps,
  BorderRadiusProps,
  OverflowProps,
  LineHeightProps,
  system,
} from "styled-system";

export type BoxProps = SpaceProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  BackgroundProps &
  BorderProps &
  ShadowProps &
  ColorProps &
  TextAlignProps &
  BorderRadiusProps &
  OverflowProps &
  LineHeightProps &
  Pick<React.CSSProperties, "cursor">;

const Box = styled.div<BoxProps>(
  {},
  space,
  layout,
  position,
  flexbox,
  background,
  border,
  shadow,
  color,
  textAlign,
  borderRadius,
  overflow,
  lineHeight,
  system({
    cursor: true,
  })
);

export { Box };
