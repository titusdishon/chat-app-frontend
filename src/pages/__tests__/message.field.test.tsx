import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MessageField from "../MessageField";

jest.mock("socket.io-client", () => {
  return jest.fn().mockImplementation(() => {
    return {
      on: jest.fn(),
      emit: jest.fn(),
    };
  });
});

test("message field should be present", () => {
  const name: string = "123";
  render(<MessageField name={name} />);
  const messageField = screen.getByTestId("message");
  expect(messageField).toBeInTheDocument();
});

test("message field should be empty initially", () => {
  const name = "123";
  render(<MessageField name={name} />);
  const messageField = screen.getByTestId("message") as HTMLInputElement;
  expect(messageField.value).toBe("");
});

test("message field should receive inputs", () => {
  const name = "123";
  render(<MessageField name={name} />);
  const messageField = screen.getByTestId("message") as HTMLInputElement;
  expect(messageField.value).toBe("");
  fireEvent.change(messageField, { target: { value: "Hello there" } });
  expect(messageField.value).toBe("Hello there");
});

test("send button is present", () => {
  const name = "123";
  render(<MessageField name={name} />);
  const button = screen.getByTestId("send-button");
  expect(button).toBeInTheDocument();
});

test("send button is present should be disabled if message is empty", () => {
  const name = "123";
  render(<MessageField name={name} />);
  const button = screen.getByTestId("send-button");
  expect(button).toBeDisabled();
});



