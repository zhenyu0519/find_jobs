import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: #006994;
  }

  body {
    text-align: center
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .form-inline { 
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .form-inline input[type=button], input[type=submit], input[type=reset] {
    background-color: #006994;
    border: none;
    color: white;
    padding: 8px 20px;
    text-decoration: none;
    margin: 4px 2px;
  }

  .form-inline input[type=text] {
    padding: 5px 20px;
    text-decoration: none;
    margin: 4px 10px;
  }


  @media (max-width: 500px) {
    .form-inline input {
      margin: 10px 0;
    }
    
    .form-inline {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

export default GlobalStyle;
