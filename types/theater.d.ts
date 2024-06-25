import { MovieType } from './movie';

type TheaterChain = {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string; //url
};

type MovieTheater = {
  maCumRap: string;
  tenRap: string;
  diaChi: string;
};

type MovieSchedule = {
  maLichChieu: number;
  maRap: number;
  tenRap: string;
  ngayGioChieu: string; // ISO Date String
};

type MovieTheaterAndSchedule = MovieTheater & {
  lichChieuPhim: MovieSchedule[];
};

type TheaterChainAndSchedule = TheaterChain & {
  cumRap: MovieTheaterAndSchedule[];
};
type MovieScheduleResponse = MovieType & {
  heThongRap: TheaterChainAndSchedule[];
};

export { MovieSchedule, MovieTheater, TheaterChain, MovieScheduleResponse };
