import styled from "styled-components";
import { colors} from "./utils";

export const BtnContainer = styled.button`
    width: 100px;
    height: 40px;
    color: white;
    font-size: 16px;
    border-radius: 20px;
    font-weight: 600;
    margin: 0 10px;
    background-color: ${colors.linkColor};
    cursor: pointer;
`;
export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.whiteColor};
    height: 100vh;
    h1 {
        text-align: center;
        width: 100%;
    }
    hr {
        width: 300px;
        margin: 20px auto;
    }
`;
export const InputContainer = styled.input`
    padding: 1%;
    width: 200px;
    height: 40px;
    border-radius: 10px;
`
export const CardContainer = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: ${colors.textColor};
  width: 300px;
  height: 60px;
  padding: 1%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`