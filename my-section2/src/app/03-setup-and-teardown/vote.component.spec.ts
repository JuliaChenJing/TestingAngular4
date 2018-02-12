import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    //Arrange
    component = new VoteComponent();
    console.log("---------- beforeEach")
  });

  afterEach(() => {
    //Clean
    console.log("----------afterEach")
  });

  beforeAll(() => {
    //Arrange
    //component = new VoteComponent();
    console.log("---------- beforeAll")
  });


  afterAll(() => {
    //Clean
    console.log("----------afterAll")
  });


  it('shoud increase totalVotes when upvoted', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('shoud decrease totalVotes when downvoted', () => {

    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});