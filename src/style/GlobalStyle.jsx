import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  height: 100vh;
  background-color: #1f1d2b;
  color: #808191;
}

main{
  height: 100%;
}

h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
  font-family: inherit;
}

label {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #ea5f5f;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;
