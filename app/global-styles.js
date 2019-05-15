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
    text-align: center;
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

  // search bar form
  .form-search { 
    display: inline-block;
    flex-flow: row wrap;
    margin: 0 auto
  }

  .form-search label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.2em;
    color: #006994;
  }

  .form-search input[type=text] {
    padding: 5px 20px;
    text-decoration: none;
    margin: 4px 10px;
  }

  .form-search input[type=submit] {
    background-color: #006994;
    border: none;
    color: white;
    padding: 7px 20px;
    text-decoration: none;
    margin: 4px 2px;
  }

  //world map chart


  @media only screen and (max-width: 414px) {
    body {
      text-align: center;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .form-search { 
      display: flex;
      align-items: flex-start;
    }
  
    .form-search label {
      font-family: Georgia, Times, 'Times New Roman', serif;
      line-height: 1.5em;
      margin-left: 10px;
      color: #006994;
      width: 100%;
      float: left;
      text-align: left;
      display: inline-block;
    }

    .form-search input[type=text] {
      display: inline-block;
      text-align: left;
      text-decoration: none;
    }

    .form-search input[type=submit] {
      background-color: #006994;
      border: none;
      color: white;
      padding: 7px 20px;
      margin-bottom: 10px;
      display: block;
      width: 100%;
      float: left;
    }
  }
`;

export default GlobalStyle;
