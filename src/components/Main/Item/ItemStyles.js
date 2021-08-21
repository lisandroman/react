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
  margin-top: 20px;

    //Boton "Detalles"
    .buttons {
      display: flex;
      width: 10rem;
      justify-content: space-between; 
      text-decoration: none;
    }
   
    .buttons button{
      box-shadow: -3px -3px 7px #ffffff,
                  3px 3px 5px #ceced1;
      position: relative;
      width: 100%;
      border: none;
      outline: none;
      padding: 12px 0;
      color: #4a4c63;
      font-size: 17px;
      font-weight: 400;
      border-radius: 5px;
      cursor: pointer;
      z-index: 4;
      background-color: #e9e2f7;
    }
    .buttons button:hover:before{
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

export const ImgArea = styled.div`
  background: #ecf0f3;
  box-shadow: -3px -3px 7px #ffffff,
               3px 3px 5px #ceced1;
  height: 220px;
  width: 220px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
`;

export const InnerArea = styled.div`
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  border-radius: 50%;
    img{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
    .card-img-top {
      transform: scale(1);
      transition: transform 0.5s ease; 
      :hover {
        transform: scale(1.2);
      }
    }
    .overflow{
      overflow: hidden;
      border-radius: 50%;

    }
`;

export const InfoArea = styled.div`
  h5 {
    color: #31344b;
    font-weight: 500;
    font-size: 23px;
  }
`;
