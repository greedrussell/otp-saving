import React from 'react'

import './App.css'
import HeroImg from './components/hero-img/hero-img.component'
import ActionInfo from './components/action-info/action-info.component'
// import Footer from './components/footer/footer.component'
import AboutAction from './components/about-action/about-action.components'
import Calculator from './components/calculator/calculator.component'
import HowItWork from './components/how-it-work/how-it-work.component'
import CustomerInfo from './components/customer-info/customer-info.component'
// import Faq from './components/faq/faq.component'
// import MobileApp from './components/mobile-app/mobile-app.component'

const App = () => {
	return (
		<>
			<HeroImg />
			<ActionInfo />
			<AboutAction />
			<Calculator />
			<HowItWork />
			<CustomerInfo />
			{/* <Faq /> */}
			{/* <MobileApp /> */}
			{/* <Footer /> */}
		</>
	)
}

export default App
