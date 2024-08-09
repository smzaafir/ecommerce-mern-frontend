import React, { useState } from 'react';
import CustomInput from './CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const uploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Addblog = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      title,
      category,
      description: desc, // No need to convert as Quill already returns HTML
    };
    console.log(blogData);
    // Add your submit logic here
  };

  return (
    <div>
      <h3 className='mb-4 title'>Add Blog</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
          </Dragger>
          <div className='mt-3'>
            <CustomInput
              type='text'
              label='Enter Blog Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <select
            name='category'
            className='form-control py-3 mb-3'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Blog Category</option>
            {/* Add more options here */}
          </select>
          
          <ReactQuill theme="snow" value={desc} onChange={setDesc} />

          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
