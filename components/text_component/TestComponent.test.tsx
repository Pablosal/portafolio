import { describe, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import TextComponent from './TextComponent';

describe('To have a default text at the begining of the component', () => {
  it('Should say Agregue texto ', () => {
    // @ts-ignore
    render(<TextComponent />);
    expect(screen.getByTestId('textComponent').textContent).toBe("Agregue texto");
  });
});
