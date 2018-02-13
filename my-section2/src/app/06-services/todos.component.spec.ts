import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let flag = [1, 2, 3]

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([flag]);
    });

    component.ngOnInit();
    expect(component.todos).toBe(flag);
  });

  it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return Observable.empty();
    })

    component.add();
    expect(spy).toHaveBeenCalled();
  })

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]))

    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })

  it('should set the message property if server returns an error when adding a new todo', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error))

    component.add();
    expect(component.message).toBe(error);
  })

  it("should call the server to delete a todo item if the user CONFIRMS", () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  })

  it("should NOT call the server to delete a todo item if the user CANCELS", () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    component.delete(1);
    expect(spy).not.toHaveBeenCalledWith(1);
  })
});