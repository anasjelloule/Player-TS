import React, { Children } from 'react';


export const App = (prop: { children: string })  =>
{
  let numbers:string ='anas'
  let i:number=9

return (
  <>
  <h1>{numbers}</h1>
   {prop.children}
  </>
);
}