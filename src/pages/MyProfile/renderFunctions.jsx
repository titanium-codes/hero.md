import React from 'react';
import Grid from '@material-ui/core/Grid';
import { css } from 'emotion';
import { Input } from '@material-ui/core';

const errorMessage = css`
  margin-top: 5px;
  color: red;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  max-width: 417px;
`;

const labelText = css`
  font-size: 14px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: -2px;
  margin-right: 15px;
  min-width: 102px;
`;

const container = css`
  padding: 2px 0;
  min-width: 270px;
`;

const inputStyle = css`
  flex: 2;
  max-width: 300px;
`;

const hoverInput = css`
  &:hover:before {
    border-bottom: 2px solid rgba(91, 113, 137, 1) !important;
  }
`;

const renderInput = (props) => {
  const {
    input,
    label,
    id,
    type,
    disabled,
    meta: { touched, error },
    ...rest
  } = props;
  return (
    <div>
      <Grid container alignItems="flex-end" className={container}>
        <div className={labelText}>{label}</div>
        <Input
          id={id}
          {...input}
          {...rest}
          type={type}
          disabled={disabled}
          className={`${inputStyle} ${!disabled ? hoverInput : ''}`}
          fullWidth
        />
      </Grid>

      {touched && error && (
        <div id="error" className={errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
};

export default renderInput;
