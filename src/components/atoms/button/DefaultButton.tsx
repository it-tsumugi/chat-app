import styled from "styled-components";
import media from "../../../assets/style/media";

import { MAIN_COLOR } from "../../../assets/style/color";

export const DefaultButton = styled.button`
  color: #ffffff;
  background-color: ${MAIN_COLOR};
  margin: 5px;
  padding: 6px 10px;
  cursor: pointer;

  border-radius: 30px;
  border: none;
  box-shadow: 4px 4px 3px gray;

  transition: 0.3s;
  &:hover {
    box-shadow: none;
    text-decoration: none;
    opacity: 0.6;
  }

  font-size: 14px;
  ${media.lg`
    font-size: 12px;
    `}
  ${media.md`
    font-size: 10px;
    `}
`;
