import React from 'react';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {/* divide: 어떤 요소의 옆에 형제 요소가 있으면 border 를 넣어준다. (자식요소에 border-b 할 필요 x) */}
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div key={i} className="flex px-4 cursor-pointer py-3 items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">See You tomorrow in the corner at 2pm!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
