"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  farmlocation: z.string().min(5, {
    message: "Farm location must be at least 5 characters.",
  }),
  productname: z.string().min(4, {
    message: "Productname must be at least 4 characters.",
  }),
});

export function FarmForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      farmlocation: "",
      productname: "",
    },
  });

  const [longandlat, setLongAndLat] = useState<{
    latitude: string;
    longitude: string;
  }>({
    latitude: "",
    longitude: "",
  });

  const [dateTime, setDateTime] = useState<{
    year: string;
    month: string;
    day: string;
    hours: string;
    minutes: string;
  }>({
    year: "",
    month: "",
    day: "",
    hours: "",
    minutes: "",
  });

  const [userDetails, setUserDetails] = useState<{
    name: string;
    location: string;
    product: string;
  }>({ name: "", location: "", product: "" });

  const text = "Maya-B 0.1 @product of BGS GROUP";

  function onSubmit(values: z.infer<typeof formSchema>) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLongAndLat({
        latitude: latitude.toFixed(3),
        longitude: longitude.toFixed(3),
      });
    });
    const date = new Date();

    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString(); // Zero-based index (January is 0)
    const dayOfMonth = date.getDate().toString();
    const hours = date.getHours().toString();
    const minutes = date.getMinutes().toString();

    setDateTime({
      year: year,
      month: month,
      day: dayOfMonth,
      hours: hours,
      minutes: minutes,
    });

    setUserDetails({
      name: values.username,
      location: values.farmlocation,
      product: values.productname,
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="farmlocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Farm Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter farm location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="productname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit details about yourself</Button>
        </form>
      </Form>
      <div className="mx-auto text-2xl my-4">
        Once you are done providing your details upload images/videos below
      </div>
      <Input
        type="file"
        accept="image/*,video/*"
        placeholder="Take images/videos"
        multiple
        onChange={(event) => {
          if (!userDetails.name) {
            alert(
              "Please resubmit form and don't refresh page while uploading media!"
            );
            return;
          }
          const files = event.target.files;
          for (let file of files) {
            const current = file;
            if (file.type.startsWith("image/")) {
              const reader = new FileReader();
              reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                  const canvas = document.createElement("canvas");
                  canvas.width = img.width;
                  canvas.height = img.height;
                  const ctx = canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0);
                  ctx.font = "30px Arial";
                  ctx.fillStyle = "white";
                  ctx.fillText(
                    `Name: ${userDetails.name}, Location: ${userDetails.location}, Product: ${userDetails.product}\n`,
                    20,
                    img.height - 120
                  );
                  ctx.fillText(
                    `Date: ${dateTime.day}/${dateTime.month}/${dateTime.year}, Time: ${dateTime.hours}:${dateTime.minutes}`,
                    20,
                    img.height - 80
                  );
                  ctx.fillText(
                    `Location: Longitude - ${longandlat.longitude} & Latitute - ${longandlat.latitude}`,
                    20,
                    img.height - 50
                  );
                  ctx.fillText(text, 20, img.height - 10);
                  canvas.toBlob(function (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = file.name;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }, "image/jpeg");
                };
                img.src = e.target.result;
              };
              reader.readAsDataURL(file);
            }
          }
        }}
      />
      <Button
        onClick={() => {
          // navigator.geolocation.getCurrentPosition(function (position) {
          //   const latitude = position.coords.latitude;
          //   const longitude = position.coords.longitude;

          //   console.log(latitude, longitude);
          // });
          alert("hi there");
        }}
      >
        Hi there
      </Button>
    </>
  );
}
