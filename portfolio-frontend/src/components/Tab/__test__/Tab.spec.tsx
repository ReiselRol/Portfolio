import { Tabs } from '../../../constants/Tabs';
import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { Tab } from '../Tab';
import { screen } from '@testing-library/react';

describe('Test for Tab component', () => {

    test('1.- Renders the <Tab/> component', async () => {
        renderWithProviders(<Tab Tab={Tabs[0]}/>);
        const component = await screen.findByTestId('Tab-Component');
        expect(component).toBeInTheDocument();
    });

});
