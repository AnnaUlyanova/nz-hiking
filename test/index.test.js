import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

import Header from '../client/components/Header'


test('<Header />', t => {
  const expected = 'New Zealand Great Hiking Adventure'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})
