import {prisma}  from "db/client";

export default async function Home() {
  const users=await prisma.user.findMany();
  return(
    <div>
      {JSON.stringify(users)}
    </div>
  );
  
}

//for incremental site genertion
export const revalidate = 60;
//or 
// export const dynamic = 'force-dynamic' 



//next js dockerfile is tricky because nextjs need to have  connection and talk to DB during the  build phase