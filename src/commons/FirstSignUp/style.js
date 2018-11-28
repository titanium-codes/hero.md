import { css } from 'emotion';
import { yellow } from 'constants/colors';

export const container = css`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: rgba(34, 48, 122, 0.5);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid ${yellow};
  }
  .prevQuestion {
    opacity: 0.5;
    width: 125px;
    height: 125px;
    font-size: 14px;
    margin-bottom: 50px;
    cursor: pointer;
  }
  .answer {
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: rgba(34, 48, 122, 0.5);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${yellow};
    &:hover {
      color: white;
      background-color: ${yellow};
    }
  }
`;

export const answers = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const selectedKM = css`
  font-size: 20px;
  opacity: 1;
`;

export const restKM = css`
  opacity: 0.5;
`;

export const answerForKM = css`
  padding: 10px 0px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  overflow-y: auto;
  color: rgba(34, 48, 122, 0.5);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${yellow};
  /* Width */
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #51bbbf;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #51bbbf;
  }
`;

export const question1 = css`
  min-width: 300px;
`;

export const question2 = css`
  min-width: 300px;
`;
