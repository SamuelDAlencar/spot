import styled from 'styled-components';

const StyledHome = styled.main`
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 15px 15px;

  .content_section {
    background-color: #f5f5f5;
    width: 80%;
    margin: 0 auto;
    transition: ease-in-out 0.1s;
    border-radius: 0 0 15px 15px;
    padding: 0 0 30px;
  }

  .filter_section {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #e9e2e2;
    padding: 30px 15px 0;
    margin-bottom: 15px;
    transition: ease-in-out 0.1s;
  }

  .items_section button {
    transition: ease-in-out 0.3s;
  }
  
  .items_section button:hover {
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
    margin: 15px 10px;
  }

  .inactive_filter_button {
    border: 0;
    border-bottom: 1px solid #826464;
    background-color: inherit;
    color: #404040;
    padding: 15px 15px 10px;
    font-size: 140%;
    margin: 0 15px;
    border-radius: 5px 5px 0 0;
  }
  
  .inactive_filter_button:hover {
    border-bottom: 3px solid #826464;
    cursor: pointer;
    transition: ease-in-out 0.1s;
  }

  .active_filter_button {
    border: 0;
    background-color: inherit;
    color: #42855B;
    padding: 15px;
    font-size: 150%;
    margin: 0 15px;
    border-radius: 5px 5px 0 0;
    border-bottom: 3px solid #42855B;
  }

  .active_filter_button:hover {
    cursor: pointer;
    transition: ease-in-out 0.1s;
  }

  .items_section {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 30px 15px;
  }

  .notFound_p {
    font-size: 130%;
    color: #333333;
    margin: 50px 0;
  }

  .notFound_p span {
    color: #42855B;
  }

  @media only screen and (max-width: 1200px) {
    .content_section {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    .filter_section {
      justify-content: space-around;
    }

    .filter_section button {
      width: 50%;
    }

    .content_section {
      width: 90%;
    }

    .items_section {
      padding: 0;
    }
  }

  @media only screen and (max-width: 320px) {
    .content_section {
      width: 100%;
    }
  }
`;

export default StyledHome;
