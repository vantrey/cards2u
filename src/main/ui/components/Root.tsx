import React, { DetailedHTMLProps, VideoHTMLAttributes } from 'react';
import styles from './Root.module.css'

type RootTypes =  {
    autoplay: boolean
    loop: boolean
    muted: boolean
    playsinline: boolean
} &  DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>



const Root:React.FC = (): any => {
    return (
        <div className={styles.root}>
            {/*<div className="element-with-video-bg jquery-background-video-wrapper">*/}
            {/*    <video className="my-background-video jquery-background-video" loop autoplay muted playsinline*/}
            {/*           poster="path/to/your/poster.jpg">*/}
            {/*        <source src="path/to/video.mp4" type="video/mp4">*/}
            {/*        /!*<source src="path/to/video.webm" type="video/webm">*!/*/}
            {/*        /!*<source src="path/to/video.ogv" type="video/ogg">*!/*/}
            {/*    </video>*/}
            {/*</div>*/}
        </div>
)
}
export default Root;