import { css } from 'emotion';
import styled from 'react-emotion';

export const body = css`
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.06), 0 0 15px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  background-color: white;
  width: 100vw;
  height: 80px;
  font-family: Intro;
  z-index: 2;
  img {
    height: 24px;
    width: 24px;
    z-index: 3;
  }
`;

export const container = css`
  width: calc(100% - 90px);
  padding: 15px 45px;
  @media (min-width: 1558px) {
    width: 100%;
    max-width: 1468px;
    margin: 0 auto;
    padding: 15px 0;
  }
  @media (max-width: 868px) {
    width: 100%;
    padding: 40px 25px;
  }
  @media (max-width: 478px) {
    padding: 20px 25px;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
  box-sizing: border-box;
  display: flex;
  height: 80px;
  width: 100%;
  padding: 20px 45px;
  align-items: center;
`;

export const menueButton = css`
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  font-size: 12px;
  cursor: pointer;
  span {
    margin-top: 10px;
  }
`;

export const Circle = styled('div')`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  position: absolute;
  z-index: 2;
`;

export const iconWithCircle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonName = styled('span')`
  color: ${({ color }) => color};
`;
