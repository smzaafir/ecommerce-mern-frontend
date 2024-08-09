import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { AiOutlineDashboard, AiOutlineBgColors, AiOutlinePicRight, AiOutlinePicLeft } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { SiBrandfolder } from "react-icons/si";
import { FaClipboardList, FaBlogger } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { IoNotifications } from "react-icons/io5";
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-4 text-center py-3 mb-0'>
            <span className='sm-logo'>DBS </span>
            <span className='lg-logo'>Project</span>
          </h2>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={({ key }) => {
            if (key === 'signout') {
              // Add signout logic here
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <CiUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <CiShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'add-product',
                  icon: <CiShoppingCart className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'list-product',
                  icon: <CiShoppingCart className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color List',
                },
              ],
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBlogger className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'add-blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBlogger className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBlogger className='fs-4' />,
                  label: 'Blog Category List',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoNotifications className='fs-5' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                <img
                  width={32}
                  height={32}
                  src='https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg'
                  alt=''
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                className="btn btn-secondary dropdown-toggle"
              >
                <h5 className='mb-0'>Zaafir</h5>
                <p className='mb-0'>syedmuhammadzaafir@gmail.com</p>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className='py-2'>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    to="#"
                    style={{ height: "auto", lineHeight: "20px" }}
                  >
                   View Profile
                  </Link>
                </li>
                <li className='py-2'>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    to="#"
                    style={{ height: "auto", lineHeight: "20px" }}
                  >
                    Signout
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <main>
            <Outlet />
          </main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
