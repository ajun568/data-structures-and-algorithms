import quickSort from './sort/quickSort';
import './index.css';

const App = ()  => {
  console.log(quickSort([3, 5, 1, 2, 4]));
  return (
    <main className="flex-all-center">
      <div>
      <p className="label-center">选取中间项</p>
      <ul className="flex-all-center">
        <li>3</li>
        <li>5</li>
        <li className="orange">1</li>
        <li>2</li>
        <li>4</li>
      </ul>
      <p className="label-center">左右分组</p>
      <ul className="flex-all-center">
        <li>【</li>
        <li>】</li>
        <li className="blue">1</li>
        <li>【</li>
        <li>3</li>
        <li>5</li>
        <li>2</li>
        <li>4</li>
        <li>】</li>
      </ul>
      <div className="flex-justify">
        <div className="border-red">
          <p className="label-center">选取中间项</p>
          <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
        </div>
        <div style={{width: 10}}></div>
        <div className="border-red">
          <section>
          <p className="label-center">选取中间项</p>
          <ul className="flex-all-center">
            <li>3</li>
            <li>5</li>
            <li className="orange">2</li>
            <li>4</li>
          </ul>
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>】</li>
            <li className="blue">2</li>
            <li>【</li>
            <li>3</li>
            <li>5</li>
            <li>4</li>
            <li>】</li>
          </ul>
        <div className="flex-justify">
        <div className="border-red">
          <p className="label-center">选取中间项</p>
          <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
        </div>
        <div style={{width: 10}}></div>
        <div className="border-red">
        <section>
          <p className="label-center">选取中间项</p>
          <ul className="flex-all-center">
            <li>3</li>
            <li className="orange">5</li>
            <li>4</li>
          </ul>
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>3</li>
            <li>4</li>
            <li>】</li>
            <li className="blue">5</li>
            <li>【</li>
            <li>】</li>
          </ul>
        <div className="flex-justify">
        <div className="border-red">
          <section>
          <p className="label-center">选取中间项</p>
          <ul className="flex-all-center">
            <li>3</li>
            <li className="orange">4</li>
          </ul>
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>3</li>
            <li>】</li>
            <li className="blue">4</li>
            <li>【</li>
            <li>】</li>
          </ul>
      <div className="flex-justify">
        <div className="border-red">
          <section>
          <p className="label-center">选取中间项</p>
          <ul className="flex-all-center">
            <li className="orange">3</li>
          </ul>
          <p className="label-center">左右分组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>】</li>
            <li className="blue">3</li>
            <li>【</li>
            <li>】</li>
          </ul>
          <div className="flex-justify">
          <div className="border-red">
            <p className="label-center">选取中间项</p>
            <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
          </div>
          <div className="border-red">
            <p className="label-center">选取中间项</p>
            <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
          </div>
          </div>
          <p className="label-center orther">合并中间项及左右数组</p>
          <ul className="flex-all-center">
            <li>【</li>
            <li>】</li>
            <li>+</li>
            <li className="blue">3</li>
            <li>+</li>
            <li>【</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li className="blue">3</li>
            <li>】</li>
          </ul>
          </section>
        </div>
        <div style={{width: 10}}></div>
        <div className="border-red">
          <p className="label-center">选取中间项</p>
          <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
        </div>
      </div>
      <p className="label-center orther">合并中间项及左右数组</p>
          <ul className="flex-all-center">
          <li>【</li>
          <li className="blue">3</li>
            <li>】</li>
            <li>+</li>
            <li className="blue">4</li>
            <li>+</li>
            <li>【</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li>】</li>
          </ul>
      </section>
        </div>
        <div style={{width: 10}}></div>
        <div className="border-red">
          <p className="label-center">选取中间项</p>
          <p className="grey font-item">数组为空, 结束执行, 等待合并</p>
        </div>
      </div>
      <p className="label-center orther">合并中间项及左右数组</p>
          <ul className="flex-all-center">
          <li>【</li>
          <li className="blue">3</li>
          <li className="blue">4</li>
            <li>】</li>
            <li>+</li>
            <li className="blue">5</li>
            <li>+</li>
            <li>【</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li className="blue">5</li>
            <li>】</li>
          </ul>
      </section>
        </div>
      </div>
      <p className="label-center orther">合并中间项及左右数组</p>
          <ul className="flex-all-center">
          <li>【</li>
            <li>】</li>
            <li>+</li>
            <li className="blue">2</li>
            <li>+</li>
            <li>【</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li className="blue">5</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li className="blue">2</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li className="blue">5</li>
            <li>】</li>
          </ul>
      </section>
        </div>
      </div>
      <p className="label-center orther">合并中间项及左右数组</p>
          <ul className="flex-all-center">
          <li>【</li>
            <li>】</li>
            <li>+</li>
            <li className="blue">1</li>
            <li>+</li>
            <li>【</li>
            <li className="blue">2</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li className="blue">5</li>
            <li>】</li>
            <li>=</li>
            <li>【</li>
            <li className="blue">1</li>
            <li className="blue">2</li>
            <li className="blue">3</li>
            <li className="blue">4</li>
            <li className="blue">5</li>
            <li>】</li>
          </ul>
      </div>
    </main>
  );
}

export default App;
