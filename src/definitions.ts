declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorYPImagePicker: CapacitorYPImagePickerPlugin;
  }
}

export interface CapacitorYPImagePickerPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
