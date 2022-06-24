import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './PhotosList.scss';
import CloseIcon from '@mui/icons-material/Close';


function PhotosList() {
    const [photos, setPhotos] = useState([]);
    const [tags, setTags] = useState([]);
    //state retain all tags the user chooses them for the clicked photo
    const [photoTags, setPhotoTags] = useState(Array<String>);
    //states retain specific information for the clicked photo
    const [url, setUrl] = useState("");
    const [id, setId] = useState(0);
    //
    //for Dialog
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);

    //Each time clicked on certain photo, 
    //it will be updated the id, photoTags and url states 
    //and the popup will opened to choose the tags for this photo
    const handleClick = (photo: any) => {
        getPhotoTags(photo.id);
        setId(photo.id);
        setUrl(photo.url);
        setOpen(true);
    };

    //close the popup 
    const handleClose = () => {
        setOpen(false);
        setPhotoTags([]);
    };

    useEffect(() => {
        getPhotos();
        getTags();
    },[photoTags]);

    //get all tags from photos state by the photo id
    //and then update the photoTags state
    function getPhotoTags(id: any) {
        let photoInfo:any = photos[id-1];
        let tags_ = photoInfo.tags;
        setPhotoTags(tags_);
    }

    //get all the saved photos in db.json
    async function getPhotos() {
        try {
            axios.get('http://localhost:4000/images').then(response => {
                const data = response.data;
                setPhotos(data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    //get all the saved tags in db.json
    async function getTags() {
        try {
            axios.get('http://localhost:4000/tags').then(response => {
                const data = response.data;
                setTags(data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Each time a user selects a tag for a photo, that tag will be added to photoTags state
    function handleAddTag(tagName: any) {
        //add a tag that not assigned for this photo
        if (!photoTags.includes(tagName)) {
            //console.log("yes2");
            setPhotoTags([...photoTags, tagName]);
            //console.log(photoTags);
        }
        let photoInfo:any = photos[id-1];
        let tags_ = photoInfo.tags;

        //remove a tag that assigned for this photo
        if(photoTags.includes(tagName) && !tags_.includes(tagName)){
            //console.log("yes1");
            let newTags = photoTags.filter((tag:any) => {
                if(tag != tagName){
                    return tag;
                }
            });
            setPhotoTags(newTags);
        }
    }

    //Update both tables after selecting the tag for a particular photo
    function handleApply() {
        tags.map((tag: any) => {
            if (photoTags.includes(tag.name) && !tag.photos.includes(url)) {
                try {
                    axios.patch(`http://localhost:4000/tags/${tag.id}`, { 'photos': [...tag.photos, url] });
                    //console.log(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        })
        try {
            axios.patch(`http://localhost:4000/images/${id}`, { 'tags': photoTags });
            //console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='PhotosList'>
            {photos.map((photo: any, index: number) => {
                return (
                    <div key={index} className='photo'>
                        <img src={photo.url} alt="hi"
                            onClick={(ev: any) => handleClick(photo)} />
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogContent style={{ fontStyle: 'italic'}}>
                                <CloseIcon sx={{'border': '0px solid black'}} onClick={handleClose}/>
                                <DialogTitle id="responsive-dialog-title">
                                    {"Choose tags for this photo..."}
                                </DialogTitle>
                                <img src={url} alt="" style={{width: '50%', height: '100px', marginLeft: 'auto', marginRight:'auto', display: 'block'}}/>
                                <br />
                                <br />
                                <Box sx={{ width: 1 }}>
                                    <Box className='grid' display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                                        {tags.map((tag: any, index: number) => {
                                            return (
                                                <Box className='tag' key={index} 
                                                    style={{ 'backgroundColor': photoTags.includes(tag.name) ? `${'#' + tag.color}` : 'white', 'border': `2px dotted ${'#' + tag.color}`,
                                                             textAlign: 'center', fontSize: '0.8rem', height: '20px', borderRadius: '10px' }}
                                                    onClick={() => handleAddTag(tag.name)}>
                                                    {tag.name}
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </Box>
                                <br />
                                <DialogActions>
                                    <button className='apply' onClick={() => { handleClose(); handleApply() }} 
                                        style={{width:'90px', height:'35px', margin:'auto', backgroundColor: '#d7e8fb', border: 'none'
                                                , borderRadius:'15px' , fontStyle: 'italic', fontWeight: 'bold'}}>
                                        Apply
                                    </button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                );
            })}
        </div>
    );
}

export default PhotosList;