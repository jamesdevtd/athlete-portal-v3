import React from 'react'

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentWrap({ children, className }: Props) {
  return (
    <div className={`ContentWrap ${className} `}>
      {children}
    </div>
  )
}