import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {Task} from '../model/task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskDAOArrayImpl} from '../dao/impl/task-daoarray-impl';
import {CategoryDAOArrayImpl} from '../dao/impl/category-daoarray-impl';
import {Priority} from '../model/priority';
import {PriorityDAOAraayImpl} from '../dao/impl/priority-daoarray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskDaoArray = new TaskDAOArrayImpl();
  private categoryArray = new CategoryDAOArrayImpl();

  private priorityDaoArray = new PriorityDAOAraayImpl();

  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }
  getAllCategories(): Observable<Category[]> {
    console.log(this.categoryArray.getAll());
    return this.categoryArray.getAll();
  }
  // поиск задач по параметрам
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority);
  }

  updateTask(task: Task) {
    return this.taskDaoArray.update(task);
  }

  getAllPriorities(): Observable<Priority[]>{
    return  this.priorityDaoArray.getAll();
  }
}
