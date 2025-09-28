import { useTab } from '../useTab';
import { act, renderHook } from '@testing-library/react';
import { getProviderRenderWrapper } from '../../../test-utils/getProviderRenderWrapper';
import type { ProviderWrapperType } from '../../../types/ProviderWrapperType';
import type { ProviderStoreType } from '../../../types/ProviderStoreType';
import { Tabs } from '../../../constants/Tabs';
import { resetWindowsProperties } from '../../../test-utils/resetWindowsProperties';
import { getCurrentRoute } from '../../../test-utils/getCurrentRoute';

describe('Test for useTab custom hook', () => {
    let store: ProviderStoreType;
    let wrapper: ProviderWrapperType;
    let result: { current: ReturnType<typeof useTab> };
    const defaultTabInfo = Tabs[0];

    beforeEach(() => {
        resetWindowsProperties();
        const { wrapper: Wrapper, store: Store } = getProviderRenderWrapper();
        wrapper = Wrapper;
        store = Store;
        result = renderHook(() => useTab({Tab: defaultTabInfo}), {
            wrapper,
        }).result;
    });

    test('1.- the custom hook return the correct properties', () => {
        expect(result.current.handleOnClick).toBeDefined();
        expect(result.current.tabName).toBeDefined();
    });

    test('2.- the custom hook function "handleOnClick" works as expect', () => {
        act(() => {
             result.current.handleOnClick();
        });
        expect(getCurrentRoute()).toBe(defaultTabInfo.link);
    });

    test('3.- the custom hook property "tabName" should return correct the tab name translated.', () => {
        expect(result.current.tabName).toBe('Sobre mí');
    })
});
