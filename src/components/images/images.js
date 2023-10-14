import logo from '../../assets/svg/unconstrained-logo.svg'
import twitterIcon from '../../assets/svg/twitter-icon.svg'
import fbIcon from '../../assets/svg/fb-icon.svg'
import instaIcon from '../../assets/svg/insta-icon.svg'
import ldIcon from '../../assets/svg/ld-icon.svg'
import demoBtn from '../../assets/svg/demo-video-btn.svg';
import homeBanner from '../../assets/svg/banner-image.svg';
import aboutBanner from '../../assets/svg/about-banner.svg';
import missionImg from '../../assets/svg/mission-image.svg'
import visionImg from '../../assets/svg/vision-image.svg';
import p25 from "../../assets/jpg/p25.jpg";
import p26 from "../../assets/jpg/p26.jpg";
import p27 from "../../assets/jpg/p27.jpg";
import p28 from "../../assets/jpg/p28.jpg";
import blog1 from "../../assets/jpg/blog1.jpg";
import blog2 from "../../assets/jpg/blog2.jpg";
import coursesSignupBtn from '../../assets/svg/courses-signup-btn.svg';
import coursesBanner from '../../assets/svg/courses-banner.svg';
import coachingInputBtn from '../../assets/svg/coaching-input-btn.svg';
import searchIcon from '../../assets/svg/search-icon.svg';
import doubleQuote from '../../assets/jpg/doublequotes.jpg';
import dolly from '../../assets/jpg/dolly.jpg';
import alex from '../../assets/jpg/alex.jpg';

require.context('../../assets', false, /\.(png|jpe?g|svg)$/)

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

// DO NOT ADD ANY MORE IMAGE THIS IS DEPRECATED
const images = {
    logo,
    twitterIcon,
    fbIcon,
    instaIcon,
    ldIcon,
    demoBtn,
    homeBanner,
    aboutBanner,
    missionImg,
    visionImg,
    p25,
    p26,
    p27,
    p28,
    blog1,
    blog2,
    coursesSignupBtn,
    coursesBanner,
    coachingInputBtn,
    searchIcon,
    doubleQuote,
    // james,
    dolly,
    alex
}

export const image = {
    ...importAll(require.context('../../assets/jpg/', false, /\.(png|jpe?g|svg)$/)),
    ...importAll(require.context('../../assets/svg/', false, /\.(png|jpe?g|svg)$/))
}

export default images;