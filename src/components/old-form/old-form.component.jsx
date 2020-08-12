import React from 'react'
import { Element } from 'react-scroll'

import './old-form.css'

const Form = () => (
	<Element name="Form">
		<section className="Form">
			<div className="container">
				<h2 className="title-h2 Form__title">Оставьте заявку</h2>
			</div>
			<iframe
				title="form"
				className="claim-form"
				src="https://cards.otpbank.ru/debit/purchase"></iframe>
		</section>
	</Element>
)

export default Form
