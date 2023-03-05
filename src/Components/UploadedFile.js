import React, { useEffect } from 'react'
import $ from "jquery"
import "./UploadedFileSt.css"
import { upload } from '@testing-library/user-event/dist/upload';
export default function UploadedFile() {
    /*this is the root that carry the variables of css */
    const root = document.documentElement,
    /*this functions of turning the color of the upload icon to refer to activiting  */
    turnToBlue = () => $(".upload-icon img").attr("src" , "https://static.filestackapi.com/picker/1.23.0/assets/images/icon-add-files-blue.svg"),
    turnToGray = () => $(".upload-icon img").attr("src" , "https://static.filestackapi.com/picker/1.23.0/assets/images/icon-add-files-grey.svg"),
    /*this  functions to activite the button that is clicked*/
    activateLK = () => {
        $(".btn").removeClass("active-btn")
        $(".internet-btn").addClass("active-btn")
        $(".FromLocalmachine").removeClass("active-box")
        $(".FromInternet").addClass("active-box")
    },
    activateLM = (e) => {
        console.log(e);
        $(".btn").removeClass("active-btn")
        $(".localmachine-btn").addClass("active-btn")
        $(".FromLocalmachine").addClass("active-box")
        $(".FromInternet").removeClass("active-box")
    };

  return (
    <div className='Uploading-Box'>
        {/*this is the input field that is not displayed in the page but it still affect on*/}
        <form action="#">
            <input type="file" name='file' accept="image/jpeg, image/gif, image/heic, image/heif, image/tiff, image/webp" onChange="" multiple="" id="uploadfile" hidden/>  
        </form>
        {/* this box to upload files from the local machine or from the internet*/}
        <div className='first-row'>
            <div className='options'>
                {/*this options to upload the image either from the local-machine or the internet */}
                <button className='localmachine-btn btn active-btn' onClick={activateLM} title="Local Machine">
                        <i className="fa-solid fa-display"></i>
                </button>
                <button className='internet-btn btn' onClick={activateLK} title="Link (URL) ">
                    <span>
                        <i className="fa-solid fa-globe"></i>
                    </span>
                </button>
            </div>
            <div className='upload-box' onMouseOver={turnToBlue} onMouseLeave={turnToGray}>
                {/* */}
                <div className='FromLocalmachine active-box' onClick="">
                    <div className='upload-icon'>
                        <img src='https://static.filestackapi.com/picker/1.23.0/assets/images/icon-add-files-grey.svg'/>
                    </div>
                    <div className='upload-text'>
                        <h1>Upload your file</h1>
                        <span>or darg and drop the file</span>
                    </div>
                </div>
                {/* */}
                <div className='FromInternet'>
                    <div className='InputField'>
                        <button className='upload-btn'>
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </button>
                        <input placeholder='https://...'/>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='UploadedImgs-Area'>
            {/*this area for the uploaded images contains the image itself, its size, and its name*/}
            <div className='row upload-img'>
                <div className='col-2 img-src'>
                    <img alt='Image Icon'src='https://media.istockphoto.com/id/1222357475/vector/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?s=170667a&w=0&k=20&c=IyNlM1yfvw2UAitPPF7hIBBsr4IZjZJUDS1C5YgmiwA='/>
                </div>
                <div className='col-8 img-info'>
                    <span id="img-name">data:image/jpeg</span>
                    <span id="img-size">94 KB</span>
                </div>
                <div className='col-2 upload-controller'>
                    <div >
                        <span className='' onClick="">
                            <button className='btn btn-primary'>upload</button>
                        </span>
                    </div>
                    <div className='stop|done'>
                        <span className='close-btn'>
                            <i className="fa-solid fa-x"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
