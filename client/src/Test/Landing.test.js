import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../Components/LandingPage';
import { MemoryRouter } from 'react-router-dom';

describe('Renderizar la Landing Page', () => {
    it('Render del tittle Hola Mundo', () => {
        render(
            <MemoryRouter>
                <LandingPage />
            </MemoryRouter>
        )
        const title = screen.getByTestId('title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Hola Mundo');
    });
});