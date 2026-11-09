import { memo } from 'react';

// memo =avoid un-necessary re-rendring of child components
// memo = ((param) => {})
// param - prop from parent

type Props = {
  propMethod: () => void;
};

// export const Reset = memo(({ propMethod }: Props) => {
//   console.log('Reset component invoked');
//   return <button>Reset</button>;
// });

// Reset.displayName = 'Reset in Profiler';

// export function Reset({ propMethod }: Props) {
//   console.log('Reset component re-rendered');
//   return <button onClick={propMethod}>reset</button>;
// }

export const Reset = memo(({ propMethod }: Props) => {
  console.log('reset function invoked');
  return <button onClick={propMethod}>Reset</button>;
});

Reset.displayName = 'Reset in Profiler';
