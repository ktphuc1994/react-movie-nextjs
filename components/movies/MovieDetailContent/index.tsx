import { MovieType } from '@/types/movie';
import classes from './index.module.css';
import { CalendarOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

type Props = {
  movieInfo?: MovieType;
};
const MovieDetailContent = ({ movieInfo }: Props) => {
  if (!movieInfo) return null;

  return (
    <section className={classes.movieDetailContent}>
      <h2>{movieInfo.tenPhim}</h2>
      <div className={classes.movieDetailWrapper}>
        <div className='movie-info'>
          <div className={classes.releaseInfo}>
            <CalendarOutlined style={{ fontSize: '2.5rem' }} />
            <div className='release-info'>
              <span>premiere date:</span>
              <span>
                {dayjs(movieInfo.ngayKhoiChieu).format('DD MMMM YYYY')}
              </span>
            </div>
          </div>
          <p className={classes.movieDesc}>{movieInfo.moTa}</p>
          <div className={classes.movieDetailInfo}>
            <span className='detail-key'>original title:</span>
            <span className='detail-content'>{movieInfo.tenPhim}</span>

            <span className='detail-key'>film genre:</span>
            <span className='detail-content'>Genernal, IMAX</span>

            <span className='detail-key'>cast:</span>
            <span className='detail-content'></span>

            <span className='detail-key'>director:</span>
            <span className='detail-content'>Tobe Announce Later</span>

            <span className='detail-key'>original language:</span>
            <span className='detail-content'>EN</span>

            <span className='detail-key'>age restrictions:</span>
            <span className='detail-content'>Lack of information</span>

            <div className='detail-movie-format'>
              <span>we play this movie in:</span>
              <img src='/icons/imax-icon.svg' alt='imax-icon' />
              <img src='/icons/dolby-icon.svg' alt='dolby-icon' />
              <span>2D</span>
            </div>
          </div>
        </div>
        <div className='image-wrapper'>
          <img src={movieInfo.hinhAnh} alt={movieInfo.tenPhim} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetailContent;
