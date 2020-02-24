import { Injectable } from '@angular/core';
import {Category} from '../model/category';
import {Task} from '../model/task';
import {TestData} from '../data/TestData';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskDAOArrayImpl} from '../dao/impl/task-daoarray-impl';
import {CategoryDAOArrayImpl} from '../dao/impl/category-daoarray-impl';
import {Priority} from '../model/priority';
import {PriorityDAOAraayImpl} from '../dao/impl/priority-daoarray';
import {CategoryDAO} from '../dao/interface/category-dao';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskDaoArray = new TaskDAOArrayImpl();
  private categoryDaoArray = new CategoryDAOArrayImpl();
  private priorityDaoArray = new PriorityDAOAraayImpl();

  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }
  getAllCategories(): Observable<Category[]> {
    console.log(this.categoryDaoArray.getAll());
    return this.categoryDaoArray.getAll();
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

  deleteTask(id: number): Observable<Task> {
    return this.taskDaoArray.delete(id);
  }


  updateCategory(category: Category): Observable<Category> {
    return this.categoryDaoArray.update(category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.categoryDaoArray.delete(id);
  }

  addTask(task: Task): Observable<Task> {
    return this.taskDaoArray.add(task);
  }

  addCategory(title: string): Observable<Category> {
    return this.categoryDaoArray.add(new Category(null,title));
  }

  searchCategories(title: string): Observable<Category[]> {
    return this.categoryDaoArray.search(title);
  }

}
