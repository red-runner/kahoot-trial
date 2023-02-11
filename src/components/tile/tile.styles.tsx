import styled from "styled-components";
import { montserratRegularDisplay } from "../../styles";

export const StylesWrapper = styled.div<{ backgroundColor: string }>`
  ${montserratRegularDisplay}

  height: 100%;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`;
