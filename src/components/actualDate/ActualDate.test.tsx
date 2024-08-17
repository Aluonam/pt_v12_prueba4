import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ActualDate from './ActualDate';

jest.useFakeTimers();

describe('ActualDate Component', () => {
  test('renders initial date and time', () => {
    render(<ActualDate />);
    expect(screen.getByText(/Today is:/i)).toBeInTheDocument();
    expect(screen.getByText(/The time is:/i)).toBeInTheDocument();
  });

  test('updates date and time every second', () => {
    render(<ActualDate />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const newDate = new Date();
    const dayDate = newDate.toLocaleString().split(' ')[0];
    const hourDate = newDate.toLocaleString().split(' ')[1];

    expect(screen.getByText(new RegExp(`Today is: ${dayDate}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`The time is: ${hourDate}`, 'i'))).toBeInTheDocument();
  });
});