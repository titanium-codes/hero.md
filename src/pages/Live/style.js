import { css } from 'emotion';
import styled from 'react-emotion';
import { orange } from 'constants/colors';

export const navbar = css`
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  background-color: white;
  .runButton {
    width: 150px;
    height: 36px;
    background-color: ${orange};
    color: white;
    font-family: Intro;
    font-size: 14px;
  }
  .infoWithButtons {
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
  }
  .title {
    font-family: Intro;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 5px;
  }
  .followers {
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 500;
  }
`;

export const home = css``;

export const community = css``;

export const about = css``;

export const Avatar = styled('div')`
  height: 60px;
  width: 60px;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-right: 15px;
`;
