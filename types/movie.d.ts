type MovieBannerType = {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
};

type PaginationType<T> = {
  currentPage: number;
  itemsOnThisPage: number;
  totalPage: number;
  totalItems: number;
  items: T;
};

type MovieType = {
  maPhim: number;
  tenPhim: string;
  trailer: string;
  hinhAnh?: string;
  moTa: string;
  ngayKhoiChieu?: string;
  danhGia?: number;
  hot?: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

export { MovieBannerType, PaginationType, MovieType };
