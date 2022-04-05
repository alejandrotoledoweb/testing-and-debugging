import { render, cleanup, fireEvent } from '@testing-library/react';
import ShowInformation from './showInformation';

describe('Show Information Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<ShowInformation />);
  });
  it('should modify the name', () => {
    const { container } = wrapper;
    const nameInput = container.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const ageInput = container.querySelector(
      'input[name="age"]'
    ) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'Carlos' } });
    fireEvent.change(ageInput, { target: { value: 33 } });

    expect(nameInput.value).toEqual('Carlos');
    expect(ageInput.value).toEqual('33');
  });

  it('should show the personal information when user clicks the button', () => {
    const { container } = wrapper;
    const button = container.querySelector('button');
    fireEvent.click(button);
    const personalInformation = container.querySelector('.personalInformation');
    expect(personalInformation).toBeInTheDocument();
  });

  afterAll(cleanup);
});
