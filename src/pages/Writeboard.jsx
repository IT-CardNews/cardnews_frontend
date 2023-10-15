import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Community.module.css";
function Writeboard() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      const posts = JSON.parse(localStorage.getItem('posts') || '[]');
      posts.push({ title, content });
      localStorage.setItem('posts', JSON.stringify(posts));
      alert('등록되었습니다');
      navigate('/community');
    }; 

    const onCancle = () => {
      alert('작성을 취소하시겠습니까?');
      navigate('/community');
    };
  
    return (
      <div className={styles.container}>
        <h1 className={styles.communityTitle}>글 작성하기</h1>
        <div >
          <input 
            className={styles.inputField}
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className={styles.textareaField}
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton} onClick={onCancle}>
          취소
        </button>
        <button className={styles.button} onClick={handleSubmit}>
          등록
        </button>
      </div>
    </div>
    );
  };



export default Writeboard;