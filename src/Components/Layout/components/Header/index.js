import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark as close,
    faSpinner as loading,
    faMagnifyingGlass as search,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    />
                    {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={close} />
                    </button> */}
                    <FontAwesomeIcon className={cx('loading')} icon={loading} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={search} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
