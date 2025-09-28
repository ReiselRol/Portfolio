import { Tabs } from '../../../constants/Tabs';
import { renderWithProviders } from '../../../test-utils/renderWithProviders';
import { TabGroup } from '../TabGroup';
import { screen } from '@testing-library/react';

describe('Test for TabGroup component', () => {

    test('1.- Renders the <TabGroup/> component', async () => {
        renderWithProviders(<TabGroup Tabs={Tabs}/>);
        const component = await screen.findByTestId('TabGroup-Component');
        expect(component).toBeInTheDocument();
    });

});
