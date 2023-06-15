import { useState, useEffect } from 'react';
import './App.css';
import { useGetPokemonByNameQuery, useGetUpdateMutation } from "./redux/api/authApi"
import { Button, Checkbox, Form, Input } from 'antd';


function App() {
  // if one parameter we can give directly, second parameter is config api by rtk query
  
  const { data: mainData } = useGetPokemonByNameQuery({
    id: 1,
    body: 2
  }, {
    skip: false
  });

  const [loginApi] = useGetUpdateMutation();
  const [apiData, setApiData] = useState()


  useEffect(() => {
    if (mainData !== undefined) {
      setApiData(mainData.data)
    }
  }, [mainData])

  console.log(apiData, "mainData");
  const onFinish = async (values) => {
    console.log('Success:', values);
    try {
      // if we not give unwarp it does not no what is error and success
      const response = await loginApi(values).unwrap()
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }

  };
  return (

    <div >


      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
