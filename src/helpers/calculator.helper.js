export const getSum = (depositRate, percent, month) => {
  const totalPercent = percent * 0.01
  const sumDuringYear = Math.round(+depositRate * totalPercent)
  const sum = Math.round((sumDuringYear / 12) * month)

  return sum
}

export const getTotalSum = (sum, bonusSum) => sum + bonusSum

export const getBonusSum = (tariffName, depositRate, bonusPercent, month) => {
  const totalPercent = bonusPercent * 0.01

  let maxInterestAmount = 0

  if (tariffName === 'Накопительный счет') {
    maxInterestAmount = 350000
  }
  else if (tariffName === 'Накопительный счет Premium') {
    maxInterestAmount = 1000000
  }

  let interestAmount = depositRate

  if (depositRate > maxInterestAmount) {
    interestAmount = maxInterestAmount
  }

  const sumDuringYear = Math.round(+interestAmount * totalPercent)
  const sum = Math.round((sumDuringYear / 12) * month)

  return sum
}

export const getSumFormat = sum => {
  let depositRateArr = sum.toString().split('').reverse()
  let indexsArr = []

  for (let i = 0; i < depositRateArr.length; i++) {
    if (i > 0 && i % 3 === 0) {
      indexsArr.push(i)
    }
  }

  for (let i = 0; indexsArr.length !== 0; i++) {
    depositRateArr.splice(indexsArr.pop(), 0, ' ')
  }

  return depositRateArr.reverse().join('')
}

export const getDate = month => {
  const monthArr = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const dateNow = new Date()
  const dayNow = dateNow.getDate()
  const monthNow = dateNow.getMonth()
  const yearNow = dateNow.getFullYear()

  const depositDate = new Date(yearNow, monthNow + month, dayNow)
  const resultDay = depositDate.getDate()
  const resultMonth = depositDate.getMonth()
  const resultYear = depositDate.getFullYear()

  return 'к ' + resultDay + ' ' + monthArr[resultMonth] + ' ' + resultYear
}

export const getBonusPercent = (tariffName, transactionRate) => {
  let bonusPercent = 0

  if (tariffName === 'Накопительный счет') {
    if (transactionRate >= 70000) {
      bonusPercent = 2.5
    } else if (transactionRate >= 50000) {
      bonusPercent = 2
    } else if (transactionRate >= 30000) {
      bonusPercent = 1.5
    } else if (transactionRate >= 15000) {
      bonusPercent = 1
    } else if (transactionRate >= 7000) {
      bonusPercent = 0.2
    } else {
      bonusPercent = 0
    }
  } else if (tariffName === 'Накопительный счет Premium') {
    if (transactionRate >= 150000) {
      bonusPercent = 2
    } else if (transactionRate >= 100000) {
      bonusPercent = 1.5
    } else if (transactionRate >= 70000) {
      bonusPercent = 1
    } else if (transactionRate >= 35000) {
      bonusPercent = 0.5
    } else {
      bonusPercent = 0
    }
  }

  return bonusPercent
}