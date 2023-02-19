import { TiTick } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
const Alert = ({type,message}) => {
    if(type =='success'){
        return (
            <>
            <div className=" flex items-center text-xl">
                <TiTick ></TiTick>
                {`${message}`}
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className=" flex items-center text-xl">
                    <ImCross ></ImCross>
                    {`${message}`}
                </div>
            </>
        )
    }
  
}

export default Alert