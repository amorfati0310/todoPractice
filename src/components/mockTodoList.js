import TodoModel from './TodoModel/TodoModle'; 
 
const first = new TodoModel('티티 간식 주기');
const second = new TodoModel('티티 털 벗겨주기');
const third =  new TodoModel('둔둔이 챱챱');
const fourth = new TodoModel('둔둔이 산책시키기');
const fifth = new TodoModel('둔둔이 뭉친털 자르기');
const sixth = new TodoModel('둔둔이 냠냠이 주기');
first.setStartTime(new Date('2018-09-09 20:00'))
second.setStartTime(new Date('2018-09-10 20:00'))
third.setStartTime(new Date('2018-09-11 20:00'))
fourth.setStartTime(new Date('2018-09-13 20:00'))
fifth.setStartTime(new Date('2018-09-12 20:00'))
sixth.setStartTime(new Date('2018-09-8 20:00'))
// filter 순서 6 1 2 3 5 4 
//  4 5 3 2 1 6 
 const mockTodoList = [
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
];

export default mockTodoList

