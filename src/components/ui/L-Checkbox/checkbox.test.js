import { mount } from 'vue-test-utils'
import Checkbox from './checkbox'

describe('Checkbox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
