import React from 'react';

import './App.css';
import LessonTypography from './components/LessonTypography.tsx';
import LessonButton from './components/LessonButton.tsx';
import { ButtonGroupButtonContext, Paper } from '@mui/material';
import LessonButtonGroup from './components/LessonButtonGroup.tsx';
import LessonTextField from './components/LessonTextField.tsx';
import LessonRadioGroup from './components/LessonRadioGroup.tsx';
import LessonRadioExample from './components/LessonRadioExample.tsx';
import LessonSelect from './components/LessonSelect.tsx';
import LessonAuttoComplate from './components/LessonAuttoComplate.tsx';
import LessonBox from './components/LessonBox.tsx';
import LessonStack from './components/LessonStack.tsx';
import LessonGrid from './components/LessonGrid.tsx';
import LessonCard from './components/LessonCard.tsx';
import LessonAcordion from './components/LessonAcordion.tsx';
import LessonAppBar from './components/LessonAppBar.tsx';
import LessonImageList from './components/LessonImageList.tsx';
import LessonPaper from './components/LessonPaper.tsx';


function App() {
  return (
    <div className="App">
     {/* <LessonTypography/> */}
     {/* <LessonButton/> */}
     {/* <LessonButtonGroup/> */}
     {/* <LessonTextField/> */}
     {/* <LessonRadioGroup/> */}
     {/* <LessonRadioExample/> */}
     {/* <LessonSelect/> */}
     {/* <LessonAuttoComplate/> */}
     {/* <LessonBox/> */}
     {/* <LessonStack/> */}
     {/* <LessonGrid/> */}
     {/* <LessonCard/> */}
     {/* <LessonAcordion/> */}
     {/* <LessonAppBar/> */}
     {/* <LessonImageList/> */}
     <LessonPaper />
    </div>
  );
}

export default App;
