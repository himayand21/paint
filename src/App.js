import React from 'react';
import PaperContainer from './PaperContainer';

import './App.scss';

const App = () => {
    return (
        <div className="app-container">
            <div className="slide-navigator" />
            <div className="slide-container">
                <div className="tools-container" />
                <PaperContainer />
            </div>
        </div>
    );
};

export default App;