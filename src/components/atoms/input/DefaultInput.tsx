import styled from "styled-components";
import media from "../../../assets/style/media";

import { MAIN_COLOR } from "../../../assets/style/color";

export const DefaultInput = styled.input`
  height: 30px;
  width: 30vw;
  padding-left: 20px;
  border-radius: 30px;
  border: 0;
  box-sizing: border-box;
  :focus {
    outline: 2px solid ${MAIN_COLOR};
  }
  ::placeholder {
    font-size: 14px;
    ${media.lg`
    font-size: 12px;
    `}
    ${media.md`
    font-size: 10px;
    `}
  }
`;
