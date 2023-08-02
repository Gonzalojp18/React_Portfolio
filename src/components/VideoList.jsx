
import './VideoList.css'


const VideoList = ({title, children}) => {
    return(
    <div className='containerVideos'>
        <h2>{title}</h2>
        {children || <p>No hay video</p>}
    </div>
    )
};



export default VideoList;
