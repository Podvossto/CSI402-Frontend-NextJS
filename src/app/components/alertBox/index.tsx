
const AlertBox = ({ message,color }: { message: string,color:string }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        color: `${color}`,
        fontWeight:'bold',
        padding: "0.5rem",
        borderRadius: "0.375rem",
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
};
export default AlertBox;
