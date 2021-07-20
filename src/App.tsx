import './index.css';
import pic1 from './img/fact1.png';
import pic2 from './img/fact2.png';
import pic3 from './img/fact3.png';
import pic4 from './img/fact4.png';
import pic5 from './img/fact5.png';
import pic6 from './img/fact6.png';
import pic7 from './img/fact7.png';
import pic8 from './img/fact8.png';
import pic9 from './img/fact9.png';
import pic10 from './img/fact10.png';
import pic11 from './img/fact11.png';

const App = ()  => {
  return (
    <main>
      {/* <div className="cuboid">
        <div className="front orange-font"></div>
        <div className="back"></div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="bottom"></div>
      </div> */}
      {/* <div className="out">
        <h3>程序执行板</h3>
        <li className="orange mb2">fact(5) 入栈</li>
        <li className="orange mb2">执行: 5 * fact(4)</li>
        <li className="orange mb2">fact(4) 入栈</li>
        <li className="orange mb2">执行: 4 * fact(3)</li>
        <li className="orange mb2">fact(3) 入栈</li>
        <li className="orange mb2">执行: 3 * fact(2)</li>
        <li className="orange mb2">fact(2) 入栈</li>
        <li className="orange mb2">执行: 2 * fact(1)</li>
        <li className="orange mb2">fact(1) 入栈</li>
        <li className="orange mb2">fact(1) = 1</li>
        <li className="orange mb2">fact(1) 出栈</li>
        <li className="orange mb2">fact(2) = 2 * 1</li>
        <li className="orange mb2">fact(2) 出栈</li>
        <li className="orange mb2">fact(3) = 3 * 2 * 1</li>
        <li className="orange mb2">fact(3) 出栈</li>
        <li className="orange mb2">fact(4) = 4 * 3 * 2 * 1</li>
        <li className="orange mb2">fact(4) 出栈</li>
        <li className="orange mb2">fact(5) = 5 * 4 * 3 * 2 * 1</li>
        <li className="orange mb2">fact(5) 出栈</li>
      </div> */}
      {/* <div className="cuboid-item">
        <div className="cuboid cuboid-1">
          <div className="front orange-font">fact(5)</div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div> */}
      {/* <div className="cuboid-item1">
        <div className="cuboid cuboid-1">
          <div className="front orange-font">fact(4)</div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div> */}
      {/* <div className="cuboid-item2">
        <div className="cuboid cuboid-1">
          <div className="front orange-font">fact(3)</div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div> */}
      {/* <div className="cuboid-item3">
        <div className="cuboid cuboid-1">
          <div className="front orange-font">fact(2)</div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div> */}
      {/* <div className="cuboid-item4">
        <div className="cuboid cuboid-1">
          <div className="front orange-font">fact(1)</div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
      </div> */}

      <img src={pic1} style={{width: 600, height: 400}} />
      <img src={pic2} style={{width: 600, height: 400}} />
      <img src={pic3} style={{width: 600, height: 400}} />
      <img src={pic4} style={{width: 600, height: 400}} />
      <img src={pic5} style={{width: 600, height: 400}} />
      <img src={pic6} style={{width: 600, height: 400}} />
      <img src={pic7} style={{width: 600, height: 400}} />
      <img src={pic8} style={{width: 600, height: 400}} />
      <img src={pic9} style={{width: 600, height: 400}} />
      <img src={pic10} style={{width: 600, height: 400}} />
      <img src={pic11} style={{width: 600, height: 400}} />
    </main>
  );
}

export default App;
