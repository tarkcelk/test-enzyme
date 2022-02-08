/**
 * @jest-environment jsdom
 */
import React from 'react';
import {mount} from 'enzyme';
import Counter from './counter';

describe('counter component tests with enzyme', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Counter />);
  });

  it('should render Counter component with enzyme', () => {
    wrapper.debug();
  });

  it('should have a view that contains childrens', () => {});

  it('should have a title with upper case letters', () => {
    const counterTitle = wrapper
      .findWhere(node => node.prop('testID') === 'CounterTitle')
      .first();
    expect(isAllUpperCase(counterTitle.text())).toBe(true);
  });

  it('should have a button that increments counter', () => {});

  it('should have a button that decrements counter', () => {});

  it('should not set counter to be smaller than zero', () => {});

  it('should show the counter number at some text', () => {});
});

const isAllUpperCase = (string = '') => string.toUpperCase() === string;
