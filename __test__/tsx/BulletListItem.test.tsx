import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import BulletListItem from '@/common/components/atoms/BulletListItem';

// To-Do: 테스트 정상 동작 확인.
test('spacing 0 전달시 클래스명 전달 확인', () => {
  render(
    <BulletListItem
      key={1}
      bullet={<span>•</span>}
      item={<span>Item 1</span>}
      spacing={0}
    />
  );

  const bulletElement = screen.getByText('•');
  console.log(bulletElement.classList)
  expect(bulletElement).not.toHaveClass('mr-2');
});