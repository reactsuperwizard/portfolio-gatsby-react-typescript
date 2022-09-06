type ColorVariation =
  | "10"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type Colors = {
  white: string;
  accent: {
    blue: string;
    orange: string;
  };
  black: Record<ColorVariation, string>;
  blue: Record<ColorVariation, string>;
};

type FontSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
type MediaQueriesSizes = "minSm" | "maxSm" | "minMd" | "maxMd";

export type Theme = {
  colors: Colors;
  fonts: string[];
  breakpoints: string[];
  fontSizes: Record<FontSizes, string>;
  mediaQueries: Record<MediaQueriesSizes, string>;
};
