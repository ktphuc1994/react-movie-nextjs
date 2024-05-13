'use client';
import Lottie from 'lottie-react';
import flyingRocket from '@/assets/lottie/flyingRocket.json';

const FlyingRocket = () => {
  return (
    <Lottie
      animationData={flyingRocket}
      loop={true}
      style={{ height: '100%' }}
    />
  );
};

export default FlyingRocket;
