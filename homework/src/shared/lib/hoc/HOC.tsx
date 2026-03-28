import type { ComponentType } from 'react';

type Props = {
  isLoading: boolean;
};

export function withLoading<P extends Props>(
  WrappedComponent: ComponentType<Omit<P, 'isLoading'>>
) {
  return function WithLoading({ isLoading, ...rest }: P) {
    if (isLoading) return <div>Loading...</div>;
    return <WrappedComponent {...rest} />;
  };
}
