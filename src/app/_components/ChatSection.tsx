import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import React from 'react';

type Props = { className?: string };

const ChatSection = (props: Props) => {
  return (
    <div className={cn(['h-full rounded-xl flex flex-col ', props.className])}>
      <div className="flex p-5 font-semibold">Chats</div>
      <hr />
      <div className="flex flex-col">
        <div className="flex items-center">
          <figure className="w-10 h-10 rounded-full">
            <User />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
