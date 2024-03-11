import React, { useEffect } from "react";
import { useNavigate } from 'react-router';
import Const from "../Const.js"
import "./Home.css"

const Home = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    props.handleOrderChange();
  }, []);

  const handleUpdate = async (id) => {
    navigate(`/updatediary/${id}`)
  }

  const handleDelete = async (id) => {
    await fetch(Const.DIARY_API_URL + "/" + id, { method: "DELETE" })
    props.handleOrderChange();
  }

  const handleToDate=(date)=>{
    date = new Date(date);
    if(date.getMinutes() < 10){
      if(date.getSeconds() < 10){
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":0"+date.getMinutes()+":0"+date.getSeconds()
      } else {
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":0"+date.getMinutes()+":"+date.getSeconds()
      }
    } else {
      if(date.getSeconds() < 10){
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":0"+date.getSeconds()
      } else {
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      }
    }
    return date;
  }


  return (
    <div className="homePage">
      {props.diaries.map((diary, index) => {
        return (
          <React.Fragment key={index}>
            <div className="diaryContents" key={diary.id}>
              <h2>{handleToDate(diary.createDatetime)}</h2>
              <div className="icon">
                <img src={Const.CONDITIONS[diary.conditionType - 1]} className="App-logo" alt="logo" />
              </div>
              <h3 className="diaryTextContainer">{diary.title}</h3>
              <h4>{diary.content}</h4>
              <div className="updateOrDeleteButton">
                <button onClick={() => handleUpdate(diary.id)}>更新</button>
                <button onClick={() => handleDelete(diary.id)}>削除</button>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Home