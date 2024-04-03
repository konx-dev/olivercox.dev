import ClientButton from '@/components/client/Button';

function NotFoundPage() {
  return (
    <div className="flex flex-col px-4 justify-center items-center h-screen w-screen">
      <h1 className="text-heading-xl text-center font-bold text-white-500">Oops.. something went wrong</h1>
      <div className="mt-6 text-center">
        <ClientButton />
      </div>
    </div>
  );
}

export default NotFoundPage;
