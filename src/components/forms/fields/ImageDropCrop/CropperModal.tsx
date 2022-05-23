import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";

import "cropperjs/dist/cropper.css";
import styles from "./CropModal.module.scss";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setIsEditedById } from "@/features/eventCreation/eventCreationSlice";
import { getCropperModal, updateCroppedImage, updateCropperModal } from '@/features/eventCreation/eventPublicPageSlice';

import CloseIcon from '~/icons/blue/close-modal.svg';
import CropIcon from '~/icons/blue/crop.svg';

export const CropperModal = () => {

  const dispatch = useAppDispatch();
  const cropperModal = useAppSelector(getCropperModal);

  const [image, setImage] = useState('');
  // TODO: test if using cropData is more optimal in saving cropped image to store 
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState<any>();

  useEffect(() => {
    setImage(cropperModal.src);
  }, [cropperModal]);

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = async () => {
    if (typeof cropper !== "undefined") {
      const src = cropper.getCroppedCanvas().toDataURL('image/jpeg');
      // convert bas64 to blob
      const base64Response = await fetch(src);
      const blob = await base64Response.blob();
      const imgUrl = URL.createObjectURL(blob);
      saveImage(imgUrl);
      dispatch(setIsEditedById(3));
    }
  };

  const cropperRef = useRef<HTMLImageElement>(null);

  const onCrop = () => {
    // TODO: test if onCrop event is more optimal
    // const imageElement: any = cropperRef?.current;
    // const cropper: any = imageElement?.cropper;
    // const imgData = cropper.getCroppedCanvas().toDataURL();
    // console.log('on crop');
  };

  const cropEnd = () => {
    // TODO: test if onCrop event is more optimal
    // console.log('on cropEnd');
  }

  const saveImage = (val: string) => {
    dispatch(updateCroppedImage({ id: cropperModal.imgId, src: val }));
    handleCancel();
  }

  const handleCancel = () => {
    dispatch(updateCropperModal({ imgId: 0, src: '', isOpen: false, isReCrop: false }));
  }

  return (
    <div className={`${styles.CropperModal} ${cropperModal.src ? styles[`active`] : styles[`inactive`]}`}>

      <div className={`cropper-stage ${cropperModal.isReCrop && 're-crop'}`}>
        <div className="cropper-buttons" >
          <button onClick={getCropData} className='save'>
            <CropIcon />
            <h3>Crop Main Event Image</h3>
          </button>
          <button onClick={getCropData} className='close'>
            <CloseIcon />
          </button>
        </div>
        <Cropper
          // style={{ height: 400, width: "100%" }}
          zoomTo={0}
          initialAspectRatio={2.66}
          preview=".img-preview"
          src={image}
          viewMode={2}
          dragMode='move'
          movable={true}
          cropBoxMovable={true}
          cropBoxResizable={false}
          minCropBoxHeight={80}
          minCropBoxWidth={10}
          background={true}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
            // console.log('onInitialized...');
          }}
          guides={false}
          crop={onCrop}
          ref={cropperRef}
          style={{ 'borderRadius': '50%' }}
        />

      </div>

    </div>



  );
};

export default CropperModal;
