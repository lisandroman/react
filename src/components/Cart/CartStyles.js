import styled from 'styled-components';

export const CardCart = styled.div`
  width: 100%;
  padding: 10px 10px;
  background: #ecf0f3;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff,
               3px 3px 5px #ceced1;
    p {
      color: #31344b;
    }
`;

export const Buttons = styled.div `
  width: 10.5rem;
  justify-content: space-between; 
  border: none;
  display: ${ props => props.corto ? "inline-block" : "inline"};

  .clearButtonUnderline {
    text-decoration: none;
  }
    
  button{
    background: #ecf0f3;
    box-shadow: -3px -3px 7px #ffffff,
                3px 3px 5px #ceced1;
    border: none;
    border-radius: 5px;
    background-color: ${ props => props.lila ? "#e2e6f7" : props.rosa ?  "#fadafa" : props.grey ? "#855b8d" : "#aca9fa" };
    color: ${ props => props.blanco ? "#817094" : "#fff" };
    cursor: pointer;
    font-size: 17px;
    font-weight: 400;
    outline: none;
    padding: 12px 6px;
    position: relative;
    width: 100%;
    z-index: 4;
  }

  button:hover:before{
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