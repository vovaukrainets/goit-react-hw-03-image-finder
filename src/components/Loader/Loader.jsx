import React from 'react';
import s from './Loader.module.css';

import { LoopingRhombusesSpinner } from 'react-epic-spinners';

const Loader = () => {
  return (
    <div className={s.container}>
      <LoopingRhombusesSpinner color="#3f51b5" />
    </div>
  );
};

export default Loader;
