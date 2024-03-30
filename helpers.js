import clientConfig from '@/sanity/config/client-config';
import imageUrlBuilder from '@sanity/image-url';

export function refConvert(ref) {
  const builder = imageUrlBuilder(clientConfig);

  function refToUrl(source) {
    return builder.image(source);
  }

  return refToUrl(ref).url();
}
