import clientConfig from '@/sanity/config/client-config';
import imageUrlBuilder from '@sanity/image-url';
import { parse, format } from 'date-fns';

export function refConvert(ref: string) {
  const builder = imageUrlBuilder(clientConfig);

  function refToUrl(source: string) {
    return builder.image(source);
  }

  return refToUrl(ref).url();
}

// Accepts 2 arguments, the date to convert and an optional valid datefns format to convert to
export function dateConvert(date: string, dateFormat?: string) {
  // sanity provides all date types as 'yyyy-MM-dd'
  const cmsFormat = 'yyyy-MM-dd';

  // optionally provide a custom format or use the default that will output 'May, 2024'
  const targetFormat = dateFormat ? dateFormat : 'MMM, yyyy';

  const parsedDate = parse(date, cmsFormat, new Date());

  return format(parsedDate, targetFormat);
}