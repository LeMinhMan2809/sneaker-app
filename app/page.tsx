import Image from 'next/image'
import Container from './components/Container'
import HomeBanner from './components/HomeBanner'
import { products } from '@/utils/products'

export default function Home() {
  return (
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className='grid grid-cols-3'>
          {products.map((product: any) => {
            return <div>{ product.name }</div>
          })}
        </div>
      </Container>
  )
}
