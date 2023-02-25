import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial right red color, and updates when clicked', () => {
  render(<App />);

  //check if the text of the button say change to blue
  const colorButton =  screen.getByText('change to mid night blue')

  //check if the background color to be red
  expect(colorButton).toHaveStyle({'background-color': 'mediumVioletRed'});

  //clic button
  fireEvent.click(colorButton);

  //expect the background color turn blue
  expect(colorButton).toHaveStyle({'background-color': 'midNightBlue'});

  //expect the button text to be 'change to red'
  expect(colorButton).toHaveTextContent('change to medium violet red')
});

test('disable checkbox', ()=> {
  render(<App />);
  
  // check that the button starts enabled 
  const colorButton = screen.getByTestId('buttonColor1');
  expect(colorButton).toBeEnabled();

  //check taht the checkbox starts unchecked
  const checkbox = screen.getByTestId('checkbox1');
  expect(checkbox).not.toBeChecked();

  //click checkBox
  fireEvent.click(checkbox);

  //check taht the checkbox is checked
  expect(checkbox).toBeChecked();

  //check that the button its unabled
  expect(colorButton).toBeDisabled();

  //click checkBox
  fireEvent.click(checkbox);

  //check taht the checkbox its not checked
  expect(checkbox).not.toBeChecked();

  //check that the button its not unabled
  expect(colorButton).toBeEnabled();
})