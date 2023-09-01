import { useState } from "react";

export function useProfileController(route: any) {
  const { formData } = route.params;
  const [imageUri, setImageUri] = useState<string | null>(formData.image);

  const handleImageCaptured = (uri: string) => {
    setImageUri(uri);
  };

  return {
    imageUri,
    handleImageCaptured
  };
}