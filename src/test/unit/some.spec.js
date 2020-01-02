import {MyComponent} from '../../MyComponent';

describe('Some Spec', () => {
  it.only('can run a test 1', () => {
    const myComponent = MyComponent;
    expect(myComponent.name).to.equal('Dave');
  });

  it('can run a test 2', () => {
    const myComponent = MyComponent;
    expect(myComponent.name).to.equal('Dave');
  });
});