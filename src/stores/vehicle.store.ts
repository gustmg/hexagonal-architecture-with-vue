import { defineStore } from 'pinia';
import Notifier from 'src/boot/Notifier';
import getAll from 'src/modules/vehicle/application/get-all/getAll';
import { AddVehicleEntity } from 'src/modules/vehicle/domain/AddVehicleEntity';
import { IVehicleDto } from 'src/modules/vehicle/domain/VehicleDto';
import { IVehicleEntity, VehicleEntity } from 'src/modules/vehicle/domain/VehicleEntity';
import createLocalStorageVehicleRepository from 'src/modules/vehicle/infrastructure/LocalStorageVehicleRepository';

const repository = createLocalStorageVehicleRepository();

export const useVehicleStore = defineStore('vehicle', {
  state: () => ({
    vehicles: [] as IVehicleEntity[],
    addVehicleForm: new AddVehicleEntity(),
  }),

  getters: {
    getAllVehicles: (state) => state.vehicles,
    getSelectedVehicleToAdd: (state) => state.vehicles.find(
      (vehicle) => vehicle.id === state.addVehicleForm.vehicleId,
    ) ?? null,
  },

  actions: {
    async fetchVehicles() {
      try {
        const vehicles: IVehicleDto[] = await getAll(repository);
        this.vehicles = vehicles.map(
          (vehicleDto) => new VehicleEntity().fromVehicleDto(vehicleDto),
        );
      } catch (error) {
        Notifier(`Ocurrió un error al obtener vehículos: ${error}`, 'negative');
      }
    },
  },
});
