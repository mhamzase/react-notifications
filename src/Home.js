import React from "react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { Button } from 'react-bootstrap';


function Home() {
  function handleSuccessNotification() {
    store.addNotification({
      title: "Success !",
      message: "Your account created successfully",
      type: "success",
      insert: "top", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon:true
      },
      width: 400,
    });
  };


  function handleWarningNotification() {
    store.addNotification({
      title: "Incorrect Inputs !",
      message: "Some inputs are incorrect please correct them",
      type: "warning",
      insert: "top", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon:true
      },
      width: 400,
    });
  };




  function handleDangerNotification() {
    store.addNotification({
      title: "Email !",
      message: "Invalid Email",
      type: "danger",
      insert: "top", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon:true
      },
      width: 400,
    });
  };




  function handleInfoNotification() {
    store.addNotification({
      title: "Import Information !",
      message: "Keep password secure ",
      type: "info",
      insert: "top", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon:true
      },
      width: 400,
    });
  };




  function handlePrimaryNotification() {
    store.addNotification({
      title: "That Good Notification !",
      message: "This is a simple notification",
      type: "default",
      insert: "top", // 'default', 'success', 'info', 'warning'
      container: "top-right", // where to position the notifications
      animationIn: ["animate__animated", "animate__fadeIn"], // animate.css classes that's applied
      animationOut: ["animate__animated", "animate__fadeOut"], // animate.css classes that's applied
      dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon:true
      },
      width: 400,
    });
  };

  
  return (
    <div className="container">
      <h3 className="text-light">React Notification Library (React-Notifications-Component)</h3>
      <Button variant="primary" onClick={() => handlePrimaryNotification()}>Primary</Button><br/><br/>
      <Button variant="success" onClick={() => handleSuccessNotification()}>Success</Button><br/><br/>
      <Button variant="warning" onClick={() => handleWarningNotification()}>Warning</Button><br/><br/>
      <Button variant="danger" onClick={() => handleDangerNotification()} >Danger</Button><br/><br/>
      <Button variant="info" onClick={() => handleInfoNotification()}>Info</Button><br/><br/>
    </div>
  );
}

export default Home;
