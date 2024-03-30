"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NotebookPen } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type input = {
  title: string;
  shortDesc: string;
  desc: string;
};

const schema = z.object({
  title: z.string().min(8, "Title is too short"),
  shortDesc: z.string().min(20, "Short desc is too short"),
  desc: z.string().min(40, "Desc is too short"),
});

export function CreateModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<input>({
    resolver: zodResolver(schema),
  });
  const [tag, setTag] = useState("");
  const [tagErr, setTagErr] = useState(false);

  const onSubmit: SubmitHandler<input> = (data: input) => {
    if (tag == "") {
      setTagErr(true);
    }
    console.log({ tag, ...data });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          Write <NotebookPen size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[925px]">
        <CardHeader>
          <CardTitle>Create a post</CardTitle>
          <CardDescription>Create a super Engaging blog post!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Tags</Label>
                <Select
                  onValueChange={(e) => {
                    setTag(e);
                  }}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tags</SelectLabel>
                      <SelectItem value="tag1">Tag 1</SelectItem>
                      <SelectItem value="tag2">Tag 2</SelectItem>
                      <SelectItem value="tag3">Tag 3</SelectItem>
                      <SelectItem value="tag4">Tag 4</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {tagErr && (
                <p className="text-xs text-red-600">Tag not selected</p>
              )}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input
                  {...register("title")}
                  id="title"
                  placeholder="Title of your blog"
                />
              </div>
              <p className="text-xs text-red-600">{errors.title?.message}</p>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="shortDesc">Short Description</Label>
                <Input
                  id="shortDesc"
                  {...register("shortDesc")}
                  placeholder="Short Description of your blog"
                />
              </div>
              <p className="text-xs text-red-600">
                {errors.shortDesc?.message}
              </p>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="desc">Deatiled Description</Label>
                <Textarea
                  id="desc"
                  {...register("desc")}
                  rows={10}
                  placeholder="Description of your blog"
                />
              </div>
              <p className="text-xs text-red-600">{errors.desc?.message}</p>
            </div>
            <Button className="mt-4 w-full" type="submit">
              Save changes
            </Button>
          </form>
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
