import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

const Container = (props: Props) => {
  return <div className={cn(['max-w-7xl m-auto', props.className])}>{props.children}</div>;
};

export default Container;
