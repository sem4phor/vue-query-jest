import { shallowMount, flushPromises } from '@vue/test-utils';
import Component from './HelloWorld.vue';

test('loading', async () => {
  const wrapper = shallowMount(Component);
  expect(wrapper.vm.isLoading).toBe(true);
  await flushPromises();
  expect(wrapper.vm.isLoading).toBe(false);
});
