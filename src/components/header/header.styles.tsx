import styled from "styled-components";
import { montserratRegularBold } from "../../styles";

export const StylesWrapper = styled.div`
  --box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);

  ${montserratRegularBold}

  height: 3.75rem;
  width: 100%;
  background-color: #888888;
  margin-left: var(--spacing-l);
`;
