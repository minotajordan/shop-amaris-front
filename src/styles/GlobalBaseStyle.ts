import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalBaseStyle = createGlobalStyle`
  ${normalize};

  body, #__next {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  .color-basic {
    color: #848484;
    span {
      font-size: 8px;
      margin: 5px;
    }
  }

  .top-nav {
    float: right;
    width: 100%;
    height: 50px;
    font-size: 13px;
    background-color: #248ff3;
    &-logo {
      margin: 5px 0px 5px 20px;
    }
  }

  .color-normal {
    color: #5e5e5e;
    span {
      font-size: 8px;
      margin: 5px;
    }
  }

  .ant-card-actions {
    background-color: #f0f0f0;
    border-radius: 10px 10px 10px 10px;
  }

  .ant-card-body {
    padding: 15px 10px 0px 15px;
  }

  .ant-alert {
    border-radius: 10px;
  }

  .demo-loadmore-list {
    li {
      background-color: #f5f5f5;
      padding: 18px 10px 5px 10px;
      border-radius: 10px;
      margin-bottom: 10px;
      margin-top: 5px;
    }
  }

  .ant-input {
    width: 50px;
    border-radius: 10px;
    margin: 0px 5px 0px 5px;
    text-align: center;
  }

  .ant-card-cover {
    div {
      margin: 10px 0px 0px 10px;
      margin: 10px 0px 0px 10px!important;
      width: 90%;
    }
  }
`

export default GlobalBaseStyle
