import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatPage from '../ChatPage';

jest.mock('socket.io-client', () => {
  return jest.fn().mockImplementation(() => {
    return {
      on: jest.fn(),
      emit: jest.fn(),
    };
  });
});

test('renders the page title', () => {
  const id="123"
  render(<ChatPage id={id} />);
  const pageHeading = screen.getByTestId("app-heading");
  expect(pageHeading).toBeInTheDocument();
});

test('renders a div to ccontain page body', () => {
  const id="123"
  render(<ChatPage id={id} />);
  const pageHeading = screen.getByTestId("page-body");
  expect(pageHeading).toBeInTheDocument();
});
