import { Fragment } from 'react'
import  Link  from 'next/link';
function Newspage() {
  return (
    <Fragment>
      <h1>Hello From Newspage</h1>
      <ul>
        <li>
          <Link href='/news/great-framework'>Great framework</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default Newspage;