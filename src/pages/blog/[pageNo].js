import { useRouter } from "next/router"

const PageNo = () => {

    const router= useRouter();
    const pageN= router.query.pageNo
  return (
    <>
    <h1>This is page no {pageN} </h1>
    </>
  )
}

export default PageNo