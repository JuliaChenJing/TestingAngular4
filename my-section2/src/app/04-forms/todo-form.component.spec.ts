import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder)

  });

  it('should create a form with two controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
  });

  it('should make a name control required', () => {
    let control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});