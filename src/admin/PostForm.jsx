import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const PostForm = () => {
  const apiUrl = 'http://localhost:8000/api';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '' || category.trim() === '' || files.length === 0) {
      setError(true);
      setErrorText('Please fill all fields and upload at least one image');
    } else {
      setError(false);
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);

        for (let i = 0; i < files.length; i++) {
          formData.append(`file${i}`, files[i]);
        }

        const response = await axios.post(`${apiUrl}/posts/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response.data);
        setTitle('');
        setCategory('');
        setDescription('');
        setFiles([]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedTypes = ['image/jpeg', 'image/png'];

    const filteredFiles = selectedFiles.filter((file) => allowedTypes.includes(file.type));

    if (filteredFiles.length !== selectedFiles.length) {
      setError(true);
      setErrorText('Please select only JPEG or PNG files.');
    } else {
      setFiles(selectedFiles);
      setError(false);
      setErrorText('');
    }
  };

  return (
      <div className='container w-100 h-50 pt-5 mt-5 sticky editor'>
      {error && (
        <div className='error_field'>
          <span className='error_text'>{errorText}</span>
        </div>
      )}
        <h1>Admin Form</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className='my-2'>
          <label htmlFor='title'>Title </label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Post title...'
          />
        </div>

        <div className='my-2'>
          <label htmlFor='category'>Category </label>
          <input
            id='category'
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='Post category...'
          />
        </div>

        <div className='my-2'>
          <label htmlFor='description'>Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
          />
        </div>

        <div className='my-2'>
          <label htmlFor='files'>Upload Images</label>
          <input id='files' type='file' multiple onChange={handleFileChange} accept='image/jpeg, image/png' />
        </div>

        <button className='my-2' type='submit' disabled={loading}>
          {loading ? 'Loading...' :
'Submit'}
              </button>
              </form>
              </div>
              );
              };
              
              export default PostForm;