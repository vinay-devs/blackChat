import React, { useRef } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

type loginProps = {
  onIdSubmit: (value: string) => void;
};
export default function Login({ onIdSubmit }: loginProps) {
  const idRef = useRef<HTMLInputElement | null>(null);
  console.log(idRef);
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.value);
    if (idRef.current) onIdSubmit(idRef.current.value);
  }

  return (
    <>
      <Card className="flex flex-col  h-screen items-center justify-center  ">
        <Typography
          className="bg-blue-500 rounded text-center border p-2 w-1/4"
          variant="h1"
          color="black"
        >
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          className=" mt-1 flex border flex-col p-4 gap-4"
        >
          <Typography color="black">Your ID</Typography>
          <Input
            crossOrigin={undefined}
            size="lg"
            color="black"
            className="p-2 bg-blue-100"
            type="text"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            ref={idRef}
            placeholder="Enter Your ID here"
            required
          />
          <div className="flex justify-between">
            <Button
              type="submit"
              className=" rounded-md p-1 px-3"
              color={"blue"}
            >
              {" "}
              Login
            </Button>
            <Button color="blue" className=" rounded-md p-1">
              Create ID
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
