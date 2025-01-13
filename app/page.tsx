import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/productCart'

export default function Home() {
  return (
    <main className="p-4">
    
    <h1>Hello world</h1>
    <Link href='/users'>Users</Link>
    <ProductCart/>
    </main>
  )
}
