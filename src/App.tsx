import bubbleSort from './sort/bubbleSort';
import './index.css';

const App = ()  => {
  console.log(bubbleSort([3, 5, 1, 2, 4]));
  return (
    <main>
      <ul className="flex">
        <p className="label">待排序数组:</p>
        <li>3</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
      </ul>
      <ul className="flex">
        <p className="label">第一次排序: </p>
        <li className="orange">3</li>
        <li className="orange">5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(3 < 5 不交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>3</li>
        <li className="orange">5</li>
        <li className="orange">1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(5 > 1 交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>3</li>
        <li>1</li>
        <li className="orange">5</li>
        <li className="orange">2</li>
        <li>4</li>
        <p className="grey">{`(5 > 2 交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li className="orange">5</li>
        <li className="orange">4</li>
        <p className="grey">{`(5 > 4 交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>3</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <li className="blue">5</li>
        <p className="grey">{`(5为最大元素, 第一次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第二次排序:</p>
        <li className="orange">3</li>
        <li className="orange">1</li>
        <li>2</li>
        <li>4</li>
        <li className="blue">5</li>
        <p className="grey">{`(3 > 1 交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>1</li>
        <li className="orange">3</li>
        <li className="orange">2</li>
        <li>4</li>
        <li className="blue">5</li>
        <p className="grey">{`(3 > 2 交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>1</li>
        <li>2</li>
        <li className="orange">3</li>
        <li className="orange">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(3 < 4 不交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(4为最大元素, 第二次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第三次排序:</p>
        <li className="orange">1</li>
        <li className="orange">2</li>
        <li>3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(1 < 2 不交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>1</li>
        <li className="orange">2</li>
        <li className="orange">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(2 < 3 不交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li>1</li>
        <li>2</li>
        <li className="blue">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(3为最大元素, 第三次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第四次排序:</p>
        <li className="orange">1</li>
        <li className="orange">2</li>
        <li className="blue">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(1 < 2 不交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(2为最大元素, 已完成全部排序)`}</p>
      </ul>
    </main>
  );
}

export default App;
