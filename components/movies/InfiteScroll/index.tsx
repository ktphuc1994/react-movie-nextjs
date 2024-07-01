'use client';

import { MovieType } from '@/types/movie';
import message from 'antd/es/message';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import MovieItem from '../MovieList/MovieItem';
import { DEFAULT_PAGE_SIZE } from '@/constants/commonConst';
import { getMovieList } from '@/helpers/api/movieServ';

const InfiniteScroll = () => {
  const [data, setData] = useState<MovieType[]>([]);
  const [totalItem, setTotalItem] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const loaderRef = useRef(null);

  const pageLimit = useMemo(() => {
    if (totalItem === 0) return Infinity;
    return Math.ceil(totalItem / DEFAULT_PAGE_SIZE);
  }, [totalItem]);

  const appendData = useCallback(() => {
    if (isLoading || index > pageLimit) return;

    setIsLoading(true);
    getMovieList({
      currentPage: index.toString(),
      itemsPerPage: DEFAULT_PAGE_SIZE.toString(),
    })
      .then((res) => {
        if (res.isError) throw new Error(res.message);
        setData(data.concat(res.data.items));
        setTotalItem(res.data.totalItems);
        setIsLoading(false);
        setIndex((prev) => prev + 1);
      })
      .catch((error) => {
        messageApi.error(error.message);
      });
  }, [index, isLoading, pageLimit]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        appendData();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [appendData]);

  return (
    <>
      {contextHolder}
      {data.map((movie) => (
        <MovieItem key={movie.maPhim} movieItem={movie} />
      ))}
      <div ref={loaderRef}>{isLoading ? <span>Loading...</span> : null}</div>
    </>
  );
};

export default InfiniteScroll;
