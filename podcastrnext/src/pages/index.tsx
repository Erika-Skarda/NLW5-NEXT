import { useEffect } from "react"

export default function Home(props) {
  console.log(props.episodes)
  //SPA
  // useEffect(() => {
  //   fetch(' http://localhost:3002/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // },[]);

  return (
    <div>
     Index
    </div>
  )
}

//Executa antes de exectuar pg p usuário --SSR
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3002/episodes')
//   const data = await response.json()
  
//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

//Executa antes de exectuar pg p usuário --SSG -> SÓ FUNCIONA EM PRODUÇÃO(npm build) e rodar  como npm run start no lugar de dev
//revalidate é a frequencia de requisição.
export async function getStaticProps() {
  const response = await fetch('http://localhost:3002/episodes')
  const data = await response.json()
  
  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}