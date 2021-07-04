import selectSort from './sort/selectSort';
import './index.css';

const App = ()  => {
  console.log(selectSort([3, 5, 1, 2, 4]));
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
        <li className="radius">3</li>
        <li>5</li>
        <li className="orange">1</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(最小值为1, 与第一项3交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li>5</li>
        <li>3</li>
        <li>2</li>
        <li>4</li>
        <p className="grey">{`(第一次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第二次排序: </p>
        <li className="blue">1</li>
        <li className="radius">5</li>
        <li>3</li>
        <li className="orange">2</li>
        <li>4</li>
        <p className="grey">{`(最小值为2, 与第二项5交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li>3</li>
        <li>5</li>
        <li>4</li>
        <p className="grey">{`(第二次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第三次排序: </p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="radius orange">3</li>
        <li>5</li>
        <li>4</li>
        <p className="grey">{`(最小值为3, 与第三项3交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li>5</li>
        <li>4</li>
        <p className="grey">{`(第三次排序已完成)`}</p>
      </ul>
      <ul className="flex">
        <p className="label">第四次排序: </p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="radius">5</li>
        <li className="orange">4</li>
        <p className="grey">{`(最小值为4, 与第四项5交换)`}</p>
      </ul>
      <ul className="flex">
        <p className="label"></p>
        <li className="blue">1</li>
        <li className="blue">2</li>
        <li className="blue">3</li>
        <li className="blue">4</li>
        <li className="blue">5</li>
        <p className="grey">{`(已全部排序完成)`}</p>
      </ul>
    </main>
  );
}

export default App;
