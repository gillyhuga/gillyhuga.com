import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-8">
      {children}
    </div>
  );
};
