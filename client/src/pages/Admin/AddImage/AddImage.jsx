import React,{useState,useCallback,useRef} from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styles from './AddImage.module.scss'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from '../../../axios'
import {useNavigate} from 'react-router-dom'


export const AddImage = () => {
    const inputRef=useRef(null)
    const [isLoading,setLoading]=useState(false)
    const [imageUrl,setImageUrl]=useState()
    const [categoryAZ,setCategoryAZ]=useState();
    const [categoryEN,setCategoryEN]=useState();
    const [categoryRU,setCategoryRU]=useState();

    const [descriptionAZ, setDescriptionAZ] = useState('');
    const [descriptionEN, setDescriptionEN] = useState('');
    const [descriptionRU, setDescriptionRU] = useState('');
    const navigate=useNavigate()
    const handleChangeFile = async(event) => {
     try {
         const formData=new FormData()
         const file=event.target.files[0]
         formData.append('image',file);
         const {data} =await axios.post('/upload',formData)
         setImageUrl(data.url)
         console.log(data)
     }
     catch (err){
    console.warn(err)
         alert('Ошибка при загрузке файла')
     }

    };

    const onClickRemoveImage = () => {
        setImageUrl('')
    };

    const onChangeRU = React.useCallback((value) => {
        setDescriptionRU(descriptionRU);

    }, []);
    const onChangeEN= React.useCallback((value) => {
        setDescriptionEN(descriptionEN);

    }, []);
    const onChangeAZ= React.useCallback((value) => {
        setCategoryAZ(descriptionAZ);

    }, []);


    const onSubmit=async ()=>{
        try {
            setLoading(true)
            const {data}=await axios.post('/gallery',fields);
            const id=data._id
            console.log(data)
            navigate('/gallery')
        }
        catch (e) {
            console.log(categoryEN)
        console.log(e.message)
        }
    }
    const fields={
        imageUrl,
        categoryAZ,
        categoryRU,
        categoryEN,
        descriptionEN,
        descriptionRU,
        descriptionAZ
    }
    console.log('categoryEn',categoryEN)
    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: '200px',
            autofocus: true,
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        [],
    );

    return (
        <Paper style={{ padding: 30 }}>
            <Button
                onClick={()=>
            inputRef.current.click()
            }
                variant="outlined" size="large">
                Загрузить превью
            </Button>
            <input ref={inputRef} type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <>
                    <Button variant="contained" color="error" onClick={onClickRemoveImage}>
                        Удалить
                    </Button>
                    <img className={styles.image} src={`http://localhost:5000${imageUrl}`} alt="Uploaded" />

                </>
           )}

            <br />
            <br />
            <TextField classes={{ root: styles.tags }}
                       value={categoryAZ}
                       onChange={(e)=>setCategoryAZ(e.target.value)}
                       variant="standard" placeholder="Категория (AZ)" fullWidth />
            <TextField classes={{ root: styles.tags }}
                       value={categoryEN}
                       onChange={(e)=>setCategoryEN(e.target.value)}
                       variant="standard" placeholder="Категория (EN)" fullWidth />
            <TextField classes={{ root: styles.tags }}
                       value={categoryRU} onChange={(e)=>setCategoryRU(e.target.value)}
                       variant="standard" placeholder="Категория (RU)" fullWidth />
            <SimpleMDE className={styles.editor} value={descriptionAZ} placeholder='Mətni daxil edin' onChange={onChangeAZ} options={options} />
            <SimpleMDE className={styles.editor} value={descriptionEN} placeholder='Enter the text' onChange={onChangeEN} options={options} />
            <SimpleMDE className={styles.editor} value={descriptionRU} placeholder='Введите текст' onChange={onChangeRU} options={options} />
            <div className={styles.buttons}>
                <Button onClick={onSubmit} size="large" variant="contained">
                    Опубликовать
                </Button>
                <a href="/">
                    <Button size="large">Отмена</Button>
                </a>
            </div>
        </Paper>
    );
};