import { mount } from 'vue-test-utils'
import Textfield from './textfield'

describe('Textfield', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(Textfield)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders a input', () => {
    const wrapper = mount(Textfield)
    expect(wrapper.contains('input')).toBe(true)
  })
})
