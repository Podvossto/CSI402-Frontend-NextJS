"use client";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import AlertBox from "../components/alertBox";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    if (!username || !password) {
      setAlert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
      return;
    }

    if (password !== confirmPassword) {
      setAlert("รหัสผ่านไม่ตรงกัน");
      return;
    }
    redirect('/page2')
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
          ลงทะเบียนเพื่อใช้งานชั่วคราว
        </h2>
        {alert && <AlertBox message={alert} />}
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
          placeholder="ยืนยันรหัสผ่าน"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
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
        <button
          type="submit"
          onClick={handleRegister}
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
          ลงทะเบียน
        </button>
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <button
            onClick={() => router.push("/")}
            style={{
              color: "black",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            กลับไปหน้า login
          </button>
        </div>
      </div>
    </div>
  );
}
