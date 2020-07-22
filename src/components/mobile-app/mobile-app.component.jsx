import React from 'react'
import './mobile-app.css'

const MobileApp = () => (
	<section className="MobileApp">
		<div className="container">
			<img src="" alt="" className="MobileApp__img" />
			<h2 className="title-h2 MobileApp__title">
				Мобильное приложение ОТП Банк
			</h2>
			<div className="MobileApp__text">
				Открывайте вклады и накопительные счета прямо в приложении
			</div>
			<div className="MobileApp__text">
				Оплачивайте телефон, ЖКХ и другие услуги
			</div>
			<div className="MobileApp__text">
				Бесплатное пополняйте счёт с карт других банков
			</div>
			<div className="MobileApp__app-block">
				<img
					src=""
					alt="App store image"
					className="MobileApp__app-block__img"
				/>
				<img
					src=""
					alt="Google play image"
					className="MobileApp__app-block__img"
				/>
			</div>
		</div>
	</section>
)

export default MobileApp