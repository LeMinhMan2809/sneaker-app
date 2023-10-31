import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './components/HomeBanner'
import { products } from '@/utils/products'
import ProductCard from './components/products/ProductCard'

export default function Home() {
  return (
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className='grid grid-cols-3 gap-8'>
          {products.map((product: any) => {
            return <ProductCard data={product}/>
          })}
        </div>
      </Container>
  )
}
