import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const user = useSelector((state) => state.userReducer);
  const isChecked = useSelector((state) => state.checkedReducer);
  return (
    <div>
      <div>Value Checkbox {JSON.stringify(isChecked, null, 4)}</div>
      <div>User {JSON.stringify(user, null, 4)}</div>
    </div>
  );
};

export default Display;
