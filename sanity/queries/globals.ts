import { Globals } from '@/types/Globals';
import { createClient, groq } from 'next-sanity';
import clientConfig from '@/sanity/config/client-config';

// Retrieve global fields & settings
export async function getGlobals(): Promise<Globals> {
  return await createClient(clientConfig).fetch(
    groq`*[_type == "globals"][1]{
        _id,
        _createdAt,
        name,
        builtWith,
        "profilePicture": profilePicture.asset->url,
        "alt": profilePicture.alt,
    }`,
    {},
    { cache: 'no-store' }
  );
}
