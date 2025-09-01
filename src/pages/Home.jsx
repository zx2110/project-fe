import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>대시보드</h2>
      <button onClick={() => navigate('/upload')}>
        영수증 추가하기
      </button>
    </div>
  );
}