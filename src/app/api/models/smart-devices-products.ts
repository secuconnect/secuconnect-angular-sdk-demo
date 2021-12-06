// noinspection JSUnusedGlobalSymbols

import {SmartDeviceProductsEnabled} from './smart-device-products-enabled';
import {SmartDeviceProductsPrepaid} from './smart-device-products-prepaid';

export class SmartDevicesProducts {
  loyalty?: SmartDeviceProductsEnabled;
  smart?: SmartDeviceProductsEnabled;
  cashreg?: SmartDeviceProductsEnabled;
  collect?: SmartDeviceProductsEnabled;
  showcase?: SmartDeviceProductsEnabled;
  vtm?: SmartDeviceProductsEnabled;
  prepaid?: SmartDeviceProductsPrepaid;
}
