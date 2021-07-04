import insertSort from './sort/insertSort';
import './index.css';

const App = ()  => {
  console.log(insertSort([3, 5, 1, 2, 4]));
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
        <p className="label">第零次排序: </p>
        <li className="radius">3</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(此时只有元素项3, 排在数组首位)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">3</li>
        <li>5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
      </ul>
      <ul className="flex">
        <p className="label">第一次排序: </p>
        <li className="blue">3</li>
        <li className="radius">5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(5比3大, 插入到3的后面)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li>1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(第一次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第二次排序: </p>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li className="radius">1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(1比3和5小, 插入到3的前面)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(第二次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第三次排序: </p>
        <li className="blue">1</li>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li className="radius">2</li>
        <li>4</li>
        <p className="grey">{`(2在1和3之间, 插入到3的前面)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li>4</li>
        <p className="grey">{`(第三次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第四次排序: </p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="blue">5</li>
        <li className="radius">4</li>
        <p className="grey">{`(4在3和5之间, 插入到5的前面)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(排序已全部完成)`}</p>
      </ul>
    </main>
  );
}

export default App;
