import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';
import Const from "../Const.js"
import RadioButton from "./RadioButton";
import "./Diary.css";

const UpdateDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createDatetime, setCreateDatetime] = useState();
  const [condition, setCondition] = useState('');
  const params = useParams(); 
  const navigate = useNavigate();
  const handleValueChange = (e) => {
    setCondition(e.target.value);
  };

  useEffect(() => {
    getDiary()
  }, []);

  const getDiary = async () => {
    await fetch(Const.DIARY_API_URL + "/" + params.id, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setCreateDatetime(data.createDatetime);
        setCondition(Const.CONDITIONS[data.conditionType - 1])
      });
  };

  const updateDiary = async (id) => {
    const requestOptions ={
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id": id, "title": title, "content": content, "createDatetime": createDatetime, "conditionType": Const.getConditionValue(condition)})
    };
    await fetch(Const.DIARY_API_URL + "/" + id, requestOptions)
    navigate("/");
  };

  return (
    <div className="diaryPage">
      <div className="diaryContainer">
        <h1>日記を更新する</h1>
        <div>コンディション</div>
        <RadioButton handleValueChange={handleValueChange} condition={condition}/>
        <div>タイトル</div>
        <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} value={title}/>
        <div>内容</div>
        <textarea placeholder='日記を記入' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        <button className='submitButtton' onClick={() => updateDiary(params.id)}>更新する</button>
      </div>
    </div>
  );
};

export default UpdateDiary