import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { VideogamesPage } from '../VideogamesPage';
import { screen } from '@testing-library/react';

describe('Test for VideogamesPage component', () => {

    test('1.- Renders the <VideogamesPage/> component', async () => {
        renderWithProviders(<VideogamesPage/>);
        const component = await screen.findByTestId('VideogamesPage-Component');
        expect(component).toBeInTheDocument();
    });

});
