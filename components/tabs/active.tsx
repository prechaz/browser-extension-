import React from 'react'
import { extension } from "@/type";
import Card from '../card/card';


type Props = {
  extensions: extension[];
  handleToggle: (name: string) => void;
  handleRemove: (name: string) => void;
};

export default function Active({extensions,handleToggle, handleRemove}:Props) {
    const filteredExtension = extensions.filter((extension)=> extension.isActive)
   
  return (
   
           <div className='grid grid-cols-3 gap-2'>
                {
                    filteredExtension.map((data)=>(
                        <div key={data.name}>
                            <Card extension={data} handleToggle={handleToggle} handleRemove={handleRemove} />
                        </div>
                        
                    ))
                }
        
            </div>
  )
}
