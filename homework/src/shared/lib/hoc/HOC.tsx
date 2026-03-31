import type { ComponentType } from 'react';
import { Loader } from '../../../features/Loader/Loader';

type Props = {
  isLoading: boolean;
};

export function withLoading<P extends Props>(
  WrappedComponent: ComponentType<Omit<P, 'isLoading'>>
) {
  return function WithLoading({ isLoading, ...rest }: P) {
    if (isLoading) return <Loader />;
    return <WrappedComponent {...rest} />;
  };
}
