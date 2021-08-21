import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ecf0f3;
  box-shadow: -3px -3px 7px #ffffff,
              3px 3px 5px #ceced1;
  width: 350px;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;

  img{
    border-radius: 10px;
    border: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 35px;
    width: 100wh;
    padding: 10px;

    img{
      width: 70%;
    }

  }
`;

export const Buttons = styled.div`
  width: 10.5rem;
  justify-content: space-between;
  border: none;
  display: ${(props) => (props.smSize ? "inline-block" : "inline")};

  .clearButtonUnderline {
    text-decoration: none;
  }

  button {
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
    border: none;
    border-radius: 5px;
    background-color: ${(props) =>
      props.bgLila
        ? "#e2e6f7"
        : props.bgPink
        ? "#fadafa"
        : props.bgGrey
        ? "#855b8d"
        : "#aca9fa"};
    color: ${(props) => (props.textWhite ? "#817094" : "#fff")};
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    padding: 12px 6px;
    position: relative;
    width: 100%;
    z-index: 4;
  }

  button:hover:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, 
                inset 3px 3px 5px #ceced1;
    z-index: -1;
    border-radius: 5px;
  }
`;
