"use client"

const InputText = (placeholder:string) => {
  <input
    type="text"
    placeholder={placeholder}
    className={`border rounded px-2 py-1 w-full`}
  />;
}