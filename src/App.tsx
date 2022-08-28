import React from 'react';
import s from "./App.module.css";
import {SplitedCounter} from "./SplitedCounter/SplitedCounter";

function App() {
    return (
        <div className={s.app}>
            <SplitedCounter/>
            {/*<JoinedCounter/>*/}
        </div>
    );
}

export default App;
