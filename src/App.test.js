import { render, screen, logRoles, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial red color, and updates when clicked', () => {
  const { container } = render(<App />);
  logRoles(container);
  //find an element with a role of button and text of 'change to blue'
  const colorButton =  screen.getByRole('button', {name: 'change to blue' });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({'background-color': 'red'});

  //clic button
  fireEvent.click(colorButton);

  //expect the background color turn blue
  expect(colorButton).toHaveStyle({'background-color': 'blue'});

  //expect the button text to be 'change to red'
  expect(colorButton).toHaveTextContent('change to red')
});

test('initial conditions', ()=> {
  render(<App />);
  
  // check that the button starts enabled 
  const colorButton = screen.getByRole('button', {name: 'change to blue'});
  expect(colorButton).toBeEnabled();

  //check taht the checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})