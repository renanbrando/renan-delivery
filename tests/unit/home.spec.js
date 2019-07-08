import { shallowMount } from '@vue/test-utils'
import Toolbar from '@/components/Toolbar.vue'

describe('Toolbar.vue', () => {
  it('renders toolbar component when passed', () => {
    const wrapper = shallowMount(Toolbar, {
      stubs: ['router-link', 'font-awesome-icon']
    })
    expect(wrapper.contains('div')).toBe(true)
  })
})
