import { createGlobalStyle } from "style-components";
export const resetCSS = createGlobalStyle`
body{
    color: ${(props) => (props.whiteColor ? "White" : "black" )};
}
`
;

