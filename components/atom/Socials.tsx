import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex flex-row items-center gap-2 lg:gap-4 justify-center text-black-900 dark:text-black-500">
      <Link
        href="https://github.com/konx-dev"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-red-500 dark:hover:text-white-100 transition duration-500">
        <span className="text-[1.75rem] lg:text-[2.5rem]">
          <FaGithubSquare />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/konxdev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-red-500 dark:hover:text-white-100 transition duration-500">
        <span className="text-[1.75rem] lg:text-[2.5rem]">
          <FaLinkedin />
        </span>
      </Link>
    </div>
  );
}
