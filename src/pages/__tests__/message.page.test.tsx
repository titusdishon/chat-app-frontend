import React from 'react';
import { render, screen } from '@testing-library/react';
import Messages from '../Messages';

jest.mock('socket.io-client', () => {
  return jest.fn().mockImplementation(() => {
    return {
      on: jest.fn(()=>{data:[{
        text:"Hello",
        id:"123"
      }]}),
      emit: jest.fn(),
    };
  });
});

test('renders the page title', () => {
  const name="123"
  render(<Messages name={name} />);
  const pageHeading = screen.getByTestId("chat-box");
  expect(pageHeading).toBeInTheDocument();
});

test('renders a div to with list of chats', () => {
  const name="123"
  render(<Messages name={name} />);
  const pageHeading = screen.getByTestId("chat-list");
  expect(pageHeading).toBeInTheDocument();
});

