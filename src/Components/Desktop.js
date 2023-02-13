import React,{useState} from 'react'
import image from '../Assets/image01.svg'
import icon from '../Assets/music-icon.svg'
import background from '../Assets/pattern-background-desktop.svg'
import bgPattern from '../Assets/pattern-background-mobile.svg'

const Desktop = () => {
   const [plan,setPlan] = useState('Anual Plan')
   const [figure,setFigure] = useState(`$59.99/year`)
   const [changing,setChanging] = useState(`Change`)
   
   const change = ()=>{
        setPlan('Monthly Plan')
        setFigure(`$5.99/month`)
        if(plan == 'Monthly Plan' ){
            setPlan('Anual Plan')
            setFigure(`$59.99/year`)
        }
        return
   }
   const cancel = () =>{
    setPlan('')
    setFigure('')
    setChanging('')
   }

  return (
    <div className='mainBody'>
        <img src={background} alt="Bg-pattern" className='Bg-pattern' />
        <img src={bgPattern} alt="BgMobile" className='Bg-pattern-mobile'/>
        <div className='desktop-contents'>
            <img src={image} alt="" className='bg-image'/>
            <h2>Order Summary</h2>
            <p className='text'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like</p>
            <div className='plans'>
                <img src={icon} alt="" />
                <div className='anual-content'>
                    <p className='anual-plan Plan'>{plan}</p>
                    <p className='anual-figure Figure'>{figure}</p>
                </div>
                <a onClick={change}  href="#">{changing}</a>
            </div>
            <button className='btn'><a target={'_blank'} href="../Components/Payment.js">Proceed to Payment</a></button>
            <h5 onClick={cancel} className='cancel-order'>Cancel Order</h5>
        </div>
    </div>
  )
}

export default Desktop