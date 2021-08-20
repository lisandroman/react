import styled from 'styled-components';
import  hero  from '../../assets/hero42.jpg'

export const StyledHeroWrapper = styled.div`
  background-color: #d7f3fe;
  display: flex;
  flex-direction: column;
  
  .right {
    margin-top: 20px;
  }
  .left {
    height: 200px;
    background: url(${ hero }) center;
    background-size: cover;
  }
  .left, .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  section {
    text-align: center;
    
    h1{
      color: #4a4c63;
      font-size: 5rem;
    }
    h3 {
      margin-top: -1rem;
      font-size: 3rem;
      color: #4a4c63;
    }
    p{
      font-weight: 700;
      color: #b32635;
      letter-spacing: .2rem;
      text-transform: uppercase;
    }
  }

  
  @media (min-width: 1360px) and (max-width: 3840px) {
  flex-direction: row;
  height: 30vh;

  section {
    margin-left: 20%;
  }
  .left {
    display: flex;
    width: 50%;
    height: auto;
    margin-left: -6rem;
  }

  .right {
    display: flex;
    width: 50%;
    height: auto;
  }
 }

 @media (min-width: 768px) and (max-width: 1370px) {
  flex-direction: row;
  height: 30vh;

  section {
    margin-left: 20%;
    width: 50%;
    text-align: center;
    
    h1{
      color: #4a4c63;
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.5rem;
      color: #4a4c63;
      margin-top: 2px;
    }
    p{
      font-size: 10px;
      color: #b32635;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }
  .left {
    display: flex;
    width: 40%;
  }
  .right {
    display: flex;
    width: 50%;
    height: auto;
  }
 }
`;

 
  