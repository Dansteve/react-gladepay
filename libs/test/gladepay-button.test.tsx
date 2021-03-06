import React from 'react';
// @ts-ignore
import {renderHook, cleanup, act} from '@testing-library/react-hooks';
import {render, fireEvent} from '@testing-library/react';
import {callGladepaySDK} from '../gladepay-actions';
import useGladepayScript from '../gladepay-script';
import GladepayButton from '../gladepay-button';
import {config} from './fixtures';

jest.mock('../gladepay-actions');

const componentProps = {
  ...config,
  className: 'btn',
  text: 'Pay my damn money',
  onSuccess: () => null,
  onClose: () => null,
};

describe('<GladepayButton />', () => {
  beforeEach(() => {
    // @ts-ignore
    callGladepaySDK = jest.fn();
    renderHook(() => useGladepayScript());
  });

  afterAll(() => {
    cleanup();
    document.body.innerHTML = '';
  });

  it('render GladepayButton', () => {
    const tree = <GladepayButton {...componentProps} />;
    const {getByText}: Record<string, any> = render(tree);
    // Click button
    fireEvent.click(getByText('Pay my damn money'));
    // @ts-ignore
    expect(callGladepaySDK).toHaveBeenCalledTimes(1);
  });
});
