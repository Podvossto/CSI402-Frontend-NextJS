"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AlertBox from "./components/alertBox";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [alertColor, setAlertColor] = useState("red"); // เพิ่ม state สำหรับ color
  const router = useRouter();

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setAlert("ผู้ใช้นี้มีสิทธิการใช้งาน!");
      setAlertColor("green");
    } else {
      setAlert("ผู้ใช้นี้ไม่มีสิทธิการใช้งาน!");
      setAlertColor("red"); 
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
      }}
    >
      <div style={{ position: "absolute", bottom: "200px" }}>
        <p>username : admin </p>
        <p>password : 1234</p>
      </div>
      <div style={{ position: "absolute", bottom: "100px" }}>
        <p style={{ fontWeight: "bold" }}>จัดทำโดย : 65051645 พิชยะ หุตะจูฑะ</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "24rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          ตรวจสอบสิทธิ์การใช้งาน
        </h2>
        {alert && <AlertBox message={alert} color={alertColor} />}{" "}
        <input
          type="text"
          placeholder="กรอกชื่อผู้ใช้"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setAlert("");
          }}
          style={{
            width: "100%",
            padding: "8px 10px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            marginBottom: "1rem",
            outline: "none",
          }}
          required
        />
        <input
          type="password"
          placeholder="กรอกรหัสผ่าน"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "8px 10px",
            border: "1px solid lightgray",
            borderRadius: "5px",
            marginBottom: "1rem",
            outline: "none",
          }}
          required
        />
        <button
          type="submit"
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.5rem 0",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ตรวจสอบ
        </button>
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <button
            onClick={() => router.push("/register")}
            style={{
              color: "black",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            ลงทะเบียนเพื่อใช้งานชั่วคราว
          </button>
        </div>
      </div>
    </div>
  );
}
