import "./PromotionsBanner.css"
import '../assets/fonts.css';

const PromotionsBanner = ({ promotionsBannerData }) => {
    return (
        <div id="promoBanner">
            <p className="text">
                <span className={`icon-${promotionsBannerData.icon}`}></span>
                &nbsp;
                {promotionsBannerData.percentage}
                &nbsp;
                {promotionsBannerData.text}{promotionsBannerData.promoCode}
            </p>
        </div>
    )
}

export default PromotionsBanner;