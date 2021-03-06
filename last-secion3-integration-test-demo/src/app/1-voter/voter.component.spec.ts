import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    //fixture.nativeElement
    //fixxture.debugElement
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = debugElement.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should high light the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes when I click the upvote', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    button.triggerEventHandler('click', null);
    expect(component.totalVotes).toBe(31);
  });
});
