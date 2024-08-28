import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

test('컴포넌트 테스트 예시', () => {
    //render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    
    const button = screen.getByTestId("button");
    fireEvent.click(button);
});