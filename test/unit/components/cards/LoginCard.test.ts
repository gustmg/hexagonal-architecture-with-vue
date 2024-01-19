import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import {
  describe, expect, it, vi,
} from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import LoginCard from '@/components/cards/LoginCard.vue';
import { useCustomerStore } from '@/stores/customer.store';

installQuasarPlugin();

describe('LoginCard', () => {
  it('should login by clicking on Enter button', () => {
    const wrapper = mount(LoginCard, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn,
        })],
      },
    });

    const customerStore = useCustomerStore();
    const loginButton = wrapper.find('button');

    loginButton.trigger('click');

    expect(customerStore.login).toHaveBeenCalled();
  });
});
