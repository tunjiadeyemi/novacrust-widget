import { useState } from 'react';
import TextBox from './Form/TextBox';
import PrimaryButton from './PrimaryButton';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="flex flex-col gap-3 mt-4 items-center">
      <h1 className="text-[32px] clash-display-medium text-[#013941]">Coming Soon!</h1>

      <div className="text-center mb-5">
        <p className="text-[#4F4F4F] text-sm lg:text-xl font-normal">
          Cash to Crypto is almost here.
        </p>
        <p className="text-[#4F4F4F] text-sm lg:text-xl font-normal">
          Enter your email and we’ll let you know the moment it’s live.
        </p>
      </div>

      <TextBox
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <PrimaryButton className="mt-5 lg:mt-10" label="Update me" />
    </div>
  );
};

export default ComingSoon;
