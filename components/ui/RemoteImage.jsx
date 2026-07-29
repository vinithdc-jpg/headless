import Image from "next/image";

const DEFAULT_BLUR =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'%3E%3Crect fill='%23e2e8f0' width='8' height='5'/%3E%3C/svg%3E";

export default function RemoteImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  sizes,
  priority = false,
}) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        className={className}
        placeholder="blur"
        blurDataURL={DEFAULT_BLUR}
        loading={priority ? undefined : "lazy"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="blur"
      blurDataURL={DEFAULT_BLUR}
      loading={priority ? undefined : "lazy"}
      priority={priority}
    />
  );
}
