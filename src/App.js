import React from 'react'
import './App.css';

function NumericInput() {
	const [cnt, setCnt] = React.useState(27)
	const [step, setStep] = React.useState(1)


	const increament = () => {
		if ( +cnt >= 50 || +cnt + step > 50) {
			alert('Максимальная граница 50')
			return
		}
		setCnt( prev => {
			return Math.floor( +prev + step)
		})
	}

	
	const decreament = () => {
		if ( +cnt <= 0 || +cnt - step < 0) {
			alert('Минимальная граница 0')
			return
		} else {
			setCnt( prev => {
				return Math.round( +prev - step )
			})
		}
	}

	const changeInputHandler = cnt =>{
		if (+cnt < 0) {
			setCnt(0)
			alert('Введите положительное число')
			return
		} else if (+cnt > 50) {
			alert('Максимальная граница 50')
			setCnt(50)
			return
		}

		setCnt(cnt)
	}


	const onChangeStepHandler = step => {
		if (step === 0) {
			setStep('')
		} else {
			setStep(step)
		}	
	}


	return (
		<div className="Counter">
			<button onClick={increament}>+ {step}</button>
			<input 	type="number" 
					onChange={e => changeInputHandler(e.target.value)}
					value={cnt}/>
			<button onClick={decreament}>- {step}</button>

			<hr/>
			<h3>Шаг ввода</h3>
			<input type="text" 
				onChange={e => onChangeStepHandler(+e.target.value)} 
				value={step}
			/>
		</div>
	);
}

export default NumericInput;
