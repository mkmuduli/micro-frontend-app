import React from 'react';
import { Button } from 'components/Button';

export const IconButton = ({ children, ...rest }) => {
  return <Button className="icon-btn" {...rest}>{children}</Button>;
};