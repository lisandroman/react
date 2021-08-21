import styled from 'styled-components';


export const ButtonsCounter = styled.div`
  align-items: center;
  background: #ecf0f3;
      box-shadow: -3px -3px 7px #ffffff,
                  3px 3px 5px #ceced1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0 15px 0;
  padding: 30px;
  position: relative;

  .buttonGroup {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: center;
  }
  .counter {
    margin-top: 5px;
    margin-left: 15px;
    margin-right: 15px;
    color: #817094;
  }

  button{
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #ffffff,
                3px 3px 5px #ceced1;
    position: relative;
    margin: 0 5px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 50%;
    color: #817094;
  }

  button:hover::before{
    content: '';
    border-radius: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    box-shadow: inset -3px -3px 7px #ffffff,
                inset 3px 3px 5px #ceced1;
  }
`;