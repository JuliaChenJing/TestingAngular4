import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import 'rxjs/add/observable/from';
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

    //will only test ngOnInit in this demo
    component.ngOnInit();
    expect(component.todos).toBe(flag);
  });
});