import React , {useEffect , useState} from 'react'

export const LandingCounter = ({count}) => {

    const [counter, setCounter] = useState(0)


    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(prevCount => prevCount + 1)
        }, 5)

        if(counter === count){
            clearInterval(interval)
        }

        // اگه این خط ریترن رو ننویسیم با 
        // هربار اجرا هی دوبرابر میشه و اعداد چندتا چندتا میره بالا
        // در کل هر یوز افکتی رو بتونیم در انتهای کارش کلیر کنیم از مموری لیک برنامه جلوگیری میکنه
        return() => clearInterval(interval)
    },[counter])


  return (
    <span class="landing-status__count">{counter}</span>

  )
}
