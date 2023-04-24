import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { candidates } from './candidates';


ReactDOM.render(
  <div>
    <Card id={candidates[0].id} name={candidates[0].name} campaign={candidates[0].campaign} />
    <Card id={candidates[1].id} name={candidates[1].name} campaign={candidates[1].campaign} />
    <Card id={candidates[2].id} name={candidates[2].name} campaign={candidates[2].campaign} />
    <Card id={candidates[3].id} name={candidates[3].name} campaign={candidates[3].campaign} />
  </div>
  , document.getElementById('root'));
reportWebVitals();