import Image from "next/image";
import loader from '@/app/assets/loader.gif'

const Loading = () => {
    return ( 
    <div className="flex justify-center items-center h-96 w-auto">
        <Image src={loader} height={150} width={150} alt="Loading..." />
    </div> );
}
 
export default Loading;