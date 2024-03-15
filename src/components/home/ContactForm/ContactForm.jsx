// contactform.jsx
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessage] = useState("");
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const onFinish = async (values) => {
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_o9airgw";
    const templateId = "template_y517hvw";
    const publicKey = "vMLFO9hxLRqh92bFz";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
      to_name: "Web Wizard",
      message: values.message,
    };

    try {
      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSuccessMessageVisible(true);
    } catch (error) {
      console.error("Error sending email:", error);
      message.error("Failed to send email. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
<<<<<<< HEAD

    <><Helmet>
      <title>Code3Crafters</title>
      <meta
        name="description"
        content=""></meta>
    </Helmet>
    <div className="d-flex flex-column align-items-center">
        <Form
          className="w-50"
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
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please type your name!",
              },
            ]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please type your number!",
              },
            ]}
          >
            <Input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: "Please enter your message!",
              },
            ]}
          >
            <Input.TextArea
              value={messageText}
              onChange={(e) => setMessage(e.target.value)} />
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
        {successMessageVisible && (
          <div style={{ marginTop: "20px" }}>Email sent successfully!</div>
        )}
      // Remove unnecessary closing tags
      // </div></>
=======
    <div className="d-flex flex-column align-items-center">
      <Form
        className="w-50"
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
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please type your name!",
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please type your number!",
            },
          ]}
        >
          <Input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: true,
              message: "Please enter your message!",
            },
          ]}
        >
          <Input.TextArea
            value={messageText}
            onChange={(e) => setMessage(e.target.value)}
          />
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
      {successMessageVisible && (
        <div style={{ marginTop: "20px" }}>Email sent successfully!</div>
      )}
    </div>
>>>>>>> ef234a1e31f3a84829ec0f07518ab90a3cfc81a9
  );
};

export default EmailForm;
