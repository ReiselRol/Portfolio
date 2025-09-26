import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { NodePackagesPage } from '../NodePackagesPage';
import { screen } from '@testing-library/react';

describe('Test for NodePackagesPage component', () => {

    test('1.- Renders the <NodePackagesPage/> component', async () => {
        renderWithProviders(<NodePackagesPage/>);
        const component = await screen.findByTestId('NodePackagesPage-Component');
        expect(component).toBeInTheDocument();
    });

});
