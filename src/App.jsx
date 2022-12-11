import './App.css';
import WorkList from './component/WorkList.jsx';
import { useState } from 'react';

function App() {
  // 유저리스트
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 추가하기
  const addListHandler = () => {
    const newList = {
      id: lists.length + 1,
      title: title,
      content: content,
      complete: false,
    };
    setLists([...lists, newList]);
  };

  // 삭제하기
  const deleteListHandler = (id) => {
    const newContentList = lists.filter((list) => list.id !== id);
    setLists(newContentList);
  };
  // 완료하기
  const completeHandler = (id) => {
    const newCompleteList = lists.map((list) => {
      if (list.id === id) {
        return { ...list, complete: list.complete ? false : true };
      } else {
        return { ...list };
      }
    });
    setLists(newCompleteList);
  };

  // 취소하기

  return (
    <div className='layout'>
      {/* 타이틀 부분 */}
      <div className='title'>
        <h2>My todo List</h2>
        <h2>React</h2>
      </div>
      {/* add 부분 */}
      <div className='addList'>
        <div className='addList-input'>
          <label id='title'>제목</label>
          <input
            id='title'
            value={title}
            placeholder='제목을 입력해주세요'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label id='content'>내용</label>
          <input
            id='content'
            value={content}
            placeholder='내용을 입력해주세요'
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button onClick={addListHandler}>추가하기</button>
      </div>
      {/* working부분 */}
      <div>
        <h2>working💨</h2>
        <div>
          {lists.map((list) => {
            if (list.complete === false) {
              return (
                <WorkList
                  deleteListHandler={deleteListHandler}
                  completeHandler={completeHandler}
                  list={list}
                  key={list.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      {/* done!✅ */}
      <div>
        <h2>done!✅</h2>
        <div>
          {lists.map((list) => {
            if (list.complete === true) {
              return (
                <WorkList
                  deleteListHandler={deleteListHandler}
                  completeHandler={completeHandler}
                  list={list}
                  key={list.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
