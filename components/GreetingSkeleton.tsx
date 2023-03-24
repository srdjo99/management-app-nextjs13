import Card from './Card';

const GreetingSkeleton = () => {
  return (
    <Card className='w-full py-14'>
      <div className='flex space-x-4 animate-pulse'>
        <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
        <div className='flex-1 py-1 space-y-6'>
          <div className='h-2 bg-gray-300 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 col-span-2 bg-gray-300 rounded'></div>
              <div className='h-2 col-span-1 bg-gray-300 rounded'></div>
            </div>
            <div className='h-2 bg-gray-300 rounded'></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GreetingSkeleton;
