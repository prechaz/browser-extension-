import React from "react";
import { extension } from "@/type";
import Card from "../card/card";

type Props = {
  extensions: extension[];
  handleToggle: (name: string) => void;
 handleRemove: (name: string) => void;
};
export default function All({ extensions, handleToggle, handleRemove }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {extensions.map((e) => (
        <div key={e.name}>
          <Card extension={e} handleToggle={handleToggle} handleRemove={handleRemove}/>
        </div>
      ))}
    </div>
  );
}
