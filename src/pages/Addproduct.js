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

const AddProduct = () => {
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      title,
      price,
      brand,
      category,
      color,
      description: desc, // Quill already returns HTML content
    };
    console.log(productData);
    // Add your submit logic here
  };

  return (
    <div>
      <h3 className='mb-4 title'>Add Product</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <CustomInput
            type='text'
            label='Enter Product Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <div className='mb-3'>
            <ReactQuill theme="snow" value={desc} onChange={setDesc} />
          </div>
          
          <CustomInput
            type='number'
            label='Enter Product Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          
          <select
            name='brand'
            className='form-control py-3 mb-3'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select Brand</option>
            {/* Add more options here */}
          </select>

          <select
            name='category'
            className='form-control py-3 mb-3'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {/* Add more options here */}
          </select>

          <select
            name='color'
            className='form-control py-3 mb-3'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Select Color</option>
            {/* Add more options here */}
          </select>

          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
            </p>
          </Dragger>
          
          <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
