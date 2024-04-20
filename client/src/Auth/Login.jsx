import React from 'react'; 
import { Alert, Button, Card, Flex, Form, Input , Spin, Typography} from 'antd'; 
import { Link } from 'react-router-dom'; 
import  signin from "../assets/signin.svg"
import userLogin from '../hooks/userLogin';


const Login = () => {
    const {loading, error, logUserIn} = userLogin(); 
    
    const handleLogin = (values) => { 
        logUserIn(values);
    }
  return (
    <Card className='form-container' >

        <Flex gap="large" align='center'> 

            {/* image */}
            <Flex flex={1}> 
                <img src={signin} className="signup-img" />
            </Flex>

            {/* form */}

            <Flex vertical flex={1}> 
                <Typography.Title level={3} strong className='title'>
                  Log In
                </Typography.Title>
                <Typography.Text type='secondary' strong className='slogan'> 
                    Unlock your dreams. 
                </Typography.Text>

                <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>

                    

                    {/* email  */}
                    <Form.Item label="Email" name='email' rules={[
                        {
                        required: true,
                        message: 'Enter your email'
                        }, 
                        { 
                            type: 'email', 
                            message: "invalid Email"
                        }
                    ]}> 
                        <Input size="large" placeholder="Enter your email!" />    
                    </Form.Item>



                    {/* password */}
                    <Form.Item label="password" name='password' rules={[
                        {
                        required: true,
                        message: 'Enter your password'
                        }
                    ]}> 
                        <Input.Password size="large" placeholder="Enter your password!" />    
                    </Form.Item>



                {error && (<Alert description={error} type='error' showIcon closable className="alert"  / >)}
                    {/* submit btn */}
                    <Form.Item> 
                    
                        <Button  type={`${loading ? '' : 'primary'}`}  htmlType='submit' size='large' className='btn'> 
                        {loading ? <Spin /> : 'Login'}
                        
                        </Button>
                    </Form.Item>

                    <Form.Item> 
                        <Link to='/'>
                        <Button size='large'  className='btn'> Sign up </Button>
                        </Link>
                    </Form.Item>


                </Form>

            </Flex>
    
        </Flex>

    </Card>
  )
}

export default Login