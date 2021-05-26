import { useRouter } from 'next/router'
function Detailspage() {
  const router = useRouter();
  console.log(router.query.newsId);
  return <h1>Hello From Detailspage</h1>
}

export default Detailspage;