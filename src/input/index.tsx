import React, { FC } from 'react';
import styles from './index.module.scss';
interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ value, onChange }) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return <input className={styles.stInput} type="text" value={value} onChange={inputChange} />;
};
export default Input;
