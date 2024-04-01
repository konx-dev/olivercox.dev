import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelopeSquare } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row items-center gap-2 justify-center text-black-900 dark:text-black-500">
      <Link
        href="https://cv.konx.dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-red-500 dark:hover:text-white-100 transition duration-500">
        <span className="text-[1.75rem]">
          <FaGithubSquare />
        </span>
      </Link>
      <Link
        href="https://cv.konx.dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-red-500 dark:hover:text-white-100 transition duration-500">
        <span className="text-[1.75rem]">
          <FaLinkedin />
        </span>
      </Link>
      <Link
        href="https://cv.konx.dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-red-500 dark:hover:text-white-100 transition duration-500">
        <span className="text-[1.75rem]">
          <FaEnvelopeSquare />
        </span>
      </Link>
    </div>
  );
}
