import React, { useState } from 'react'
import './qrcode.css'
import Button from '@mui/material/Button';
import { FaCloudDownloadAlt, FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QrCodeGenerator = () => {
    const [inputData,setInputData] = useState("");
    const [imgUrl,setImgUrl]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputData===""){
            toast.error('Input Field is Empty..!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                });
        }else{
            setImgUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData}`);
        }
    }
    
    const handleDownload = () => {
      if(imgUrl===""){
        toast.error('Input Field is Empty..!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
      }else{
        const anchor = document.createElement('a');
        anchor.href = imgUrl;
        anchor.download = inputData;
        anchor.click();
      }
       
    };
    const copyImgToClipboard = async ()=> {
      if(imgUrl===""){
         toast.error('Input Field is Empty..!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });
      }else{
        const URL = imgUrl;
        try {
            console.log("..");
            const copiedImage = await fetch(URL)
            const blobData = await copiedImage.blob()
            const clipboardItemInput = new ClipboardItem({'image/png' : blobData})
            navigator.clipboard.write([clipboardItemInput])

            toast.success('Image Copied to Clipboard..!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
              });

        } catch(e) {
            console.log(e)
        }
      }
    
  }
  return (
    <div id='qr-outer'>
        <ToastContainer />
        <div id='Title'>
          QR CODE GENERATOR
        </div>
      <div id='welcomebox'>
          <p>Welcome to our QR Code generator tool ! Easily create QR codes for any text or 
            URL with just a few clicks. Simply enter your data in the text box below and instantly 
            generate a QR code that you can download or copy to share..!</p>
      </div>
      <div id='qr-generator-main'>
        <div id='form'>
            <p>Enter text / link here</p>
           <input type='text' id='form-input' onChange={e=>setInputData(e.target.value)} value={inputData} placeholder='Enter Here..!'/>
           <br/>
           <div id='buttons'>
               <Button variant="contained" color='success' onClick={(e)=>handleSubmit(e)}>Submit</Button>
           </div>
           <div id='icons-row'>
               <div>
               <FaCopy  onClick={()=>copyImgToClipboard()}/><br/>
                Copy
               </div>
                <div>
                 <FaCloudDownloadAlt  onClick={()=>handleDownload()}  /><br/>
                  Download
                </div>
            </div>
        </div>
        <div id='qr'>
            {imgUrl?
              <img src={imgUrl}/>
                :
                "Your QR will be shown here"
            }
                 
        </div>
        
      </div>
    </div>
  )
}

export default QrCodeGenerator
