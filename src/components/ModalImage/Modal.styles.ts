import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000;


  &::after {
    top:0;
    position: fixed;
    content: "";
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: black;
    opacity: 0.95;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;

  border-radius: 0.4rem;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  
`;

export const Close = styled.button`
  cursor: pointer;
  padding: 1rem;
  position: absolute;
  top: 3.1rem;
  right: 3.1rem;
  z-index: 99999999999;
  font-weight: 500;
  padding: 4px 9px 1px 9px;
  border-radius: 8px;
  border: none;
  font-size: 50px;
  color: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;

`;
export const CoverImage = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  margin: auto;
  max-width: 700px;
  width: 600px;
  max-height: 600px;
  ${({ theme }) => theme.mediaQueries.maxMd} { 
      width: 500px;
   }
   ${({ theme }) => theme.mediaQueries.maxSm} { 
      width: 300px;
   }
`;
