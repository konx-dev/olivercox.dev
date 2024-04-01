export default function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className="mb-4 flex flex-row items-center">
      <h3 className=" text-heading-lg font-bold pr-4">{heading}</h3>
      <hr className="h-[1px] text-red-500 dark:text-blue-500 w-full" />
    </div>
  );
}
