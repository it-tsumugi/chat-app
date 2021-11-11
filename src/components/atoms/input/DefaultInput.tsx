import styled from "styled-components";
import media from "../../../assets/style/media";

import { MAIN_COLOR } from "../../../assets/style/color";

export const DefaultInput = styled.input`
  height: 30px;
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
  width: 30vw;
  padding-left: 20px;
  ${media.lg`
    padding-left: 15px;
    width: 40vw;
    `}
  ${media.md`
    padding-left: 7px;
    width: 60vw;
    `}
`;
