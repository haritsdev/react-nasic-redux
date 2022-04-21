import { CHANGECHECKED } from '../constant';

export const changeChecked = (checked) => {
  return {
    type: CHANGECHECKED,
    payload: checked,
  };
};
