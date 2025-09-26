import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { AboutMePage } from '../AboutMePage';
import { screen } from '@testing-library/react';

describe('Test for AboutMePage component', () => {

    test('1.- Renders the <AboutMePage/> component', async () => {
        renderWithProviders(<AboutMePage/>);
        const component = await screen.findByTestId('AboutMePage-Component');
        expect(component).toBeInTheDocument();
    });

});
