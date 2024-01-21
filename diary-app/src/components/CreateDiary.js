import "./Diary.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const createDiary = async () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"title": title, "content": content})
    };
    console.log(requestOptions.body);
		await fetch("http://localhost:8080/diaries", requestOptions)
    navigate("/");
  };

  return (
    <div className="diaryPage">
      <div className="diaryContainer">
        <h1>日記を記入する</h1>
        <div className="inputDiary">
          <div>タイトル</div>
          <input type="text" placeholder='タイトルを記入' 
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputDiary">
          <div>内容</div>
          <textarea placeholder='日記を記入' onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button className='submitButtton' onClick={createDiary}>記入する</button>
      </div>
    </div>
  );
};

export default CreateDiary