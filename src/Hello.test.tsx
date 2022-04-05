import { render, cleanup } from '@testing-library/react';
import toBeInTheDocument from '@testing-library/jest-dom';

import Hello from './Hello';

describe('Hello Component', () => {
  it('should render Hello World', () => {
    const props = {
      name: '',
    };
    const { getByText } = render(<Hello {...props} />);
    const title = getByText('Hello World');
    expect(title).toBeInTheDocument();
    // expect(title.textContent).toEqual('Hello World');
    // console.log({ title: title });
  });

  it('should render the name prop', () => {
    const props = {
      name: 'Carlos',
    };
    const { getByText } = render(<Hello {...props} />);
    const title = getByText('Hello Carlos');

    expect(title).toBeInTheDocument();
  });

  afterAll(cleanup);
});
