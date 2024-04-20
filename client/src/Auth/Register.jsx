import React from 'react'; 
import { Alert, Button, Card, Flex, Form, Input , Spin, Typography} from 'antd'; 
import { Link } from 'react-router-dom'; 
import  signUp from "../assets/signup.svg"
import useSignUp from '../hooks/userSignUp';


const Register = () => {

    const {loading, error, registerUser } = useSignUp();
    
    const handleRegister = (values) => { 
        registerUser(values);
    }

  return (
    <Card className='form-container' >
        <Flex gap="large" align='center'> 
            {/* form */}

            <Flex vertical flex={1}> 
                <Typography.Title level={3} strong className='title'>
                    Create an account
                </Typography.Title>
                <Typography.Text type='secondary' strong className='slogan'> 
                    Join for exclusive access! 
                </Typography.Text>

                <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>

                    {/* username */}
                    <Form.Item label="Full Name" name='name' rules={[{
                        required: true,
                        message: 'Enter you name'
                    }]}> 
                        <Input size="large" placeholder="Enter your full name!" />    
                    </Form.Item>

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

                    {/* password 2 */}
                    <Form.Item label="password" name='passwordConfirm' rules={[
                        {
                        required: true,
                        message: 'Re-type your password'
                    }
                ]}> 
                        <Input.Password size="large" placeholder="Re-type pssword!" />    
                    </Form.Item>

                {error && (<Alert description={error} type='error' showIcon closable className="alert"  / >)}
                    {/* submit btn */}
                    <Form.Item> 
                   
                        <Button  type={`${loading ? '' : 'primary'}`}  htmlType='submit' size='large' className='btn'> 
                        {loading ? <Spin /> : 'Create Account'}
                        
                        </Button>
                    </Form.Item>

                    <Form.Item> 
                        <Link to='/login'>
                        <Button size='large'  className='btn'> Sign In </Button>
                        </Link>
                    </Form.Item>
                </Form>

            </Flex>
            
            {/* image */}
            <Flex flex={1}> 
                <img src={signUp} className="signup-img" />
            </Flex>
        </Flex>

    </Card>
  )
}

export default Register