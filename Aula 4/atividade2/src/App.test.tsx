import { render, screen } from '@testing-library/react';
import App from './App';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

function setup() {
  return enzyme.shallow(<App />);
}

class Page {
  appElements: any;
  header: any;
  inputList: any;
  button: any;

  private findOnBodyFirstRow(element: any) {
    return element.find((el: { type: string; }) => el.type === 'table')
    .props.children.find((el: { type: string; }) => el.type === 'tbody')
    .props.children.find((el: { type: string; }) => el.type === 'tr')
    .props.children
  }

  private getInputList(elementList: any[]) {
    return elementList
      .filter(element => element.props.children.type === "input")
      .map(element => element.props.children)
  }

  private getButton(element: any) {
    return element.props.children
  }
  
  constructor(component: any) {
    this.appElements = component.getElement().props.children;
    this.header = this.appElements.find((el: { type: string; }) => el.type === 'header');
    this.inputList = this.getInputList(this.findOnBodyFirstRow(this.appElements));
    this.button = this.getButton(this.findOnBodyFirstRow(this.appElements)[4]);
  }
}

test('header Developers App to be on screen', () => {
  render(<App />);
  const developerText = screen.getByText(/Developers App/);
  expect(developerText).toBeInTheDocument();
});

test('columns headers to be on screen', () => {
  render(<App />);

  const output = ["Skill Name", "Developers", "Technologies", "Roles"]
  const headers = screen.getAllByRole("columnheader");
  headers.forEach((header, index) => expect(header).toHaveTextContent(output[index]))
});

describe('Test page object', () => {

  const component = setup();
  const page = new Page(component);

  test('input fields are created correctly', () => {
    page.inputList.forEach((input: any) => {
      expect(input.props.className).toBe('input1');
    })
  });
  
  test('buttons are created correctly', () => {
    expect(page.button.props.id).toBe('add-button');
  });
});
