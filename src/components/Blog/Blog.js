import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container text-center my-5 py-5'>
            <h1 className='mb-5'>Q & A</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                        <u>Authentication </u>: Authentication is the process of verifying the identity of a user by obtaining some sort of credentials and using those credentials to verify the users identity. If the credentials are valid, the authorization process starts. Authentication process always proceeds to Authorization process.<br />

                        <u>Authorization</u>:Authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <strong><u>Firebase:</u></strong> Firebase is Googles mobile application development platform. It has a lot of different products that cover much of whats needed to build a mobile app. It would take a lot of time to describe the complete set of situations where Firebase can be helpful, so I suggest you start reading the web site to discover what all it can do.

                        The bottom line is that there are a lot of things that you probably dont want to manage yourself, such as building and maintaining a scalable database and file store, (serverless) backend code, notifications, analytics, and more. Dont build all this yourself, just use Firebase.
                        <br />
                        <strong><u>Authentication:</u></strong>
                        Single-Factor/Primary Authentication. 
                        Two-Factor Authentication (2FA)
                        Single Sign-On (SSO) 
                        Multi-Factor Authentication (MFA) 
                        Password Authentication Protocol (PAP)
                        Challenge Handshake Authentication Protocol (CHAP) 
                        Extensible Authentication Protocol (EAP)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                    <strong><u>Firebase Alternatives:</u></strong>
                    1.Kuzzle
                    2.Pubnub  (Real-time APIs and Global Messaging)
                    3.Deployd  Simple core library, with a modular API for your application
                    4.NHost :Accelerates development and provides full control
                    5.Amplify JS :Open-source Javascript framework
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;