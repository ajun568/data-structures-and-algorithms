// 击鼓传花
import Queue from './index';

export const hotPotato = (nameList: string[], n: number) => {
  const queue = new Queue<string>();
  queue.enqueue(...nameList);

  while (queue.size() > 1) {
    for (let i = 1; i < n; i++) {
      queue.enqueue(queue.dequeue() as string);
    }
    queue.dequeue();
  }

  return queue.peek();
}
