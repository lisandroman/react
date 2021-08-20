import styled from 'styled-components';

export const StyledCheckout = styled.div`
  height: 70vh;
  display: grid;
  place-items: center;
  background: #ecf0f3;
  text-align: center;
`;

export const FormContainer = styled.div `
  width: 330px;
  padding: 40px 30px;
  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff,
               3px 3px 5px #ceced1;
    h4 {
      color: #31344b;
      margin-bottom: 20px;
    }
    button{
      margin: 25px 0;
      width: 100%;
      height: 50px;
      font-size: 18px;
      font-weight: 600;
      background-color: #afe6a6;
      border-radius: 15px;
      border: none;
      outline: none;
      cursor: pointer;
      color: #4a4c63;
      box-shadow: 2px 2px 5px #BABECC,
                -5px -5px 10px #ffffff73;
    }
    button:focus{
      color: #579258;
      box-shadow: inset 2px 2px 5px #BABECC,
                  inset -5px -5px 10px #ffffff;
    }
`;

export const WrapperInput = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;

    &:nth-child(2),:nth-child(3), :nth-child(4), :nth-child(5){
      margin-top: 15px;
    }

    input {
      height: 100%;
      width: 100%;
      padding-left: 45px;
      outline: none;
      border: none;
      font-size: 18px;
      background: #dde1e7;
      color: #855b8d;
      border-radius: 15px;
      box-shadow: inset 2px 2px 5px #BABECC,
                  inset -5px -5px 10px #ffffff73;
    }
    input:hover {
      color: #855b8d;
    }
    
    input:focus {
      box-shadow: inset 1px 1px 2px #BABECC,
                inset -1px -1px 2px #ffffff73;
    }
    span{
      position: absolute;
      color: #595959;
      width: 50px;
      line-height: 50px;
    }
`;