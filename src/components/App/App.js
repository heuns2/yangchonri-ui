import React from 'react';
import './App.css';
import Header  from 'components/Nav/Header';
import Content from 'components/Main/Content';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;