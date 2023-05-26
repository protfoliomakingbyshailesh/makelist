import React, { useState } from 'react';
import './todoapp.css';
import Container from './Container';

const Index = () => {
    const [items, setItems] = useState('');
    const [itemDesc, setItemsDesc] = useState('');
    const [creatEl, setCreateEl] = useState([]);
    const titleHandler = (e) => {
        let title = e.target.value;
        setItems(title);
    }
    const desHandler = (e) => {
        let titleDes = e.target.value;
        setItemsDesc(titleDes);
    }
    const addItems = () => {
        creatEl.push({ name: items, detail: itemDesc });
        setCreateEl([...creatEl]);

    }
    const redCrossBtn = (i) => {
        creatEl.splice(i, 1);
        setCreateEl([...creatEl]);
    }

    let line = true;
    const completedHandel = (i) => {
        if (!line) {
            document.getElementById(i).style.textDecorationLine = "none";
            line = true;
        }
        else{
            document.getElementById(i).style.textDecorationLine = "line-through";
            line = false;
        }

    }
    return (<div className='main_container'>
        <div className="ToDo_mainDiv">
            <h1 className="ToDo_primry_text">ToDo App</h1>
            <br />
            <div className="takeList_Container">
                <input type="text" placeholder="Enter Tittle" onChange={titleHandler} required value={creatEl.name} />
                <input type="text" placeholder="Enter Description" onChange={desHandler} required value={creatEl.detail} />
                <button onClick={addItems}>Add</button><br />
            </div>

            {
                creatEl.map((v, i) => {
                    return <Container creatEl={v} redCrossBtn={redCrossBtn} i={i} completed={completedHandel} />
                })
            }
        </div>
    </div>)
}
export default Index;