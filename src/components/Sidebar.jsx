import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',  // 메뉴 사이 간격
  padding: '10px',
};

function Sidebar({ showResultMenu }) {
  return (
    <nav style={navStyle}>
      <Link to="/">대시보드</Link>
      <Link to="/category">카테고리별 지출내역</Link>
    </nav>
  );
}

export default Sidebar;
