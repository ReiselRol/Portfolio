import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { AppNavigator } from '../AppNavigator';
import { screen } from '@testing-library/react';

describe('Test for AppNavigator component', () => {

    test('1.- Renders the <AppNavigator/> component', async () => {
        renderWithProviders(<AppNavigator/>);
        const component = await screen.findByTestId('AppNavigator-Component');
        expect(component).toBeInTheDocument();
    });

});
