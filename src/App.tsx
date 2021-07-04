import mergeSort from './sort/mergeSort';
import './index.css';

const App = ()  => {
  console.log(mergeSort([3, 5, 1, 2, 4]));
  return (
    <main className="flex-all-center">
    <div>
      <p className="label-center">待排序数组</p>
      <ul className="flex-all-center">
        <li>3</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
      </ul>
      <p className="label-center">左右分组</p>
      <ul className="flex-all-center">
        <li>【</li>
        <li>3</li>
        <li>5</li>
        <li>】</li>
        <li className="blue">|</li>
        <li>【</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <li>】</li>
      </ul>
      <div className="flex-justify">
        <div className="border-red">
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>3</li>
            <li>】</li>
            <li className="blue">|</li>
            <li>【</li>
            <li>5</li>
            <li>】</li>
          </ul>
          <div className="flex-justify">
            <div className="border-red">
              <p className="label-center">左右分组</p>
              <p className="grey font-item">【3】已为最小单元</p>
            </div>
            <div className="border-red">
              <p className="label-center">左右分组</p>
              <p className="grey font-item">【5】已为最小单元</p>
            </div>
          </div>
          <p className="label-center orther">合并左右数组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>3</li>
            <li>】</li>
            <li>+</li>
            <li>【</li>
            <li>5</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li>3</li>
            <li>5</li>
            <li>】</li>
          </ul>
        </div>
        <div style={{width: 10}}></div>
        <div className="border-red">
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>1</li>
            <li>】</li>
            <li className="blue">|</li>
            <li>【</li>
            <li>2</li>
            <li>4</li>
            <li>】</li>
          </ul>
          <section className="flex-justify">
            <div className="border-red">
              <p className="label-center">左右分组</p>
              <p className="grey font-item">【1】已为最小单元</p>
            </div>
            <div className="border-red">
              <p className="label-center">左右分组</p>
              <ul className="flex-all-center">
                <li>【</li>
                <li>2</li>
                <li>】</li>
                <li className="blue">|</li>
                <li>【</li>
                <li>4</li>
                <li>】</li>
              </ul>
              <section className="flex-justify">
              <div className="border-red">
                <p className="label-center">左右分组</p>
                <p className="grey font-item">【2】已为最小单元</p>
              </div>
              <div className="border-red">
                <p className="label-center">左右分组</p>
                <p className="grey font-item">【4】已为最小单元</p>
              </div>
              </section>
              <p className="label-center orther">合并左右数组</p>
              <ul className="flex-all-center">
                <li>【</li>
                <li>2</li>
                <li>】</li>
                <li>+</li>
                <li>【</li>
                <li>4</li>
                <li>】</li>
                <li>=</li>
                <li>【</li>
                <li>2</li>
                <li>4</li>
                <li>】</li>
              </ul>
            </div>
          </section>
          <p className="label-center orther">合并左右数组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>1</li>
            <li>】</li>
            <li>+</li>
            <li>【</li>
            <li>2</li>
            <li>4</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li>1</li>
            <li>2</li>
            <li>4</li>
            <li>】</li>
          </ul>
        </div>
      </div>
      <p className="label-center orther">合并左右数组</p>
      <ul className="flex-all-center">
        <li>【</li>
        <li>3</li>
        <li>5</li>
        <li>】</li>
        <li>+</li>
        <li>【</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <li>】</li>
        <li>=</li>
        <li>【</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>】</li>
      </ul>
    </div>
    </main>
  );
}

export default App;
