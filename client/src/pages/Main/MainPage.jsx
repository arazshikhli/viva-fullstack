import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch,useSelector } from "react-redux";
import {fetchGallery} from '../../redux/slices/gallery'
import {Cobe} from '../../components/Globe'
export const MainPage=()=>{
    console.log(process.env.REACT_APP_SERVER_URL)
    const dispatch=useDispatch()
    const {images}=useSelector(state=>state.images)
    const {t,i18n}=useTranslation()
    const isImagesLoading=images.status==='loading'
    const title=t('adverts.types',{returnObjects:true})
    const myArrays=Object.values(title)
    console.log(myArrays)
  React.useEffect(()=>{
    dispatch(fetchGallery())
  },[])
  
    return (
        <div className="content">
        <Cobe/>
        <div className="gallery_theme">
          {

              (isImagesLoading? [...Array(5)]:images.items).
          map((obj,idx)=>(
            isImagesLoading?(<div></div>):(
              <div className={`gallery_item`}>
              <div className="item_image__cont">
                <img
                src={`${process.env.REACT_APP_SERVER_URL}${obj.imageUrl}`}
                />
              </div>

              <div className="item_description">

                  <p>dsajgfjhsdgfjhsgfjhsdgfjds
                    sdfjhffkjsdhfkdjshfsdhfds
                    bsdhghjlh
                  </p>

              </div>
            </div>
            )
          ))}
        </div>
      </div>
    )
}