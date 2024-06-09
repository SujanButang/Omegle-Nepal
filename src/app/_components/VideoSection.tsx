'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';

type Props = { className?: string };

const VideoSection = (props: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={cn(['', props.className])}>
      {loading ? (
        <div className="relative flex items-center justify-center h-full">
          {/* <div className="w-12 h-12 rounded-full absolute border border-solid border-gray-200"></div> */}
          <div className="w-12 h-12 rounded-full animate-spin  border border-solid border-cyan-500 border-t-transparent"></div>
        </div>
      ) : (
        <div>VideoSection</div>
      )}
    </div>
  );
};

export default VideoSection;
