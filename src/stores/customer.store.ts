import { defineStore } from 'pinia';
import Notifier from 'src/boot/Notifier';
import { CustomerDto } from 'src/modules/customer/domain/CustomerDto';
import { CustomerEntity, isCustomerWithCompleteData } from 'src/modules/customer/domain/CustomerEntity';
import { ICustomerLogin } from 'src/modules/customer/domain/CustomerLoginEntity';
import { CustomerRegistrationDto } from 'src/modules/customer/domain/CustomerRegistrationDto';
import { ICustomerRegistrationEntity } from 'src/modules/customer/domain/CustomerRegistrationEntity';
import login from 'src/modules/customer/application/login/login';

import createLocalStorageCustomerRepository from 'src/modules/customer/infrastructure/LocalStorageCustomerRepository';
import register from 'src/modules/customer/application/register/register';
import updateCustomer from 'src/modules/customer/application/update-customer/updateCustomer';

const repository = createLocalStorageCustomerRepository();

const defaultCustomerLoginForm = {
  email: 'gus@gus.com',
  password: '123',
};

const defaultCustomerRegistrationForm = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

export const useCustomerStore = defineStore('customer', {
  state: () => ({
    customer: new CustomerEntity(),
    customerLoginForm: defaultCustomerLoginForm as ICustomerLogin,
    customerRegistrationForm: defaultCustomerRegistrationForm as ICustomerRegistrationEntity,
  }),

  getters: {
    isCustomerLoggedIn: (state) => !!state.customer.email,
    isCustomerWithCompleteData: (state) => isCustomerWithCompleteData(state.customer),
  },

  actions: {
    async login() {
      try {
        const customer = await login(repository, this.customerLoginForm);
        this.customer = new CustomerEntity().fromCustomerDto(customer);

        Notifier('Inicio de sesión realizado con éxito 🎉', 'positive');

        this.router.push('/');
      } catch (error) {
        Notifier(`Ocurrió un error al iniciar sesión: ${error}`, 'negative');
      }
    },

    async register() {
      try {
        const payload = new CustomerRegistrationDto()
          .fromCustomerRegistrationEntity(this.customerRegistrationForm);

        await register(repository, payload);

        Notifier('¡Registro realizado correctamente! 🎉', 'positive');

        this.router.push('/login');
      } catch (error) {
        Notifier(`Ocurrió un error al iniciar sesión: ${error}`, 'negative');
      }
    },

    async updateCustomer() {
      try {
        const payload = new CustomerDto().fromCustomerEntity(this.customer);
        await updateCustomer(repository, payload);

        Notifier('Su información ha sido actualizada! 🎉', 'positive');
      } catch (error) {
        Notifier(`Ocurrió un error al actualizar su información: ${error}`, 'negative');
      }
    },
  },
});
