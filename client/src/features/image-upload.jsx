import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'



const ImageUpload = () => {

  const [images, setImages] = useState([])
  const maxNumber = 10

  const changeImage = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }


  return(
    <>
      <ImageUploading 
        multiple
        value={ images }
        onChange={ changeImage }
        maxNumber={ maxNumber }
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className='imageUpload-wrapper mt-3'>
            <button
              className='btn btn-primary'
              style={ isDragging ? { color : 'red' } : undefined }
              onClick={ onImageUpload }
              { ...dragProps }
            >
              Upload an Image
            </button>
            { imageList.map(( image, index ) => (
              <>
                <div className='image-item-container'>
                  <div key={ index } className='image-item mt-3'>
                    <img src="{image['data_url']}" alt="" width='200' height='200'/>
                  </div>
                  <div className='image-item-btn-wrapper mt-3'>
                    <button className='btn btn-primary' onClick={() => onImageUpdate(index)}>Update</button>
                    <button className='btn btn-danger' onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              </>
            ))}
          </div>
        )}
      </ImageUploading>
    </>
  )
}

export default ImageUpload;