import useGetProducts from './hooks/useGetProducts'
import React from 'react'
import ListItem from 'components/Product/ListItem'


const Category: React.FC = () => {
  const [products] = useGetProducts()


    return (
        <div>
        {products.map(product => (
            <ListItem product={product} />
        ))}
        </div>
    )
}

export default Category