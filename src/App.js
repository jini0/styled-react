// import logo from './logo.svg';
import './App.css';
// import Buttons from './components/Buttons';
import VariousButtons from './components/VariousButtons';

function App() {
  return (
    <div className="App">
      {/* <Buttons size="small">클릭하세요</Buttons> */}
      {/* <Buttons size="medium">클릭하세요</Buttons> */}
      {/* 여기 태그 사이에 적히는 애(클릭하세요)는 child가 됨! -> Buttons.js에서 props를 {children}넣어주고 button태그 안에도 {children}넣어줌! */}
      {/* size라는걸 props에 전달해줄거임 */}

      {/* 다양한 버튼 */}
      <div>
        <VariousButtons size='large' color='blue'>BUTTON</VariousButtons>
        <VariousButtons size='medium' color='blue'>BUTTON</VariousButtons>
        <VariousButtons size='small' color='blue'>BUTTON</VariousButtons>
      </div>
      <div>
        <VariousButtons size='large' color='gray'>BUTTON</VariousButtons>
        <VariousButtons size='medium' color='gray'>BUTTON</VariousButtons>
        <VariousButtons size='small' color='gray'>BUTTON</VariousButtons>
      </div>
      <div>
        <VariousButtons size='large' color='pink'>BUTTON</VariousButtons>
        <VariousButtons size='medium' color='pink'>BUTTON</VariousButtons>
        <VariousButtons size='small' color='pink'>BUTTON</VariousButtons>
      </div>
      <div>
        <VariousButtons size='large' color='blue' outline>BUTTON</VariousButtons>
        <VariousButtons size='medium' color='pink' outline>BUTTON</VariousButtons>
        <VariousButtons size='small' color='gray' outline>BUTTON</VariousButtons>
        {/* outline은 값이 없으면 true로 보면 됨 -> true false로 나눌거임! */}
      </div>
      <div>
        <VariousButtons size='large' color='blue' fullWidth>BUTTON</VariousButtons>
        <VariousButtons size='large' color='pink' fullWidth>BUTTON</VariousButtons>
        <VariousButtons size='large' color='gray' fullWidth>BUTTON</VariousButtons>
      </div>
    </div>
  );
}

export default App;
