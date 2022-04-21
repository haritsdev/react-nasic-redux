import { CHANGEBUAH } from '../constant';

export const changeChecked = (checked) => {
  return {
    type: CHANGEBUAH,
    payload: checked,
  };
};
