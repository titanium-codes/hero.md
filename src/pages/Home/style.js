import { css } from 'emotion';
import styled from 'react-emotion';
import { yellow } from 'constants/colors';

export const homeContainer = css`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${yellow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const content = css`
  height: 65%;
  width: 100%;
  max-width: 320px;
  @media (min-width: 1400px) {
    max-width: 420px;
  }
  @media (max-width: 576px) {
    height: 85%;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const Icon = styled('div')`
  .facebookSignIn {
    display: none;
  }
  .googleSignIn {
    display: none;
  }
  height: 100px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    .facebookSignIn {
      display: ${({ name }) => (name === 'facebook' ? 'block' : 'none')};
    }
    .facebook {
      display: ${({ name }) => (name === 'facebook' ? 'none' : 'block')};
    }
    .googleSignIn {
      display: ${({ name }) => (name === 'google' ? 'block' : 'none')};
    }
    .google {
      display: ${({ name }) => (name === 'google' ? 'none' : 'block')};
    }
    background-color: white;
  }
`;

export const icons = css`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  svg {
    height: 60px;
    width: 60px;
  }
`;
