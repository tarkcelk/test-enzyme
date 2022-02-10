/**
 * @jest-environment jsdom
 */
import React from 'react';
import {expect} from '@jest/globals';
import {mount} from 'enzyme';
import Counter from './counter';
import {isAllUpperCase} from './utils';

describe('counter component tests with enzyme', () => {
  let wrapper;
  beforeEach(() => {
    console.error = () => {};
    wrapper = mount(<Counter />);
  });

  it('should render Counter component with enzyme', () => {
    expect(wrapper.debug()).toBeTruthy();
  });

  it('should have a view that contains childrens', () => {
    const childrenCount = wrapper.find('View').children().length;

    expect(childrenCount).toBeGreaterThan(1);
  });

  it('should have a title with upper case letters', () => {
    const counterTitleText = wrapper
      .findWhere(node => node.prop('testID') === 'counterTitle')
      .first()
      .text();

    expect(isAllUpperCase(counterTitleText)).toBe(true);
  });

  it('should show the counter number at some text', () => {
    const counterText = wrapper.find({testID: 'counterText'}).first().text();

    expect(counterText).toBeDefined();
  });

  it('should have a button that increments counter', () => {
    const incrementButton = wrapper
      .find({testID: 'incrementButton'})
      .first()
      .exists();

    expect(incrementButton).toBeTruthy();
  });

  it('should have a button that decrements counter', () => {
    const decrementButton = wrapper
      .find({testID: 'decrementButton'})
      .first()
      .exists();

    expect(decrementButton).toBeTruthy();
  });

  it('should increment counter text when increment button pressed', () => {
    const counterTextBefore = wrapper
      .find({testID: 'counterText'})
      .first()
      .text();

    wrapper.find({testID: 'incrementButton'}).first().simulate('click');

    const counterTextAfter = wrapper
      .find({testID: 'counterText'})
      .first()
      .text();

    expect(parseInt(counterTextAfter)).toBeGreaterThan(
      parseInt(counterTextBefore),
    );
  });

  it('should decrement counter text when decrement button pressed', () => {
    wrapper.find({testID: 'incrementButton'}).first().simulate('click');

    const counterTextBefore = wrapper
      .find({testID: 'counterText'})
      .first()
      .text();

    wrapper.find({testID: 'decrementButton'}).first().simulate('click');

    const counterTextAfter = wrapper
      .find({testID: 'counterText'})
      .first()
      .text();

    expect(parseInt(counterTextAfter)).toBeLessThan(
      parseInt(counterTextBefore),
    );
  });

  it('should not set counter to be smaller than zero', () => {
    wrapper.find({testID: 'decrementButton'}).first().simulate('click');

    const counterText = wrapper.find({testID: 'counterText'}).first().text();

    expect(parseInt(counterText)).toBeGreaterThanOrEqual(0);
  });
});
