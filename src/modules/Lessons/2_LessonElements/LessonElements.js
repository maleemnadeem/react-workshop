import React from 'react';
import PropTypes from 'prop-types';

import EleIntro from './components/EleIntro';
import SimpleElement from './components/SimpleReactEle';
import EleRender from './components/EleRender';
import EleUpdation from './components/EleUpdation';
import EleReduxUpdation from './components/ReduxCompnents/EleReduxUpdation';

const LessonElements = ({title}) => {
  return (
      <div className="lesson-container">
        <EleIntro title={title} />
        <div className="lesson-parts">
          <SimpleElement />
          <EleRender />
          <EleUpdation />
          <EleReduxUpdation />
        </div>
      </div>
  );
};

LessonElements.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LessonElements;
