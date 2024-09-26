import { student } from "@/sanity/schemaTypes/student";
import { client } from "../sanity/lib/client"


async function getData() {
  const fetchData = await client.fetch(`*[_type == 'student']`);
  console.log(client)
  return fetchData;
  
}
export default async function Home() {
  
  const data = await getData();
  console.log(data)

  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>sanity Tutorial</h1>
      {
        data.map((val:any,i:number)=>{
          return(
            <>
            <h1>{val.name}</h1>
            </>
          )
        })
      }
    </main>
  );
} 
