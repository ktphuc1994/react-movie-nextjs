'use client';

import { useRouter } from 'next/navigation';
import classes from './ModalBackDrop.module.css';

const ModalBackDrop = () => {
  const router = useRouter();

  return <div className={classes.modalBackdrop} onClick={router.back} />;
};

export default ModalBackDrop;
