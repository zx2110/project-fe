import React from 'react';
import { useNavigate } from 'react-router-dom';

function Upload({ setShowResultMenu }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    setShowResultMenu(true);  // 사이드바 '인식 결과' 메뉴 보이게
    navigate('/result');      // 결과 페이지로 이동
  };

  return (
    <div>
      <h2>영수증 업로드 화면</h2>
      <button onClick={handleConfirm}>확인</button>
      <button onClick={() => navigate('/')}>취소</button>
    </div>
  );
}

export default Upload;
