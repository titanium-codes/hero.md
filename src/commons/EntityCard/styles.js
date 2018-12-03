import { css } from 'emotion';
import { orange } from 'constants/colors';

export const entityCard = css`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  font-weight: 500;
  a {
    text-decoration: none;
  }
  .info {
    padding: 13px;
  }
  .favorite {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.5px;
    height: 24px;
    /* margin-bottom: 5px; */
    svg {
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }
  }
  .title {
    font-family: Intro;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: ${orange};
    margin-bottom: 5px;
  }
  .type {
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 10px;
  }
  .description {
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.87);
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const entityCategoryContainert = css`
  position: relative;
`;
