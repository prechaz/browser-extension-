'use client'


import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import All from "./all";
import { extensionsData } from "../data/data";
import Active from "./active";
import InActive from "./inactive";
import { extension } from "./../../type.d";

export default function Tab() {
  const [extensions, setExtensions] = useState<extension[]>(extensionsData);
  const handleToggle = (name: string) => {
    const updated = extensions.map((ext) =>
      ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
    );
    setExtensions(updated)
  };
  const handleRemove = (name:string) => {
    setExtensions(extensions.filter((ext)=> ext.name !== name))
  }
  return (
    <div>
      <Tabs defaultValue="all">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[25px]">Extension List</h1>
          <TabsList className="bg-transparent">
            <TabsTrigger
              className="data-[state=active]:bg-red-700 hover:data-[state=active]:bg-red-500 dark:data-[state=active]:bg-red-500 cursor-pointer dark:hover:data-[state=active]:bg-red-400"
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-red-700 hover:data-[state=active]:bg-red-500 dark:data-[state=active]:bg-red-500 cursor-pointer dark:hover:data-[state=active]:bg-red-400"
              value="active"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-red-700 hover:data-[state=active]:bg-red-500 dark:data-[state=active]:bg-red-500 cursor-pointer dark:hover:data-[state=active]:bg-red-400"
              value="inactive"
            >
              Inactive
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <All extensions={extensions} handleToggle={handleToggle} handleRemove={handleRemove} />
        </TabsContent>
        <TabsContent value="active">
          <Active extensions={extensions}  handleToggle={handleToggle} handleRemove={handleRemove}/>
        </TabsContent>
        <TabsContent value="inactive">
          <InActive extensions={extensions}   handleToggle={handleToggle} handleRemove={handleRemove}/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
