import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration:none;
}
*:focus{
  outline:0;
}
html,
body,
#root {
  height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  z-index: 1;

}
body, input, button{
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  background: #fff;
  max-width: 100vw;
  /* overflow-x: hidden; */
}
/*
.page-enter {
  opacity: 0;
}
.page-enter-active {
  opacity: 1;
  transition: opacity 800ms ease-in;
}
.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0;
  transition: opacity 800ms ease-in;
} */

`;
