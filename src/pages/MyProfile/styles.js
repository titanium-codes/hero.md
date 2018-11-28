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
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
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
