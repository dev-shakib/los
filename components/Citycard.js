import Image from 'next/image'

const Citycard = ({imgUrl,cityName,link}) => {
  return (
    
        <div className="los">
              <div className='left-images'>
              <Image width="100px"
      height="60px" src={imgUrl} alt="Nature" className="responsive " id="left-images"/>
              </div>
                 
                <a href={link}><p className="check-wp">{cityName}</p>
                <div className='left-image'>
                <Image width="26px"
      height="16px" src="/images/6.png" alt="Nature" className="responsive" id="left-image"/>
      
                </div>
                </a>
                
            </div>
    
  )
}

export default Citycard