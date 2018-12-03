import { css } from 'emotion';
import styled from 'react-emotion';
import { orange } from 'constants/colors';

export const body = css`
  width: auto !important;
  min-height: 380px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
`;

export const avatarContainer = css`
  width: 100%;
`;

export const Avatar = styled('div')`
  width: 100%;
  min-height: 310px;
  max-width: 380px !important;
  max-height: 380px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
`;

export const pesonalData = css`
  padding: 17px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const pesonalDataTitle = css`
  text-transform: uppercase;
  font-size: 14px;
  font-family: Intro;
  color: rgba(0, 0, 0, 0.54);
`;

export const actionsButton = css`
  margin-top: 25px;
  button {
    background-color: ${orange} !important;
    color: white;
    border-radius: 5px !important;
    text-transform: none !important;
    width: 150px;
    height: 36px !important;
    min-height: 36px !important;
    @media (max-width: 568px) {
      width: 95%;
      padding: 0 5px;
      height: 30px !important;
    }
  }
`;

export const professionalInfo = css`
  padding: 15px 30px;
  margin-top: 30px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  .title {
    font-family: Intro;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 15px;
  }
  .category {
    font-size: 16px;
    font-family: 'Roboto';
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.87);
    padding: 3px 20px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.12);
    cursor: pointer;
    &:hover {
      color: ${orange};
      border: 1px solid ${orange};
    }
  }
  .addMore {
    font-family: Intro;
    font-size: 12px;
    line-height: 2;
    color: #ffbe00;
    padding: 3px 20px;
    margin-right: 10px;
    border-radius: 15px;
    background-color: #fafafa;
    border: 1px solid rgba(0, 0, 0, 0.12);
    cursor: pointer;
    &:hover {
      border: 1px solid ${orange};
    }
  }
  button {
    height: 36px !important;
    width: 150px !important;
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.18);
  }
  .cancel {
    background-color: white;
    color: ${orange};
    border: 2px solid ${orange};
    &:hover {
      background-color: ${orange};
      color: white;
    }
  }
  .submit {
    background-color: ${orange};
    color: white;
    border: none;
  }
  svg {
    fill: ${orange};
  }
`;

export const avatarNavbar = css`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(91, 113, 137, 0.3);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    height: 18px;
    width: 18px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const cancelButton = css`
  border: solid 2px ${orange} !important;
  padding: 0 !important;
  &:hover {
    background-color: ${orange} !important;
    color: white;
  }
`;
