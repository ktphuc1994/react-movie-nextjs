const localConst = {
  AUTH_LOCAL_STORE_KEY: 'AUTH_INFO',
  USER_LOCAL_STORE_KEY: 'USER_INFO',
  BASE_URL: 'http://api-nestjs-movie.khucthienphuc.name.vn',
  BASE_BOOKING_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyDatVe';
  },
  BASE_USER_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyNguoiDung';
  },
  BASE_MOVIE_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyPhim';
  },
  BASE_THEATER_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyRap';
  },
};

export default localConst;
