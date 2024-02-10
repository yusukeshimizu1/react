import "./Diary.css";
import Const from "../Const.js"
import RadioButton from "./RadioButton";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [condition, setCondition] = useState(Const.CONDITIONS[0]);
  const navigate = useNavigate();
  const handleValueChange = (e) => {
    setCondition(e.target.value);
  };

  const createDiary = async () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"title": title, "content": content, "conditionType": Const.getConditionValue(condition)})
    };
		await fetch(Const.API_URL, requestOptions)
    navigate("/");
  };

  return (
    <div className="diaryPage">
      <div className="diaryContainer">
        <h1>日記を記入する</h1>
        <div>コンディション</div>
        <RadioButton handleValueChange={handleValueChange} condition={condition}/>
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)}/>
        <div>内容</div>
        <textarea placeholder='日記を記入' onChange={(e) => setContent(e.target.value)}></textarea>
        <button className='submitButtton' onClick={createDiary}>記入する</button>
      </div>
    </div>
  );
};

export default CreateDiary