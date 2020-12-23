import Voting from './voting'
import { render, screen } from '@testing-library/react';

describe('Voting', () => {

  test('renders a pair of buttons', () => {
    render(<Voting pair={['Trainspotting', '28 Days Later']} />);
    screen.debug();
  });

  test('true is truthy', () => {
    expect(true).toBe(true);
  });
 
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
  
});
