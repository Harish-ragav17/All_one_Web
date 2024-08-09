import React, { useState } from 'react'
import './shareable.css'
import { Button } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCopy } from 'react-icons/fa';
import { getSharableContent, uploadShareableText } from '../../../ApiCalls/api';
import ClipboardJS from 'clipboard';

const Shareable = () => {
    const [text,setText]=useState("");
    const [code,setCode]=useState("");
    const [uploaded,setUploaded]=useState(false);

    const [getText,setGetText]= useState("");
    const [getCode,setGetCode]= useState("");
    
    const getSharableText=()=>{
      if(!isGetEmpty()){
         getSharableContent(getCode,setGetText,errorGetting);
      }
    }
    const generateCode=async()=>{
        if(!isEmpty()){
            let ch='A';
            let n=ch+Math.floor(Math.random()* (26 - 1 + 1)) + 1 +ch+Math.floor(Math.random()* (26 - 1 + 1)) + 1;
           try{
            await uploadShareableText(n,text,setUploaded,doneUploading,errorUploading);
           }catch(e){
            console.log(e);
           }finally{
            setCode(n);
           }
                
        }

    }
  const doneUploading=()=>{
 
       toast.success('Code Genrated Sucessfully..!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          })   
        setUploaded(false);
     }     
     const errorUploading=()=>{
 
      toast.error('Failed to Generate, Try Again Later..!', {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light"
         })   
       setUploaded(false);
    }  
    const errorGetting=(d)=>{
 
      toast.error(d, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light"
         })   
       setUploaded(false);
    }   
    const isGetEmpty=()=>{
      if(getCode == ""){
         toast.error('Text Input is Empty..!', {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light"
             });
        return true;
      }else{
         return false;
      }
  }  
    
    const isEmpty=()=>{
         if(text===""){
            toast.error('Text Input is Empty..!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
                });
           return true;
         }else{
            return false;
         }
     }

     

  return (
    <div>
       <ToastContainer />
      <div id='shareable-outer'>
        <div id='shareable-top'> 
             <h2>Share-able</h2>
        </div>
        <div id='shareable-intro'>
            <p>Introducing Share-able: a streamlined platform designed exclusively for sharing and collaborating on text data. Simplify document exchange, enhance teamwork, and boost productivity effortlessly. Experience the future of text data sharing with Share-able, where seamless collaboration meets unparalleled efficiency.</p>
        </div>
        <div id='shareable-selector'>
            <a href='#shareable-share-container'><div>Create Sharable Code</div></a>
            <a href='#shareable-view'><div>View Sharable Content</div></a>
        </div>
        <div id='shareable-share-container'>
            <div id='shareable-share-container-form'>
               <h2>Click to Generate Code</h2>
               {(!uploaded)?
                <Button variant="contained" color='success' onClick={()=>generateCode()} >Generate</Button>
                :
                  <div id='loader'> 
                  </div>
              }
               
               <br/>
               <br/>
               <h3>Your generated code will be shown below </h3>
               <br/>
               <input type='text' placeholder='Your code..!' value={code} disabled={true}/>
               <br/>
               <div id='shareable-share-container-form-share'>
               <FaCopy id='shareable-share-container-form-share-btn' onClick={() => 
               {
                if(code===""){
                    toast.error('Text Input is Empty..!', {
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
                    navigator.clipboard.writeText(code)
                    toast.success('Code Copied..!', {
                       position: "top-right",
                       autoClose: 5000,
                       hideProgressBar: false,
                       closeOnClick: true,
                       pauseOnHover: true,
                       draggable: true,
                       progress: undefined,
                       theme: "light"
                       });   
                }
                    }}/>
               </div>
            </div>
            <div id='shareable-share-container-data'>
               <textarea placeholder='Enter the text here which you want to share..!' onChange={(e)=>setText(e.target.value)} value={text}/>
            </div>
        </div>
        <div id='shareable-view'>
          <div id='sharable-token-form'>
               <h3>Enter Your Sharable Code: </h3>
               <input type='text' placeholder='Code' value={getCode} onChange={(e)=>setGetCode(e.target.value)}/><br/>
               <Button variant="contained" color='success' onClick={(e)=>getSharableText()}>Enter</Button>
               <h3 id='sharable-token-form-info'>
                You Can Get Data Only With Code<br/><br/>
                If You Want to Share You Can Try With Above..!
               </h3>
          </div>
          <div id='sharable-view-content'>
             <textarea disabled={true} value={getText}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shareable
