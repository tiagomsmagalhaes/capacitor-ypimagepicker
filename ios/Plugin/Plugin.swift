import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(CapacitorYPImagePicker)
public class CapacitorYPImagePicker: CAPPlugin {

    @objc func loadImagePicker(_ call: CAPPluginCall) {
        let picker = YPImagePicker()
        picker.didFinishPicking { [unowned picker] items, _ in
            if let photo = items.singlePhoto {
                print(photo.fromCamera)     // Image source (camera or library)
                print(photo.image)          // Final image selected by the user
                print(photo.originalImage)  // original image selected by the user, unfiltered
                print(photo.modifiedImage)  // Transformed image, can be nil
                print(photo.exifMeta)       // Print exif meta data of original image.
            }
            picker.dismiss(animated: true, completion: nil)
            call.success(["status": true])
        }
    }
}
