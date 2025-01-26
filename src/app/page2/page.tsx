export default function page2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{marginBottom: "1rem" }}>
          เข้าสู่ระบบสำเร็จ
        </h1>
        <h2 style={{marginBottom: "1rem" }}>
          คุณมีสิทธิการใช้งาน 30 นาที
        </h2>
        <a href="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              backgroundColor: "lightcoral",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            กลับไปหน้า login
          </button>
        </a>
      </div>
    </div>
  );
}
