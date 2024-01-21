import "./Diary.css";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";

const UpdateDiary = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createDatetime, setCreateDatetime] = useState();
  const params = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
		getDiary()
	}, []);

  const getDiary = async () => {
	  await fetch("http://localhost:8080/diaries/" + params.id, { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setCreateDatetime(data.createDatetime);
		});
  };

  const updateDiary = async (id) => {
    const requestOptions ={
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"id": id, "title": title, "content": content, "createDatetime": createDatetime})
    };
    console.log(requestOptions.body);
		await fetch("http://localhost:8080/diaries/" + id, requestOptions)
    navigate("/");
  };

  return (
    <div className="diaryPage">
      <div className="diaryContainer">
        <h1>日記を更新する</h1>
        <div className="inputDiary">
          <div>タイトル</div>
          <input type="text" placeholder='タイトルを記入' 
          onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <div className="inputDiary">
          <div>内容</div>
          <textarea placeholder='日記を記入' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        </div>
        <button className='submitButtton' onClick={() => updateDiary(params.id)}>更新する</button>
      </div>
    </div>
  );
};

export default UpdateDiary