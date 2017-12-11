import { mount } from 'vue-test-utils'
import Checkbox from './checkbox'

describe('Checkbox', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders a input type checkbox', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.contains('input')).toBe(true)
  })

  test('should match the snapshot', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.element).toMatchSnapshot()
  })

  test('should have prop "label"', () => {
    const wrapper = mount(Checkbox, {
      propsData: {
        label: 'test'
      }
    })
    expect(wrapper.props().label).toBe('test')
  })
})
