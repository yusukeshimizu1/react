import "./Home.css"
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';

const Home = () => {
	const [diaries, setDiaries] = useState([]);
	const navigate = useNavigate()

	useEffect(() => {
		fetch("http://localhost:8080/diaries", { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				setDiaries(data);
			});
	}, []);

	const handleUpdate = async (id) => {
    	navigate(`/updatediary/${id}`)
	}

	const handleDelete = async (id) => {
		fetch("http://localhost:8080/diaries/" + id, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				setDiaries(data);
				console.log(data);
			});
		window.location.href = "/";
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
			{diaries.map((diary) => {
				return (
					<div className="diaryContents" key={diary.id}>
						<h2>{handleToDate(diary.createDatetime)}</h2>
						<h3 className="diaryTextContainer">{diary.title}</h3>
						<h4>{diary.content}</h4>
						<div className="updateOrDeleteButton">
							<button onClick={() => handleUpdate(diary.id)}>更新</button>
							<button onClick={() => handleDelete(diary.id)}>削除</button>
						</div>
					</div>
				)
		  	})}
		</div>
	)
}

export default Home