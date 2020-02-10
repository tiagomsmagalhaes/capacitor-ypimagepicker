import { WebPlugin } from '@capacitor/core';
import { CapacitorYPImagePickerPlugin } from './definitions';

export class CapacitorYPImagePickerWeb extends WebPlugin implements CapacitorYPImagePickerPlugin {
  constructor() {
    super({
      name: 'CapacitorYPImagePicker',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorYPImagePicker = new CapacitorYPImagePickerWeb();

export { CapacitorYPImagePicker };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorYPImagePicker);
