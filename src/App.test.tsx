import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('ToDo App', () => {
  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ToDo App/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds new task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Введите новую задачу');
    const addButton = screen.getByText('Добавить');

    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Новая задача')).toBeInTheDocument();
  });

  test('toggles task status', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Введите новую задачу');
    const addButton = screen.getByText('Добавить');

    fireEvent.change(input, { target: { value: 'Тестовая задача' } });
    fireEvent.click(addButton);

    const completeButton = screen.getByText('Выполнить');
    fireEvent.click(completeButton);

    expect(screen.getByText('Тестовая задача')).toHaveStyle('text-decoration: line-through');
    expect(screen.getByText('Вернуть')).toBeInTheDocument();
  });

  test('deletes task', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Введите новую задачу');
    const addButton = screen.getByText('Добавить');

    fireEvent.change(input, { target: { value: 'Задача для удаления' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText('Удалить');
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Задача для удаления')).not.toBeInTheDocument();
  });

  test('separates active and completed tasks', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Введите новую задачу');
    const addButton = screen.getByText('Добавить');
    
    fireEvent.change(input, { target: { value: 'Активная задача' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Выполненная задача' } });
    fireEvent.click(addButton);
    const completeButton = screen.getAllByText('Выполнить')[1];
    fireEvent.click(completeButton);

    expect(screen.getByText('Активные задачи (1)')).toBeInTheDocument();
    expect(screen.getByText('Выполненные задачи (1)')).toBeInTheDocument();
  });
});
