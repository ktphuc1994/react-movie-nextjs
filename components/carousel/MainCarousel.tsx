'use client';

import React, { MouseEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import classes from './MainBanner.module.css';
import { MovieBannerType } from '@/types/movie';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  bannerList?: MovieBannerType[];
};

const MainCarousel = ({ bannerList = [] }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  const settings: Settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: classes.mainBanner,
      beforeChange: () => {
        setIsDragging(true);
      },
      afterChange: () => {
        setIsDragging(false);
      },
    }),
    []
  );

  const handleClickBanner = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();

    if (!isDragging) return;
    e.preventDefault();
  };

  return (
    <Slider {...settings}>
      {bannerList.map((bannerInfo) => (
        <Link
          href={`/movie/${bannerInfo.maPhim}`}
          className={classes.imageWrapper}
          key={`banner-number-${bannerInfo.maBanner}`}
          onClick={handleClickBanner}
        >
          <img
            src={bannerInfo.hinhAnh}
            alt={`movie-code-${bannerInfo.maPhim}`}
          />
        </Link>
      ))}
    </Slider>
  );
};

export default MainCarousel;
