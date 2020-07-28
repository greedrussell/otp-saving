import React from 'react'

import './mobile-app.css'
import AppleSVG from '../../assets/img/mobile-app__apple-btn.svg'
import GoogleSVG from '../../assets/img/mobile-app__google-btn.svg'
import OtpSVG from '../../assets/img/mobile-app__otp.svg'

const MobileApp = () => (
	<section className="MobileApp">
		<div className="container">
			<div className="MobileApp__wrapper">
				<div className="MobileApp__inner">
					<img src={OtpSVG} alt="" className="MobileApp__img" />
					<h2 className="title-h2 MobileApp__title">
						Мобильное приложение&nbsp;
						<span className="MobileApp__title__inline">ОТП Банк</span>
					</h2>
					<p className="MobileApp__text">
						Открывайте вклады и накопительные счета прямо в приложении
					</p>
					<p className="MobileApp__text">
						Оплачивайте телефон, ЖКХ и другие услуги
					</p>
					<p className="MobileApp__text">
						Бесплатное пополняйте счёт с карт других банков
					</p>
					<div className="MobileApp__app-block">
						<img
							src={AppleSVG}
							alt="App store приложение"
							className="MobileApp__app-block__img"
						/>
						<img
							src={GoogleSVG}
							alt="Google play приложение"
							className="MobileApp__app-block__img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default MobileApp