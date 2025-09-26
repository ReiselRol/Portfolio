import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { WebProjectsPage } from '../WebProjectsPage';
import { screen } from '@testing-library/react';

describe('Test for WebProjectsPage component', () => {

    test('1.- Renders the <WebProjectsPage/> component', async () => {
        renderWithProviders(<WebProjectsPage/>);
        const component = await screen.findByTestId('WebProjectsPage-Component');
        expect(component).toBeInTheDocument();
    });

});
