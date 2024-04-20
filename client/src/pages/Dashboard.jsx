import { Avatar, Button, Card, Flex, Typography } from 'antd'
import React from 'react'
import { useAuth } from '../contexts/AuthContext.jsx'
import {UserOutlined} from '@ant-design/icons'; 
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const { userData, logout} = useAuth(); 
  
  // logout()`

  const handleLogout = async () => { 
    await logout(); 

  }
  return (
    <Card className='dash-card'> 
      <Flex vertical gap='small' align='center'> 
        <Avatar size={150} icon={<UserOutlined />} className='avatar' /> 
        <Typography.Title level={2} strong className='username' > 
        Welcome Back { userData.name }
        </Typography.Title> 
        <Typography.Text level={2} strong > 
        Email: { userData.email}
        </Typography.Text> 
        <Typography.Text level={2} strong > 
        Role: { userData.role }
        </Typography.Text> 
        <Link to='/login'> 
        <Button size='large' type='primary' className='dash-logout-btn'  onClick={handleLogout}> 
      Logout
    </Button>
        </Link>
      </Flex>
    </Card>
  )
}

export default Dashboard