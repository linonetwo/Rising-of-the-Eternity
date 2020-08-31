/* eslint no-unused-expressions: "off" */
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

export default createGlobalStyle`
  ${styledNormalize};

  body {
    margin: 0;
    overflow-y: hidden;
  }
  * {
    outline: none;
    font-family: Arial, Helvetica, Helvetica Neue, "Microsoft Yahei", "PingFang SC", "华文细黑", STXihei, serif;
    -webkit-font-smoothing: antialiased;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }

  select::-ms-expand {
    display: none;
  }
  [placeholder]{
    text-overflow:ellipsis;
  }
  ::placeholder{
    text-overflow:ellipsis;
  }
  input[type=search] {
    appearance: none;
  }

  a {
    text-decoration: none;
  }
  
  a:hover {
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    -ms-overflow-style: none;  /* IE 10+ */
  }
  *::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
  button,input[type="button"]{-webkit-appearance:none;*overflow:visible;}
`;
