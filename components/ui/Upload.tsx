"use client"
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { FileUpload } from './file-upload';


const Upload = () => {
    const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
    console.log('Uploading files:', files);
  };
  return (
    <Card className="h-full w-full bg-black overflow-hidden border">
      <CardHeader className=''>
        <CardTitle className="">Upload</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 p-2 h-[calc(100%-1rem)] overflow-auto p-0 px-3">
        <FileUpload onChange={handleFileUpload}></FileUpload>
      </CardContent>
    </Card>
  )
}

export default Upload