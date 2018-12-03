import { css } from 'emotion';
import { orange, purple } from 'constants/colors';

export const container = css`
  height: auto;
  padding: 0 7.5px;
  margin-bottom: 15px !important;
`;

export const card = css`
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
`;
export const info = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: -4px;

  .title {
    letter-spacing: 0.5px;
    cursor: pointer;
    text-decoration: none;
    font-family: Intro;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.54);
    &:hover {
      color: ${orange};
    }
  }
  .domain {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #757575;
    font-size: 13px;
    div {
      height: 24px;
      width: 24px;
      margin-right: 7px;
    }
    svg {
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }
  .numberOfPosts {
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

export const search = css`
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
  width: 35%;
  padding: 10px;
  margin-bottom: 20px;
  &::placeholder {
    font-family: Intro;
    font-size: 12px;
    color: ${purple};
  }
  border: 1px solid ${purple};
`;
export const gridContainer = css`
  width: calc(100% + 15px) !important;
  margin-left: -7.5px;
`;
