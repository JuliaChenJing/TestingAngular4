import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let flag = null;
    component.voteChanged.subscribe(value => flag = value)
    component.upVote();
    expect(flag).toBe(1);
  });
});