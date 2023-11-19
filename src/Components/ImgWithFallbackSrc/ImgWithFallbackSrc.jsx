import React, { useState } from "react";

export default function ImgWithFallbackSrc({
  src,
  fallbackSrc,
  alt = "",
  height = "200px",
  width = "200px",
  radius = "100%",
}) {
  const [imageSource, setImageSource] = useState(src);
  const [error, setError] = useState(false);
  const styles = {
    height: height,
    width: width,
    borderRadius: radius,
  };
  const handleImageError = () => {
    if (!error) {
      setImageSource(fallbackSrc);
      setError(true);
    }
  };

  return (
    <img
      style={styles}
      src={imageSource}
      alt={alt}
      loading="lazy"
      onError={handleImageError}
    />
  );
}
