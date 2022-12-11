function WorkList(props) {
  return (
    <div>
      <h2>{props.list.title}</h2>
      <p>{props.list.content}</p>
      <button
        onClick={() => {
          props.deleteListHandler(props.list.id);
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          props.completeHandler(props.list.id);
        }}
      >
        {props.list.complete ? '취소' : '완료'}
      </button>
    </div>
  );
}

export default WorkList;
