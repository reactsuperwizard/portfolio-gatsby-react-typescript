import styled from "styled-components";
import {
  color,
  typography,
  size,
  margin,
  maxWidth,
  textStyle,
  textAlign,
  padding,
  minWidth,
  minHeight,
  ColorProps,
  TypographyProps,
  SizeProps,
  MarginProps,
  MaxWidthProps,
  TextStyleProps,
  TextAlignProps,
  PaddingProps,
  MinWidthProps,
  MinHeightProps,
  system,
} from "styled-system";

export type TextProps = ColorProps &
  TypographyProps &
  SizeProps &
  MarginProps &
  MaxWidthProps &
  TextStyleProps &
  TextAlignProps &
  PaddingProps &
  MinWidthProps &
  MinHeightProps &
  Pick<React.CSSProperties, "cursor"> & {};

const Text = styled.span<TextProps>(
  {},
  color,
  typography,
  size,
  margin,
  maxWidth,
  textStyle,
  textAlign,
  padding,
  minWidth,
  minHeight,
  system({
    cursor: true,
  })
);

export { Text };
