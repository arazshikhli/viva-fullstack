import React, {useState} from "react";
import axios from '../../axios'
import { useDispatch,useSelector } from "react-redux";
import {fetchGallery} from '../../redux/slices/gallery'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  Typography  from "@mui/material/Typography";
import { Card,CardMedia,CardContent,CardActions } from "@mui/material";
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
export const GalleryPage=()=>{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    const [lang,setLang]=useState(()=>{
        const saved = localStorage.getItem("i18nextLng");
        // const initialValue = JSON.parse(saved);
        return saved || "";
    })
    console.log(lang)
    console.log(process.env.REACT_APP_SERVER_URL)
    const dispatch=useDispatch()
    const {images}=useSelector(state=>state.images)
    const isImagesLoading=images.status==='loading'
 React.useEffect(()=>{
    dispatch(fetchGallery())



 },[])

    return(
        <Container>
            <Grid container >
            <Grid  xs={6} md={8}>
                <Item>
                {
                    (isImagesLoading? [...Array(5)]:images.items).
                    map((obj,index)=>(isImagesLoading?(<div></div>):
                    (
                    <Card
                    sx={{maxWidth:345}}
                    >
                        <CardMedia
                        sx={{height:140}}
                        image={`${process.env.REACT_APP_SERVER_URL}${obj.imageUrl}`}
                        />
                        <CardContent>
                            <Typography
                            gutterBottom variant="h5" component="div">
                                {
                                    (lang==='ru')?(<div>
                                        <h6>{obj.categoryRU}</h6>
                                        <p>{obj.descriptionRU}</p>
                                    </div>):(
                                        (lang==='az')?(<div>
                                            <h6>{obj.categoryAZ}</h6>
                                            <p>{obj.descriptionAZ}</p>
                                        </div>):(<div>
                                            <h6>{obj.categoryRU}</h6>
                                            <p>{obj.descriptionRU}</p>
                                        </div>)
                                    )
                                }
                            </Typography>

                            {/*<Typography*/}
                            {/*    gutterBottom variant="h5" component="div">*/}
                            {/*    {*/}
                            {/*        (localStorage.getItem('i18nextLng')==='ru')?(<h6>{obj.descriptionRU}</h6>):(*/}
                            {/*            (localStorage.getItem('i18nextLng')==='az')?(<h6>{obj.descriptionAZ}</h6>):(<h6>{obj.descriptionEN}</h6>)*/}
                            {/*        )*/}
                            {/*    }*/}
                            {/*</Typography>*/}
                            </CardContent>
                    </Card>
                    
                   )
                     
                    ))
                }
                </Item>
   
            </Grid>
            </Grid>
    
           
        </Container>
    )
}