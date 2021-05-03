import { useState } from "react";

interface IMessageDto {
  target: string;
  message: string;
}

const useMessage = () => {
  const [result, setResult] = useState("");

  const sendMessage = async (dto: IMessageDto) =>
    fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then(setResult)
      .catch(console.error);

  return { result, sendMessage };
};

export { useMessage };
export type { IMessageDto };
