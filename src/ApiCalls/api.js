import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_baseurl;

//Share-able feature section starts
const uploadShareableText=async(code,text,setUploaded,doneUploading,errorUploading)=>{
      await axios.post(`/uploadSharable`,{code,text}).then((data)=>{
        if(data.data==="uploaded"){
            setUploaded(true);
            doneUploading();
        }else{
          errorUploading();
        }
      })
}

const getSharableContent=async(getCode,setGetText,errorGetting)=>{
  
  await axios.post(`/getSharable`,{getCode}).then((data)=>{
    if(data.data == "Data Not Found" || data.data == "Error in getting data"){
      errorGetting(data.data);
    }else{
      setGetText(data.data.data);
    }
  })
}
//Share-able feature section end

export {uploadShareableText,getSharableContent};