import { css } from 'emotion';

export const mentorInfo = css`
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 30px;
  .info {
    padding: 18px 15px;
    font-size: 14px;
    letter-spacing: 0.4px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
  }
  .info > * {
    margin-bottom: 9px;
  }
  .avatar {
    width: 100%;
    height: auto;
  }
  .fullNameWithActions {
    display: flex;
    justify-content: space-between;
    p {
      font-weight: bold;
      line-height: 1.5;
      font-size: 16px;
    }
    margin-bottom: 0;
  }
  .fullName {
    font-family: Intro;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 10px;
  }
  .actions {
    display: flex;
  }
  .favorite svg {
    height: 24px;
    width: 24px;
    cursor: pointer;
    margin-right: 15px;
  }
  .descriptionTitle {
    margin-bottom: 5px;
  }
  .description {
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const categoryTitle = css`
  position: absolute;
  top: -21px;
  left: 7.5px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.87);
`;

export const container = css`
  height: auto;
  padding: 0 7.5px;
  margin-bottom: 15px !important;
  max-width: 220px;
  @media (max-width: 560px) {
    max-width: 260px;
  }
`;

export const gridContainer = css`
  width: calc(100% + 15px) !important;
  margin-left: -7.5px;
`;
