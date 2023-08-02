import './Video.css'

const Video = ({title, description,  duration, uploadDate}) => {

    const second = duration % 60;
    const minutes = Math.floor(duration / 60);
    const formattedSeconds = second.toString().padStart(2, '0');



    return (
        <div className='boxVideo'>
            <h3>{title}</h3>
        <div>
            <span>{minutes}:{formattedSeconds}</span>
            <span>{uploadDate.toLocaleDateString()}</span>
        </div>
        <p>{description}</p>
        </div>
    );
};



export default Video;